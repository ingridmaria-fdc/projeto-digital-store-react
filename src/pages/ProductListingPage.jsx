import "../styles/ProductListingPage.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import FilterGroup from "../components/FilterGroup";
import ProductListing from "../components/ProductListing";

const ProductListingPage = () => {
  const filterData = {
    marca: [
      { text: "Adiddas", value: "adiddas" },
      { text: "Calenciaga", value: "calenciaga" },
      { text: "K-Swiss", value: "kswiss" },
      { text: "Nike", value: "nike" },
      { text: "Puma", value: "puma" },
    ],
    categoria: [
      { text: "Esporte e lazer", value: "esporte" },
      { text: "Casual", value: "casual" },
      { text: "Utilitário", value: "utilitario" },
      { text: "Corrida", value: "corrida" },
    ],
    genero: [
      { text: "Masculino", value: "masculino" },
      { text: "Feminino", value: "feminino" },
      { text: "Unisex", value: "unisex" },
    ],
    estado: [
      { text: "Novo", value: "novo" },
      { text: "Usado", value: "usado" },
    ],
  };

  const products = [
    {
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-1.jpeg",
      price: 200,
      priceDiscount: 100,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "produc-image-2.jpeg",
      price: 200,
      priceDiscount: 100,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "produc-image-3.jpeg",
      price: 200,
      priceDiscount: 100,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "produc-image-4.jpeg",
      price: 200,
      priceDiscount: 100,
    },
  ];

  const products2 = [
    {
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-5.jpeg",
      price: 200,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "produc-image-4.jpeg",
      price: 200,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "produc-image-1.jpeg",
      price: 200,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "produc-image-2.jpeg",
      price: 200,
    },
  ];

  const products3 = [
    {
      name: "K-Swiss V8 - Masculino",
      image: "/product-thumb-2.jpeg",
      price: 200,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "product-thumb-1.jpeg",
      price: 200,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "product-thumb-3.jpeg",
      price: 200,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "product-thumb-4.jpeg",
      price: 200,
    },
  ];

  const products4 = [
    {
      name: "K-Swiss V8 - Masculino",
      image: "/product-thumb-1.jpeg",
      price: 200,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "product-thumb-4.jpeg",
      price: 200,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "product-thumb-2.jpeg",
      price: 200,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "product-thumb-3.jpeg",
      price: 200,
    },
  ];

  return (
    <div className="flex p-3">
      <div>
        <div className="filter p-3">
          <h3 className="mb-2">Filtrar por</h3>
          <hr className="mb-3" />

          <FilterGroup
            title="Marca"
            inputType="checkbox"
            options={filterData.marca}
          />
          <FilterGroup
            title="Categoria"
            inputType="checkbox"
            options={filterData.categoria}
          />
          <FilterGroup
            title="Gênero"
            inputType="checkbox"
            options={filterData.genero}
          />
          <FilterGroup
            title="Estado"
            inputType="radio"
            options={filterData.estado}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-content-between align-items-center px-3 mb-3">
          <h2 className="order-title text-lg m-0">
            Resultados para "Tênis" -
            <span className="order-subtitle text-lg ml-1">389 produtos</span>
          </h2>

          <div className=" order-by flex align-items-center">
            <label htmlFor="sort" className="order-title ml-3 ">
              Ordenar por:
            </label>
            <span className="order-subtitle ml-1"> mais relevantes</span>
            <i className="pi pi-angle-down ml-4" />
          </div>
        </div>

        <ProductListing products={products} />
        <ProductListing products={products2} />
        <ProductListing products={products3} />
        <ProductListing products={products4} />
      </div>
    </div>
  );
};

export default ProductListingPage;
