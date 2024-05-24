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
      {/* Card border radius and object fit */}
      <div>
        <img
          src={image}
          alt={alt || "Room thumbnail"}
          loading="lazy"
          className="rounded-tl-lg rounded-tr-lg"
        />
      </div>
      <div className="px-4 py-6 flex flex-col gap-3">
        <div>
          {/* Set inner border */}
          <p className="inline-block mb-2 text-sm text-green-700 bg-green-50 border-2 border-green-200 px-2 py-[2px] rounded-2xl">
            {badge}
          </p>
          <p className="text-lg text-neutral-900 font-semibold">{title}</p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-base text-neutral-600 font-medium">{excerpt}</p>
          {/* button states and extract into component */}
          <a href="" target="_blank" className="flex gap-[6px] items-center text-indigo-700">
            <p className="text-base font-medium">{linkText}</p>
            <FaArrowRight size={16} />{" "}
          </a>
        </div>
      </div>
    </main>
  );
};
export default BlogCard;
