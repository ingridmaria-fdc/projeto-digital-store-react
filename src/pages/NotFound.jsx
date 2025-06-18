import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex align-items-center justify-content-center h-screen bg-gray-100 p-4">
      <Card className="text-center shadow-4 p-6 border-round-2xl w-full max-w-30rem">
        <h1 className="text-6xl text-pink-600 font-bold mb-3">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Página não encontrada
        </h2>
        <p className="text-gray-600 mb-4">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/">
          <Button
            label="Voltar para a Home"
            icon="pi pi-home"
            className="p-button-primary bg-pink-600 border-none"
          />
        </Link>
      </Card>
    </div>
  );
};

export default NotFound;
