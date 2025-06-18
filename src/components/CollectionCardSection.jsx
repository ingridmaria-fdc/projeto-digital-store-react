import "../styles/CollectionCardSection.css";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import image1 from "../assets/camisa-supreme.png";
import image2 from "../assets/tenis-adidas.png";
import image3 from "../assets/headset.png";
import Section from "./Section";

function CollectionCardSection() {
  return (
    <div className="pl-8 flex-column align-items-center">
      <Section
        title="Coleções em destaque"
        titleAlign="left"
        link={{ text: "Mostrar mais", href: "/products" }}
      >
        <div className="grid">
          <div className=" ">
            <div className="card flex">
              <div className="text-left pl-5 mt-5">
                <span className="offer">30% OFF</span>

                <h3 className="title-card mt-3 mb-4">Novo drop Supreme</h3>

                <Link to="/products/1">
                  <Button label="Comprar" className="button-buy" />
                </Link>
              </div>

              <img
                className="mt-6"
                src={image1}
                alt="Collection"
                width="200"
                height="200"
              />
            </div>
          </div>

          <div>
            <div className="card flex">
              <div className="text-left pl-5 mt-5">
                <span className="offer">30% OFF</span>

                <h3 className="title-card mt-3 mb-4">Coleção Adidas</h3>

                <Link to="/products/1">
                  <Button label="Comprar" className="button-buy" />
                </Link>
              </div>

              <img
                className="mt-6"
                src={image2}
                alt="Collection"
                width="200"
                height="200"
              />
            </div>
          </div>

          <div>
            <div className="card flex">
              <div className="text-left pl-5 mt-5">
                <span className="offer">30% OFF</span>

                <h3 className="title-card mt-3 mb-4">Novo Beats Bass</h3>

                <Link to="/products/1">
                  <Button label="Comprar" className="button-buy" />
                </Link>
              </div>

              <img
                className="mt-6"
                src={image3}
                alt="Collection"
                width="200"
                height="200"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default CollectionCardSection;
