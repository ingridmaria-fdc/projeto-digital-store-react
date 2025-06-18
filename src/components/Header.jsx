import "../styles/Header.css";
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import cartIcon from "../assets/mini-cart.svg";
import Logo from "./Logo";
import logoHeader from "../assets/logo-header.svg";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/products?filter=${encodeURIComponent(search)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="bg-white w-full h-12rem gap-3 md:flex-row flex-column">
      <div className="flex flex-column w-full md:w-auto md:flex-row align-items-center">
        <Logo src={logoHeader} />

        <div className="pl-5 pt-4 flex align-items-center gap-5">
          <IconField>
            <InputIcon
              className="pi pi-search cursor-pointer pr-2 font-light"
              onClick={handleSearch}
            />
            <InputText
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={handleKeyPress}
              placeholder="Pesquisar produto..."
              className="search pl-3"
            />
          </IconField>

          <NavLink className="register text-700 underline">Cadastre-se</NavLink>

          <NavLink>
            <Button label="Entrar" className="button" />
          </NavLink>
          <div className="ml-5">
            <span className="notification ml-3 mb-0">2</span>
            <img className="cart" src={cartIcon} alt="Carrinho" width="24" />
          </div>
        </div>
      </div>

      <nav className="flex gap-5 pt-6 pl-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "menu text-pink-600 font-bold border-bottom-2 border-pink-600"
              : "menu text-700"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "menu text-pink-600 border-bottom-2 border-pink-600"
              : "menu text-700"
          }
        >
          Produtos
        </NavLink>

        <NavLink className="menu text-700">Categorias</NavLink>

        <NavLink className="menu text-700">Meus Pedidos</NavLink>
      </nav>
    </header>
  );
};

export default Header;
