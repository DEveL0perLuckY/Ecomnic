import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NoMatchFoundPage from "./pages/NoMatchFoundPage";
import HomeIndex from "./pages/HomePage/index";
import ProductDetailIndex from "./pages/ProductDetailPage/index.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import GamingKeyboard from "./pages/GamingKeyboard/GamingKeyboard.jsx";
import GamingMouse from "./pages/GamingMouse/gamingMouse.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const ProductDetailPage = lazy(() =>
  import("./pages/ProductDetailPage/ProductDetails.jsx")
);

const App = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomeIndex />}>
            <Route index element={<HomePage />} />
          </Route>

          <Route path="/gamingKeyboard" element={<HomeIndex />}>
            <Route index element={<GamingKeyboard />} />
          </Route>

          <Route path="/gamingMouse" element={<HomeIndex />}>
            <Route index element={<GamingMouse />} />
          </Route>

          <Route path="/product" element={<ProductDetailIndex />}>
            <Route path=":id" element={<ProductDetailPage />} />
          </Route>
          <Route path="*" element={<NoMatchFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
