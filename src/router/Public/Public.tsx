import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Main from "../../pages/Main";
import ProductPage from "../../pages/ProductPage";


const PublicRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/new-releases-books" element={<Main />} />
        {/* <Route path="/new-releases-books/:isbn13" element={<ProductPage />} /> */}
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default PublicRoutes;
