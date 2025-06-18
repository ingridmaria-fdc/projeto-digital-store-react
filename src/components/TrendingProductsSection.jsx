import ProductListing from "./ProductListing";
import Section from "./Section";

const trendingProducts = [
  {
    name: "K-Swiss V8 - Masculino",
    image: "/product-thumb-1.jpeg",
    price: 200,
    priceDiscount: 150,
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/product-thumb-2.jpeg",
    price: 200,
    priceDiscount: 150,
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/product-thumb-3.jpeg",
    price: 200,
    priceDiscount: 150,
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/product-thumb-4.jpeg",
    price: 200,
    priceDiscount: 150,
  },
];

const trendingProducts2 = [
  {
    name: "K-Swiss V8 - Masculino",
    image: "/product-thumb-5.jpeg",
    price: 200,
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/product-thumb-1.jpeg",
    price: 200,
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/product-thumb-2.jpeg",
    price: 200,
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/product-thumb-3.jpeg",
    price: 200,
  },
];

export default function TrendingProductsSection() {
  return (
    <div className="pl-8 pb-8">
      <div>
        <Section
          title="Produtos em alta"
          titleAlign="left"
          link={{ text: "Ver todos", href: "/produtos" }}
        >
          <ProductListing products={trendingProducts} />
        </Section>
      </div>

      <div>
        <Section>
          <ProductListing products={trendingProducts2} />
        </Section>
      </div>
    </div>
  );
}
