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
import SignInPage from "../../pages/SignInPage";


const PublicRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/" element={<Main />} />
        <Route path="/:isbn13" element={<ProductPage />} />
        <Route path="/fovorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default PublicRoutes;
