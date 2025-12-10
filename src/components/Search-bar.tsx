"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { PRODUCTS } from "@/data/mock-data";
import Image from "next/image";

interface SearchBarProps {
  placeholder?: string;
}

export function SearchBar({
  placeholder = "Search for products...",
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return PRODUCTS.filter(
      (product) =>
        product.title.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
    ).slice(0, 5);
  }, [query]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!(e.relatedTarget as HTMLElement)?.closest("#search-dropdown")) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative flex-1 max-w-md">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onBlur={handleBlur}
          onFocus={() => query && setIsOpen(true)}
          placeholder={placeholder}
          className="w-full px-4 py-2 bg-background dark:bg-gray-600 border border-border dark:border-gray-600 rounded-lg pl-10 
               focus:outline-none focus:ring-2 focus:ring-red-400 
               text-foreground dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground dark:text-gray-300" />
      </div>

      {isOpen && results.length > 0 && (
        <div
          id="search-dropdown"
          className="absolute top-full left-0 right-0 mt-2 bg-card dark:bg-gray-800 border border-border dark:border-gray-600 rounded-lg shadow-lg z-50"
        >
          {results.map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              onClick={() => {
                setQuery("");
                setIsOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-2 hover:bg-accent/10 dark:hover:bg-accent/20 transition border-b border-border dark:border-gray-600 ${
                index === 0 ? "rounded-t-lg" : ""
              } ${
                index === results.length - 1 ? "rounded-b-lg border-b-0" : ""
              }`}
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                width={40}
                height={40}
                className="object-cover rounded"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground dark:text-gray-100 truncate">
                  {product.title}
                </p>
                <p className="text-xs text-muted-foreground dark:text-gray-300">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
