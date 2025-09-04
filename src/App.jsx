import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoutes } from "./utils/Routes";
import './index.css';

function App() {
  const router = createBrowserRouter(AppRoutes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
