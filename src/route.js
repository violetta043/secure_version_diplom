import Login from "./pages/Login/Login";
import ProductPreview from "./pages/Product-preview/Product-preview";
import ProductTable from "./pages/Products-table/Product-table";
import ProductInfo from "./pages/Product-info/Product-info";
import Error from "./pages/Error/Error";
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import PrivateRoute from "./privateRoute";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route path="/product-table" element={<ProductTable />} />
        <Route path="/product-preview" element={<ProductPreview />} />
        <Route path="/product-info/:productId" element={<ProductInfo />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
export default AppRouter;
