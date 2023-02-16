import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import { selectUser } from "store/user/selectors";

import { routes } from "constants/routes";

import { Navbar } from "components/sections/navbar";
import { Footer } from "components/sections/footer";
import { PrivateRoute } from "components/common/private-route";

import { HomePage } from "pages/home";
import { LoginPage } from "pages/login";
import { ProfilePage } from "pages/profile";
import { ProductsPage } from "pages/products";
import { SingleProductPage } from "pages/single-product";
import { CartPage } from "pages/cart";

import { AuthModal } from "components/common/auth-modal";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { authModal } = useSelector(selectUser);

  return (
    <>
      {authModal && <AuthModal />}
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.products} element={<ProductsPage />} />
        <Route path={routes.singleProduct} element={<SingleProductPage />} />
        <Route path={routes.cart} element={<CartPage />} />
        <Route
          path={routes.profile}
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<div>Not Found 404</div>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
