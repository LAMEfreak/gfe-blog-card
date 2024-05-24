import { FaArrowRight } from "react-icons/fa";

interface BlogCardProps {
  image: string;
  badge: string;
  title: string;
  excerpt: string;
  linkText: string;
  alt?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  badge,
  title,
  excerpt,
  linkText,
  alt,
}): React.JSX.Element => {
  return (
    <main className="w-[340px] border rounded-lg bg-white border-neutral-200 shadow-sm">
      <div className="h-72">
        <img
          src={image}
          alt={alt || "Room thumbnail"}
          loading="lazy"
          // object-cover specifies image resize to fit fixed height container
          // h-full and w-full specifies image to take full height and width of container
          // this is so that cards have the same height despite images of different dimensions
          className="rounded-tl-lg rounded-tr-lg object-cover h-full w-full"
        />
      </div>
      <div className="px-4 py-6 flex flex-col gap-3">
        <div>
          <p className="inline-block mb-2 text-sm text-green-700 bg-green-50 border border-green-200 px-2 py-[2px] rounded-2xl">
            {badge}
          </p>
          {/* line-clamp truncates a block of text after a specific number of lines. */}
          <p className="text-lg text-neutral-900 font-semibold line-clamp-1">
            {title}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-base text-neutral-600 font-medium line-clamp-3">
            {excerpt}
          </p>
          <a
            href="https://www.greatfrontend.com/projects/u/LAMEfreak"
            target="_blank"
            className="flex gap-[6px] rounded-[4px] items-center text-indigo-700 hover:text-[#3730A3] transition-all duration-300 ease-in-out focus:ring-2 disabled:text-[#A3A3A3]"
          >
            <p className="text-base font-medium">{linkText}</p>
            <FaArrowRight size={16} />{" "}
          </a>
        </div>
      </div>
    </main>
  );
};
export default BlogCard;
