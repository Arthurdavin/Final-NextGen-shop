'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useCart, useAuth, useWishlist } from "@/lib/store";
import { SearchBar } from "@/components/Search-bar";
import { useTheme } from "@/contexts/Theme-provider";
<Link href="/admin" className="ml-4 text-sm text-gray-700">Admin</Link>

import {
  Heart,
  ShoppingCart,
  User,
  LogOut,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import Image from "next/image";

/* ----------------------
   Client-only badges (mount-safe)
   Render nothing on server / before mount
------------------------ */
function CartBadge() {
  const [mounted, setMounted] = useState(false);
  const cartCount = useCart((state) => state.getCartCount());

  useEffect(() => {
    setMounted(true);
  }, []);

  // don't render anything until mounted on client
  if (!mounted) return null;
  if (cartCount === 0) return null;

  return (
    <span className="absolute -top-1 -right-1 w-5 h-5 text-xs bg-red-500 text-white font-bold rounded-full flex items-center justify-center">
      {cartCount}
    </span>
  );
}


function WishlistBadge() {
  const [mounted, setMounted] = useState(false);
  const wishlistCount = useWishlist((state) => state.items.length);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (wishlistCount === 0) return null;

  return (
    <span className="absolute -top-1 -right-1 w-5 h-5 text-xs bg-red-500 text-white font-bold rounded-full flex items-center justify-center">
      {wishlistCount}
    </span>
  );
}

export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { user, isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    router.push("/");
  };

  /* Scroll detect */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const iconClasses = "p-2 hover:text-red-500 transition rounded-full";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 backdrop-blur-md ${
        theme === "dark" ? "text-gray-100" : "text-gray-900"
      } ${
        isScrolled
          ? theme === "dark"
            ? "bg-gray-900/80 border-gray-700"
            : "bg-white/80 border-gray-200"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 mr-6 min-w-[150px] md:min-w-0">
            <Image
              src="/logoheader.png"
              alt="Exclusive Logo"
              width={500}
              height={500}
              className="object-contain w-32 mx-auto md:mx-0"
            />
          </Link>

          {/* SEARCH BAR DESKTOP */}
          <div className="hidden md:block flex-shrink-0 w-80 mr-8">
            <SearchBar />
          </div>

          {/* NAV DESKTOP */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium h-full flex-shrink-0">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`h-full flex items-center border-b-2 border-transparent hover:border-red-500 hover:text-red-500 transition ${
                  pathname === item.href ? "border-red-500 text-red-500" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ICONS */}
          <div className="flex items-center gap-2 ml-4 md:ml-6">

            {/* THEME BUTTON */}
            <button onClick={toggleTheme} className={`hidden md:block ${iconClasses}`}>
              {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            {/* WISHLIST ICON */}
            <Link href="/wishlist" className={`relative ${iconClasses}`}>
              <Heart size={22} />
              <WishlistBadge />
            </Link>

            {/* CART ICON */}
            <Link href={isLoggedIn ? "/cart" : "/login"} className={`relative ${iconClasses}`}>
              <ShoppingCart size={22} />
              <CartBadge />
            </Link>

            {/* USER MENU */}
            <div className="relative">
              <button onClick={() => setShowUserMenu(!showUserMenu)} className={`hidden md:block ${iconClasses}`}>
                <User size={22} />
              </button>

              {showUserMenu && (
                <div
                  className={`absolute right-0 mt-2 w-48 border rounded-lg shadow-lg overflow-hidden ${
                    theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
                  }`}
                >
                  {isLoggedIn ? (
                    <>
                      <div className="px-4 py-3 border-b border-gray-300 dark:border-gray-700">
                        <p className="text-sm font-semibold">{user?.name || "User"}</p>
                        <p className="text-xs opacity-70">{user?.email || "user@example.com"}</p>
                      </div>

                      <Link href="/account" onClick={() => setShowUserMenu(false)} className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                        My Account
                      </Link>

                      <Link href="/orders" onClick={() => setShowUserMenu(false)} className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                        My Orders
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <LogOut size={16} /> Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" onClick={() => setShowUserMenu(false)} className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                        Login
                      </Link>

                      <Link href="/signup" onClick={() => setShowUserMenu(false)} className="block px-4 py-2 text-sm border-t dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`lg:hidden ${iconClasses}`}>
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden py-4 border-t border-gray-200 dark:border-gray-700`}>
          <nav className="flex flex-col gap-2 text-base font-medium">

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-red-500"
              >
                {item.label}
              </Link>
            ))}

            {/* MOBILE THEME CHANGE */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </button>

            {/* MOBILE WISHLIST */}
            <Link
              href="/wishlist"
              onClick={() => setIsMenuOpen(false)}
              className="relative flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Heart size={20} />
              <span>Wishlist</span>
              <WishlistBadge />
            </Link>

            {/* MOBILE CART AND LOGIN */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <LogOut size={20} /> Logout
              </button>
            ) : (
              <>
                <Link href="/login" onClick={() => setIsMenuOpen(false)} className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                  Login
                </Link>

                <Link href="/signup" onClick={() => setIsMenuOpen(false)} className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                  Sign Up
                </Link>
              </>
            )}
          </nav>

          {/* MOBILE SEARCH BAR */}
          <div className="lg:hidden mt-3">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
}
