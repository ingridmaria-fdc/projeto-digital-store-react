import CollectionCardSection from "../components/CollectionCardSection";
import ColletionIconSection from "../components/CollectionIconSection";
import Gallery from "../components/Gallery";
import SecondaryGallery from "../components/SecondaryGallery";
import TrendingProductsSection from "../components/TrendingProductsSection";

const images = [
  { src: "/home-slide-7.jpeg", alt: "tenis" },
  { src: "/home-slide-6.jpeg", alt: "tenis" },
  { src: "/home-slide-3.jpeg", alt: "tenis" },
  { src: "/home-slide-4.jpeg", alt: "tenis" },
  { src: "/home-slide-5.jpeg", alt: "tenis" },
];

const images2 = [
  { src: "/home-slide-4.jpeg", alt: "tenis" },
  { src: "/home-slide-3.jpeg", alt: "tenis" },
  { src: "/home-slide-5.jpeg", alt: "tenis" },
  { src: "/home-slide-2.jpeg", alt: "tenis" },
  { src: "/home-slide-1.jpeg", alt: "tenis" },
];

export default function Home() {
  return (
    <section>
      <Gallery width="95rem" height="600px" radius="3px" images={images} />
      <CollectionCardSection />
      <ColletionIconSection />
      <TrendingProductsSection />
      <SecondaryGallery
        width="95rem"
        height="600px"
        radius="3px"
        images={images2}
      />
    </section>
  );
}
