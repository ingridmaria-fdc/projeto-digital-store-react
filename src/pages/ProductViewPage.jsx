import { classNames } from "primereact/utils";
import { Galleria } from "primereact/galleria";
import { useState } from "react";
import BuyBox from "../components/BuyBox";
import ProductListing from "../components/ProductListing";
import ProductOptions from "../components/ProductOptions";
import Section from "../components/Section";
import tenis1 from "../assets/tenis-gallery-1.png";
import tenis2 from "../assets/tenis-gallery-2.png";
import tenis3 from "../assets/tenis-gallery-3.png";
import tenis4 from "../assets/tenis-gallery-4.png";
import tenis5 from "../assets/tenis-gallery-5.png";

export default function ProductViewPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const product = {
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    reference: "38416711",
    stars: "4.7",
    rating: 90,
    price: 219,
    priceDiscount: 219,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    images: [
      { src: tenis1 },
      { src: tenis2 },
      { src: tenis3 },
      { src: tenis4 },
      { src: tenis5 },
    ],
    sizes: ["39", "40", "41", "42", "43"],
    colors: ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"],
  };

  const recommended = [
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis1,
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis2,
      price: 49.9,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis3,
      price: 49.9,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis4,
      price: 49.9,
    },
  ];

  const itemTemplate = (item) => {
    return (
      <img
        src={item.src}
        alt={item.alt}
        style={{
          width: "800px",
          height: "570px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />
    );
  };

  return (
    <>
      <div className="px-8 pt-3 flex justify-content-left text-gray-700">
        <p className="text-sm font-medium">
          Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature
          Masculino
        </p>
      </div>

      <div className="py-5 flex">
        <Galleria
          value={product.images}
          numVisible={1}
          item={itemTemplate}
          showThumbnails={false}
          showIndicators={false}
          showItemNavigators
          circular
          activeIndex={activeIndex}
          onItemChange={(e) => setActiveIndex(e.index)}
          containerClass="border-none shadow-none"
          panelContainerClass="bg-transparent"
          itemWrapperClass="bg-transparent"
        />

        <BuyBox
          name={product.name}
          reference={product.reference}
          stars={product.stars}
          rating={product.rating}
          price={product.price}
          priceDiscount={product.priceDiscount}
          description={product.description}
        >
          <ProductOptions
            options={product.sizes}
            type="text"
            shape="square"
            title="Tamanho"
          />
          <ProductOptions
            options={product.colors}
            type="color"
            shape="circle"
            title="Cores"
          />
        </BuyBox>
      </div>

      <div className="flex gap-3 px-5 pb-5 justify-content-start">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            onClick={() => setActiveIndex(index)}
            className={classNames(
              "w-6rem h-6rem border-2 cursor-pointer transition-all border-round",
              {
                "border-pink-400": index === activeIndex,
                "border-transparent hover:border-blue-300":
                  index !== activeIndex,
              }
            )}
            style={{ objectFit: "cover" }}
          />
        ))}
      </div>

      <div className="pb-5">
        <Section
          title="Produtos recomendados"
          titleAlign="left"
          link={{ text: "Ver todos", href: "/products" }}
        >
          <ProductListing products={recommended} />
        </Section>
      </div>
    </>
  );
}
