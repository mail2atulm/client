import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./home/SignIn";
import Dashboard from "./home/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Layout } from "./component";
import {
  DashboardPage,
  CustomersPage,
  OrdersPage,
  InventoryPage,
} from "./pages";
import { ROUTES } from "./constants";
import Test from "./home/test";
import AppTable from "./component/AppTable";
import FileUpload from "./component/FileUpload";
import Example from "./component/Example";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>

      <Layout>
        <Routes>
          <Route path={ROUTES.main} element={<AppTable />} />
          <Route path={ROUTES.orders} element={<FileUpload />} />
          <Route path={ROUTES.customers} element={<Example />} />
          <Route path={ROUTES.inventory} element={<InventoryPage />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
