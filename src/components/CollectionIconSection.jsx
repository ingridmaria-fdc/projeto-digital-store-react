import "../styles/CollectionIconSection.css";
import cap from "../assets/bone-icone.png";
import headset from "../assets/fone-de-ouvido-icone.png";
import pant from "../assets/jeans-icone.png";
import shirt from "../assets/camiseta-icone.png";
import tennis from "../assets/tenis-icone.png";

const collections = [
  {
    label: "Camisetas",
    icon: <img src={shirt} alt="camiseta" />,
  },
  {
    label: "Calças",
    icon: <img src={pant} alt="calça" />,
  },
  {
    label: "Bonés",
    icon: <img src={cap} alt="boné" />,
  },
  {
    label: "Headphones",
    icon: <img src={headset} alt="fone de ouvido" />,
  },
  {
    label: "Tênis",
    icon: <img src={tennis} alt="tênis" />,
  },
];

const ColletionIconSection = () => {
  return (
    <div className="text-center pt-5 pb-5">
      <h2 className="title-icons text-gray-700 mb-3">Coleções em destaque</h2>
      <div className="flex justify-content-center gap-5 flex-wrap">
        {collections.map((item, index) => (
          <div
            key={index}
            className="flex flex-column align-items-center gap-2 group cursor-pointer"
          >
            <div className="circle-icon">{item.icon}</div>
            <span className="label-icon">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColletionIconSection;
