import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeart, BsChat } from 'react-icons/bs';
import { BlogPost } from '@/types';

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
  if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
  return 'recently';
}

export function BlogSection({ blogs }: { blogs: BlogPost[] }) {
  const displayBlogs = blogs.slice(0, 6);

  return (
    <div id="blogs" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Violet blur */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20" />

      {/* Gradient separator */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <h2 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">Blogs</h2>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {displayBlogs.length === 0 ? (
        <p className="text-center text-gray-400 py-12">No posts yet. Check back soon!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
          {displayBlogs.map((blog) => {
            const articleUrl = blog.canonical_url || blog.url || '/blog';
            const imageUrl = blog.cover_image || blog.image;
            const ago = blog.published_at ? timeAgo(blog.published_at) : '';

            return (
              <div
                key={blog.id}
                className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
              >
                {imageUrl && (
                  <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
                    <Image
                      alt={`Cover image for ${blog.title}`}
                      loading="lazy"
                      width={1920}
                      height={1080}
                      className="h-full w-full group-hover:scale-110 transition-all duration-300 object-cover"
                      style={{ width: '100%', height: '100%' }}
                      src={imageUrl}
                    />
                  </div>
                )}
                <div className="p-2 sm:p-3 flex flex-col">
                  <div className="flex justify-between items-center text-[#16f2b3] text-sm">
                    <p>{ago}</p>
                    <div className="flex items-center gap-3">
                      {blog.positive_reactions_count != null && (
                        <p className="flex items-center gap-1">
                          <BsHeart aria-hidden="true" />
                          <span>{blog.positive_reactions_count}</span>
                        </p>
                      )}
                      {blog.comments_count != null && (
                        <p className="flex items-center gap-1">
                          <BsChat aria-hidden="true" />
                          <span>{blog.comments_count}</span>
                        </p>
                      )}
                    </div>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href={articleUrl} aria-label={`Read article: ${blog.title}`}>
                    <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500 transition-colors">
                      {blog.title}
                    </p>
                  </a>
                  {blog.reading_time_minutes && (
                    <p className="mb-2 text-sm text-[#16f2b3]">{blog.reading_time_minutes} Min Read</p>
                  )}
                  <p className="text-sm lg:text-base text-gray-300 pb-3 lg:pb-6 line-clamp-3">
                    {blog.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
