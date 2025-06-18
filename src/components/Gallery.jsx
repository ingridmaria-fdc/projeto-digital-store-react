import "../styles/Gallery.css";
import { Button } from "primereact/button";
import { Galleria } from "primereact/galleria";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Gallery({
  className = "",
  width = "640px",
  height = "360px",
  radius = "8px",
  images = [],
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemTemplate = (item) => {
    return (
      <img
        src={item.src}
        alt={item.alt}
        style={{
          width: width,
          height: height,
          objectFit: "cover",
          borderRadius: radius,
        }}
      />
    );
  };

  return (
    <div
      className={`flex flex-col items-left  ${className}`}
      style={{ width: width, backgroundColor: "#f5f5f5" }}
    >
      <div className="text-left px-6 w-60rem justify-content-center align-content-center">
        <p className="text-yellow-500 text-sm font-semibold">
          Melhores ofertas personalizadas
        </p>

        <span className="title">
          Queima de <br /> estoque Nike{" "}
          <span role="img" aria-label="fogo">
            🔥
          </span>
        </span>

        <p className="subtitle">
          Consequat culpa exercitation mollit nisi excepteur do do tempor
          laboris eiusmod irure consectetur.
        </p>
        <Link to="/products/1">
          <Button label="Ver Ofertas" className="button" />
        </Link>
      </div>

      <Galleria
        value={images}
        numVisible={1}
        item={itemTemplate}
        showThumbnails={false}
        showIndicators={false}
        showItemNavigators
        circular
        activeIndex={activeIndex}
        onItemChange={(e) => setActiveIndex(e.index)}
      />
    </div>
  );
}
