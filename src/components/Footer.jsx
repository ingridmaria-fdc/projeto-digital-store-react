import facebookIcon from "../assets/facebook.svg";
import InformationSection from "./InformationSection";
import instagramIcon from "../assets/instagram.svg";
import Logo from "./Logo";
import logoFooter from "../assets/logo-footer.svg";
import twitterIcon from "../assets/twitter.svg";

const Footer = () => {
  const infoSection = [
    { text: "Sobre Drip Store" },
    { text: "Segurança" },
    { text: "Wishlist" },
    { text: "Blog" },
    { text: "Trabalhe conosco" },
    { text: "Meus Pedidos" },
  ];

  const categorySection = [
    { text: "Camisetas", link: "/products?category=camisetas" },
    { text: "Calças", link: "/products?category=calcas" },
    { text: "Bonés", link: "/products?category=bones" },
    { text: "Headphones", link: "/products?category=headphones" },
    { text: "Tênis", link: "/products?category=tenis" },
  ];

  const contactSection = [
    {
      text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
    },
    { text: "(85) 3051-3411" },
  ];

  return (
    <footer className="p-5 bg-gray-900 text-white h-29rem">
      <div className="flex flex-column md:flex-row justify-content-between h-21rem pr-6">
        <div className="flex flex-column gap-3 max-w-35rem">
          <Logo src={logoFooter} />

          <p className="text-white pl-8 w-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>

          <div className="flex gap-5 pl-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" width="10" height="20" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" width="20" height="20" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterIcon} alt="Twitter" width="22" height="20" />
            </a>
          </div>
        </div>

        <InformationSection title="Informação" informations={infoSection} />
        <InformationSection title="Categorias" informations={categorySection} />
        <InformationSection
          title="Contato"
          informations={contactSection}
          className="w-1rem"
        />
      </div>

      <hr className="my-4 bg-gray-500" />

      <p className="text-center text-sm text-white">
        © {new Date().getFullYear()} Digital Store
      </p>
    </footer>
  );
};

export default Footer;
