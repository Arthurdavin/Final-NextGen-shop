'use client';

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { ProductCard } from "@/components/products/Product-card";
import { ChevronRight, Filter } from "lucide-react";
import { useAdminStore } from "@/lib/adminStore";
import { motion, AnimatePresence } from "framer-motion";

export default function AllProductsPage() {
  const products = useAdminStore((s) => s.products);
  const loadSeed = useAdminStore((s) => s.loadSeed);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("newest");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    loadSeed();
  }, [loadSeed]);

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category).filter(Boolean))) as string[],
    [products]
  );
// fiter product
  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (selectedCategory) {
      list = list.filter((p) => p.category === selectedCategory);
    }

    switch (sortBy) {
      case "price-low":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        list.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
      default:
        list.sort((a, b) => Number(b.id) - Number(a.id));
    }

    return list;
  }, [products, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      {/* Breadcrumb */}
      <div className="bg-background dark:bg-gray-800 border-b border-border dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-gray-300">
            <Link href="/" className="hover:text-foreground dark:hover:text-white transition">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="font-semibold text-foreground dark:text-white">All Products</span>
          </div>
        </div>
      </div>

      {/* Filters for Mobile */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-foreground dark:text-white">All Products</h1>
        <button
          className="flex items-center gap-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
          onClick={() => setShowMobileFilters((prev) => !prev)}
        >
          <Filter size={18} />
          <span className="text-sm">Filters</span>
        </button>
      </div>

      <AnimatePresence>
        {showMobileFilters && (
          <motion.div
            className="lg:hidden max-w-7xl mx-auto px-4 pb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="bg-card dark:bg-gray-800 rounded-lg p-4 space-y-4 border border-border dark:border-gray-700">
              <div>
                <h3 className="font-bold text-lg mb-2 text-foreground dark:text-white">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-3 py-1 rounded text-sm transition ${
                      selectedCategory === null
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-foreground dark:text-gray-200"
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1 rounded text-sm transition ${
                        selectedCategory === cat
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-foreground dark:text-gray-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-foreground dark:text-white">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 rounded border border-input dark:border-gray-600 bg-background dark:bg-gray-700 text-foreground dark:text-gray-200"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar for Desktop */}
        <aside className="hidden lg:block lg:col-span-1">
          <div className="bg-card dark:bg-gray-800 rounded-lg p-6 border border-border dark:border-gray-700 sticky top-24 space-y-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground dark:text-white">Categories</h3>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`text-left px-3 py-2 rounded transition ${
                    selectedCategory === null
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "hover:bg-muted dark:hover:bg-gray-700 text-foreground dark:text-gray-200"
                  }`}
                >
                  All Products
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left px-3 py-2 rounded transition ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "hover:bg-muted dark:hover:bg-gray-700 text-foreground dark:text-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground dark:text-white">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 rounded border border-input dark:border-gray-600 bg-background dark:bg-gray-700 text-foreground dark:text-gray-200"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <section className="lg:col-span-3 w-full">
          <div className="mb-6 hidden lg:block">
            <h1 className="text-4xl font-bold text-foreground dark:text-white mb-2">All Products</h1>
            <p className="text-muted-foreground dark:text-gray-300">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } }
            }}
          >
            <AnimatePresence>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={p} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground dark:text-gray-300 text-lg">No products found.</p>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
