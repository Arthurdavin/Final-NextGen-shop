import { FlashSalesSection } from '@/components/sales/Flash-sales-section';
import { BrowseByCategory } from '@/components/categories/Browse-by-category';
import { CarouselGrid } from '@/components/products/Carousel-grid';
import { bestSellingProducts } from '@/data/mock-data';
import NewArrivalSection from '@/components/products/NewArrivalSection';
import IPhoneBannerSlider from '@/components/banner/IPhoneBannerSlider';
import MusicPromoBanner from '@/components/music/MusicPromoBanner';
import { BestSell } from '@/components/sales/BestSell';

export const metadata = {
  title: "Home | NextGen Shop",
  description:
    "Discover the latest electronics, gadgets, smartphones, audio gear, and lifestyle products at NextGen Shop. Enjoy flash sales, top categories, and new arrivals updated daily.",
  keywords: [
    "nextgen shop",
    "flash sales",
    "online shopping",
    "electronics",
    "gadgets",
    "smartphones",
    "new arrivals",
    "best selling products",
    "tech deals",
    "ecommerce"
  ],
  openGraph: {
    title: "NextGen Shop - Your Ultimate Online Store",
    description:
      "Explore trending electronics, gadgets, smartphones, and home essentials at unbeatable prices. Shop smarter with NextGen Shop.",
    url: "https://next-gen-shop-cplw.vercel.app",
    siteName: "NextGen Shop",
    type: "website",
    images: [
      {
        url: "/metadate.png",
        width: 1200,
        height: 630,
        alt: "NextGen Shop Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGen Shop",
    description:
      "Shop electronics, gadgets, and lifestyle products at the best prices — only at NextGen Shop.",
    images: ["/metadatax.png"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      <main>
        <div className="max-w-7xl mx-auto p-4">
          <IPhoneBannerSlider/>
        </div>
        <CarouselGrid products={bestSellingProducts} title="Best Selling Products" subtitle="This Month" />
        <BrowseByCategory />
        <BestSell />
        <MusicPromoBanner />
        <FlashSalesSection />
        <NewArrivalSection />
      </main>
    </div>
  );
}