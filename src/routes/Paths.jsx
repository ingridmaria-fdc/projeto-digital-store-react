import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import PageLayout from "../layouts/PageLayout";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<HomePage />} />
          </Route>

          <Route path="/products" element={<PageLayout />}>
            <Route index element={<ProductListingPage />} />
          </Route>

          <Route path="/products/:id" element={<PageLayout />}>
            <Route index element={<ProductViewPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
