'use client';

import Link from 'next/link';
import { flashSalesProducts } from '@/data/mock-data';
import { ProductCard } from '@/components/products/Product-card';
import { motion } from 'framer-motion';

export function BestSell() {
  return (
    <section className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-10 bg-primary rounded"></div>
              <h3 className="text-primary font-semibold">Today</h3>
            </div>
            <h2 className="text-3xl font-bold text-foreground mt-2">Flash Sales</h2>
          </div>
        
        </div>

        {/* Product grid - animated */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {flashSalesProducts.slice(0, 4).map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-lg"
            >
              <ProductCard product={product} showDiscount={true} />
            </motion.div>
          ))}
        </div>

        {/* Mobile view link */}
        <div className="md:hidden text-center">
          <Link
            href="/products"
            className="text-primary hover:underline font-semibold"
          >
            View All →
          </Link>
        </div>
      </div>
    </section>
  );
}
