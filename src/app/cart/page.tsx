'use client';

import Link from 'next/link';
import { useCart, useAuth } from '@/lib/store';
import { Button } from '@/components/ui/Button';
import { ShoppingCart, Trash2,ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function CartPage() {
  
  const { isLoggedIn } = useAuth();
  const cart = useCart();
  const items = cart.items;
  const subtotal = cart.getCartSubtotal();
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = Math.round(subtotal * 0.1 * 100) / 100;
  const total = subtotal + shipping + tax;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <ShoppingCart size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Login Required</h1>
          <p className="text-muted-foreground mb-6">Please login to view your cart and proceed to checkout.</p>
          <Link href="/login">
            <Button className="bg-accent hover:bg-accent/90">Go to Login</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b border-border px-4 py-4 md:px-8">
        <Link href="/" className="text-muted-foreground hover:text-foreground transition">
          <Button className="bg-destructive hover:bg-destructive/90 text-destructive-foreground flex items-center gap-2">
            <ArrowLeft size={18} />
            Back to Home
          </Button>
        </Link>
      </nav>
      
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
            <p className="text-xl text-muted-foreground mb-6">Your cart is empty</p>
            <Link href="/">
              <Button className="bg-accent hover:bg-accent/90">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-card border border-border rounded-lg p-4 flex gap-4">
                  <Image 
                    src={item.image || "/placeholder.svg?height=96&width=96&query=product"} 
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded"
                    width={200}
                    height={200}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-destructive font-bold mb-4">${item.price}</p>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => cart.updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="px-3 py-1 border border-border rounded hover:bg-secondary transition"
                      >
                        −
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button 
                        onClick={() => cart.updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 border border-border rounded hover:bg-secondary transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold mb-4">${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => cart.removeFromCart(item.id)}
                      className="text-destructive hover:text-destructive/80 transition"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Order Summary */}
            <div className="bg-card border border-border rounded-lg p-6 h-fit">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping:</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax (10%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total:</span>
                <span className="text-destructive">${total.toFixed(2)}</span>
              </div>
              <Link href="/checkout" className="w-full block">
                <Button className="w-full bg-destructive hover:bg-destructive/90">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
