import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// This would typically come from a CMS or database
const getBlogPost = (id: string) => {
  const posts = [
    {
      id: "1",
      title: "The Future of Green Hydrogen in Africa",
      content: `
        <p>Africa stands at a pivotal moment in its energy development. With abundant renewable resources and growing energy demands, the continent has a unique opportunity to leapfrog traditional fossil fuel infrastructure and embrace clean hydrogen as a cornerstone of its energy future.</p>
        
        <h2>The Renewable Advantage</h2>
        <p>Africa possesses some of the world's best renewable energy resources. The continent receives more hours of sunshine than any other region, with vast areas experiencing solar irradiation levels that are ideal for solar power generation. Additionally, many coastal regions offer excellent wind resources, while the continent's rivers provide significant hydroelectric potential.</p>
        <p>These renewable resources can power electrolyzers to split water into hydrogen and oxygen, producing green hydrogen without any carbon emissions. This approach aligns perfectly with global decarbonization efforts while addressing Africa's energy needs.</p>
        
        <h2>Economic Opportunities</h2>
        <p>Beyond environmental benefits, green hydrogen presents substantial economic opportunities for African nations. The hydrogen economy could create thousands of jobs across the value chain, from production and storage to distribution and end-use applications.</p>
        <p>Furthermore, as developed economies seek to import clean hydrogen, African countries with abundant renewable resources could become major exporters, generating significant revenue and improving trade balances.</p>
        
        <h2>Challenges to Overcome</h2>
        <p>Despite its promise, several challenges must be addressed to realize Africa's hydrogen potential:</p>
        <ul>
          <li>Infrastructure development requires significant investment</li>
          <li>Technical expertise and skilled workforce need development</li>
          <li>Regulatory frameworks must be established to support the hydrogen economy</li>
          <li>Initial costs remain high, though they are falling rapidly</li>
        </ul>
        
        <h2>The Path Forward</h2>
        <p>At Crossafrique Hydrogen, we're working to overcome these challenges through strategic partnerships, investment in local capacity building, and advocacy for supportive policy frameworks. Our projects across the continent demonstrate the viability of hydrogen solutions tailored to African contexts.</p>
        <p>By embracing green hydrogen today, African nations can secure energy independence, create economic opportunities, and lead in the global transition to clean energy. The future of green hydrogen in Africa is not just promising—it's essential for sustainable development across the continent.</p>
      `,
      image: "/images/blog/green-hydrogen-africa.jpg",
      date: "May 15, 2023",
      author: "Dr. Sarah Kimani",
      authorTitle: "Chief Technology Officer",
      authorImage: "/images/team/sarah-kimani.jpg",
      category: "Clean Energy & Sustainability"
    }
  ];
  
  return posts.find(post => post.id === id) || posts[0]; // Default to first post if not found
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id);
  
  return (
    <div className="pt-16">
      <div className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex items-center text-white/80">
                <div className="flex items-center mr-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <Link href="/blog" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all articles
            </Link>

            <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-emerald-600 hover:prose-a:text-emerald-700">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{post.author}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{post.authorTitle}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-24 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Related Articles</h3>
              <div className="space-y-4">
                <Link href="/blog/2" className="block p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Innovative Storage Solutions for Hydrogen</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">April 22, 2023</p>
                </Link>
                <Link href="/blog/3" className="block p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Policy Frameworks for Hydrogen Development in East Africa</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">March 10, 2023</p>
                </Link>
                <Link href="/blog/4" className="block p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Hydrogen-Powered Transportation in Urban Africa</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">February 28, 2023</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
