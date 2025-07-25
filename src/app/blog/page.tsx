// import BlogCategories from "@/app/_components/blog/blog-categories";
import FeaturedPosts from "@/app/blog/_components/featured-posts";
import Newsletter from "@/app/blog/_components/newsletter";
import { getWordPressBlogPosts } from "@/app/blog/_actions";
import type { WordPressBlogPost } from "@/app/blog/types";

export const metadata = {
  title: "Blog & Publications | Crossafrique Hydrogen",
  description:
    "Stay updated with the latest news, insights, and developments in clean hydrogen technology and its applications across Africa.",
};

export default async function BlogPage() {
  let posts: WordPressBlogPost[] = [];
  try {
    const { posts: fetchedPosts } = await getWordPressBlogPosts({ limit: 2 });
    posts = fetchedPosts;
  } catch (error) {
    console.error("Failed to load posts:", error);
  }

  return (
    <div className="pt-16">
      <div className="bg-emerald-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog & Publications
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Insights, innovation, and ideas from the frontlines of clean energy
            systems.
          </p>
          <p className="text-xl text-emerald-100 max-w-5xl mx-auto mt-3">
            At CrossAfrique Hydrogen, we are shaping the future of sustainable
            energy through applied research, systems thinking, and practical
            project development. Our blog shares the latest updates on our work,
            industry trends, and thought leadership on integrated energy
            solutions—where hydrogen, solar, storage, and digital control
            converge.
          </p>
        </div>
      </div>

      <FeaturedPosts initialPosts={posts} />
      <Newsletter />
    </div>
  );
}