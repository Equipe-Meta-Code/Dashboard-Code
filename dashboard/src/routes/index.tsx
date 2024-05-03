import "../App.scss";
import { Routes, Route } from "react-router-dom";
import { Cadastro, Clientes, Comissao, Login, Vendas, Vendedores } from "../components";
import BaseLayout from "../layout/baseLayout";
import PageNotFound from "../screens/error/pageNotFound";
import Dashboard from "../screens/dashboard/dashboardScreen";
import PrivateRoutes from "./PrivateRoutes";


function AppRoutes() {

  return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="cadastro" element={<Cadastro />} />
            <Route element={<BaseLayout />}>
            <Route path="*" element={<PageNotFound />} />

            <Route path="dashboard" element={<Dashboard />} />

            <Route element={<PrivateRoutes role="Admin_Role" />}>
                <Route path="vendedores" element={<Vendedores />} />
            </Route>

            <Route element={<PrivateRoutes role="Admin_Role" />}>
                <Route path="clientes" element={<Clientes/> } />
            </Route>

            <Route element={<PrivateRoutes role="Admin_Role" />}>
                <Route path="vendas" element={<Vendas />} />
            </Route>

            <Route element={<PrivateRoutes role="Admin_Role" />}>
                <Route path="comissoes" element={<Comissao />} />
            </Route>

          </Route>
        </Routes>
  )
}

export default AppRoutes;