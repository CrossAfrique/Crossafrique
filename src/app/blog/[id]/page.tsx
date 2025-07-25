
import Image from "next/image";
import Newsletter from "@/app/blog/_components/newsletter";
import { getWordPressBlogPost, getWordPressBlogPosts } from "@/app/blog/_actions";
import Link from "next/link";

                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No related articles found.</p>
            )}
          </aside>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}