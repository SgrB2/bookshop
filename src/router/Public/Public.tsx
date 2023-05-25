import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Main from "../../pages/Main";
import ProductPage from "../../pages/ProductPage";
import FavoritesPage from "../../pages/FavoritesPage";
import CartPage from "../../pages/CartPage";


const PublicRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<Navigate to="new-releases-books" />} />

        <Route path="/new-releases-books" element={<Main />} />
        <Route path="/new-releases-books/:isbn13" element={<ProductPage />} />
        <Route path="/fovorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default PublicRoutes;
