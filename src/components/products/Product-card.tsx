'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart, useWishlist, useAuth } from '@/lib/store';
import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  showDiscount?: boolean;
}

export function ProductCard({ product, showDiscount = false }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const addToCart = useCart((state) => state.addToCart);
  
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isFavorite = isInWishlist(product.id);
  const { isLoggedIn } = useAuth();

  // Icons
  const HeartIcon = ({ fill = false }: { fill?: boolean }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={fill ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );

  const CartIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );

  // Add to cart
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isLoggedIn) {
      window.location.href = '/login';
      return;
    }
    setIsAdding(true);
    addToCart({
      ...product,
      quantity: 1,
      inStock: true,
    });
    setTimeout(() => setIsAdding(false), 1500);
  };

  // Wishlist toggle
  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isLoggedIn) {
      window.location.href = '/login';
      return;
    }
    if (isFavorite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        ...product,
        quantity: 1,
        inStock: true,
      });
    }
  };

  // Fallbacks for missing fields
  const title = product.title ?? product.name ?? 'Product';
  const price = product.price ?? 0;
  const originalPrice = product.originalPrice ?? null;
  const rating = product.rating ?? 0;
  const reviews = product.reviews ?? 0;
  const discount = product.discount ?? 0;
  const imageSrc = product.image ?? '/placeholder.svg';

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group cursor-pointer">
        {/* Image container */}
        <div className="relative bg-card rounded overflow-hidden mb-4 aspect-square flex items-center justify-center border border-border">
          <Image
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
            width={900}
            height={900}
          />

          {/* Discount badge */}
          {showDiscount && discount > 0 && (
            <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-3 py-1 rounded text-sm font-semibold">
              -{discount}%
            </div>
          )}

          {/* Favorite button */}
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 bg-foreground text-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
          >
            <HeartIcon fill={isFavorite} />
          </button>

          {/* Add to Cart button */}
          <button 
            onClick={handleAddToCart}
            className="absolute bottom-0 left-0 right-0 bg-foreground text-background py-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition translate-y-full group-hover:translate-y-0 flex items-center justify-center gap-2 hover:bg-opacity-90"
          >
            <CartIcon />
            {isAdding ? 'Added!' : 'Add To Cart'}
          </button>
        </div>

        {/* Product info */}
        <div>
          <h3 className="text-foreground font-semibold text-sm mb-2 line-clamp-2 group-hover:text-accent transition">
            {title}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-destructive font-bold">${price}</span>
            {originalPrice && (
              <span className="text-muted-foreground line-through text-sm">${originalPrice}</span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-muted-foreground'}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-muted-foreground text-xs">({reviews})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
