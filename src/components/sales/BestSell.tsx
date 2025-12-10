'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { flashSalesProducts } from '@/data/mock-data';
import { ProductCard } from '@/components/products/Product-card';
import { motion } from 'framer-motion';
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 33,
    minutes: 18,
    seconds: 54,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ label, value }: { label: string; value: number }) => (
    <div className="text-center">
      <div className="bg-primary text-primary-foreground rounded px-3 py-2 text-lg font-bold">
        {String(value).padStart(2, '0')}
      </div>
      <p className="text-muted-foreground text-xs mt-1">{label}</p>
    </div>
  );

  return (
    <div className="flex gap-4 items-center">
      <TimeUnit label="Days" value={timeLeft.days} />
      <span className="text-primary font-bold">:</span>
      <TimeUnit label="Hours" value={timeLeft.hours} />
      <span className="text-primary font-bold">:</span>
      <TimeUnit label="Mins" value={timeLeft.minutes} />
      <span className="text-primary font-bold">:</span>
      <TimeUnit label="Secs" value={timeLeft.seconds} />
    </div>
  );
}
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
        <CountdownTimer />
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
