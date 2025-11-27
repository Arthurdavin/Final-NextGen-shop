'use client';

import { useState } from "react";
import { useParams } from "next/navigation";
import { useCart, useWishlist } from "@/lib/store"; // Use wishlist store
import {
  flashSalesProducts,
  bestSellingProducts,
  newArrivalsProducts,
} from "@/data/mock-data";
import { Heart, ShoppingCart, Star, Truck, Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  image?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  description?: string;
};

export default function ProductDetailPage() {
  const params = useParams();
  const rawId = params.id;
  const productId = parseInt(Array.isArray(rawId) ? rawId[0] : rawId ?? "", 10);

  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [wishlistFeedback, setWishlistFeedback] = useState<string | null>(null);

  const addToCart = useCart((state) => state.addToCart);
  const { items: wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();

  // Merge all products into one array
  const allProducts: Product[] = [
    ...flashSalesProducts,
    ...bestSellingProducts,
    ...newArrivalsProducts,
  ];

  // Find product by ID
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link href="/">
            <Button className="bg-destructive hover:bg-destructive/90 text-destructive-foreground flex items-center gap-2">
              <ArrowLeft size={18} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      image: product.image ?? "/placeholder.svg", // ensure string
      quantity,
      inStock: true,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const toggleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
      setWishlistFeedback("Removed from Wishlist");
    } else {
      addToWishlist({
        ...product,
        quantity: 1,
        inStock: true,
        image: product.image ?? "/placeholder.svg", // ensure string
      });
      setWishlistFeedback("Added to Wishlist");
    }
    setTimeout(() => setWishlistFeedback(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="border-b border-border px-4 py-4 md:px-8">
        <Link href="/">
          <Button className="bg-destructive hover:bg-destructive/90 text-destructive-foreground flex items-center gap-2">
            <ArrowLeft size={18} />
            Back to Home
          </Button>
        </Link>
      </nav>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-secondary rounded-lg h-96 md:h-full">
            <Image
              src={product.image ?? "/placeholder.svg"} // ensure string
              alt={product.title}
              className="h-full w-full object-cover rounded-lg"
              width={900}
              height={900}
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.title}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-destructive">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                )}
              </div>

              <p className="text-muted-foreground mb-6">{product.description ?? ""}</p>
            </div>

            {/* Quantity and Buttons */}
            <div className="space-y-4">
              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-card transition"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 border-l border-r border-border">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-card transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 relative">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  {isAdded ? "Added to Cart!" : "Add to Cart"}
                </Button>

                <div className="relative">
                  <Button onClick={toggleWishlist} variant="outline" className="px-6">
                    <Heart size={20} fill={isInWishlist ? "currentColor" : "none"} />
                  </Button>

                  {/* Wishlist feedback */}
                  {wishlistFeedback && (
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-sm bg-accent text-white px-3 py-1 rounded-lg shadow-md animate-fade-in-out">
                      {wishlistFeedback}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-6 border-t border-border">
              <div className="flex items-start gap-3">
                <Truck className="text-destructive mt-1" size={20} />
                <div>
                  <p className="font-semibold">Free Delivery</p>
                  <p className="text-sm text-muted-foreground">Orders over $100 qualify for free shipping</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="text-destructive mt-1" size={20} />
                <div>
                  <p className="font-semibold">Return Policy</p>
                  <p className="text-sm text-muted-foreground">30-day return guarantee on all purchases</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.slice(0, 4).map((p) => (
              <Link key={p.id} href={`/products/${p.id}`} className="group">
                <div className="bg-secondary rounded-lg overflow-hidden mb-4 h-48 flex items-center justify-center group-hover:bg-secondary/80 transition-colors">
                  <Image
                    src={p.image ?? "/placeholder.svg"} // ensure string
                    alt={p.title}
                    className="h-full w-full object-cover"
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="text-accent font-bold">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
