import "./App.css";
import BlogCard from "./components/BlogCard.tsx";
import image from "./assets/spacejoy-YqFz7UMm8qE-unsplash.jpg";

const cardData = {
  badge: "Interior",
  title: "Top 5 Living Room Inspirations",
  excerpt:
    "Curated vibrants colors for your living, make it pop & calm in the same time.",
  linkText: "Read more",
  alt: "A beautiful room",
};

function App() {
  return (
    <div className="mt-[120px] px-[17.5px]">
      <BlogCard
        image={image}
        badge={cardData.badge}
        title={cardData.title}
        excerpt={cardData.excerpt}
        linkText={cardData.linkText}
        alt={cardData.alt}
      />
    </div>
  );
}

export default App;
