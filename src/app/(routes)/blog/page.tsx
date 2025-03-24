import FeaturedPosts from "@/app/_components/blog/featured-posts";
import BlogCategories from "@/app/_components/blog/blog-categories";
import Newsletter from "@/app/_components/blog/newsletter";

export const metadata = {
  title: "Blog & Publications | Crossafrique Hydrogen",
  description: "Stay updated with the latest news, insights, and developments in clean hydrogen technology and its applications across Africa.",
};

export default function BlogPage() {
  return (
    <div className="pt-16">
      <div className="bg-emerald-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Publications</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Insights, news, and knowledge about hydrogen technology, sustainability, and Africa&apos;s clean energy future.
          </p>
        </div>
      </div>
      
      <FeaturedPosts />
      <BlogCategories />
      <Newsletter />
    </div>
  );
}
