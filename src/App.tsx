import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Powerbankdetails from "./pages/powerbankFolder/Powerbankdetails";
import Allpowerbanks from "./pages/powerbankFolder/Allpowerbanks";
import Allsolartanks from "./pages/powertankFolder/Allsolartanks";
import Allshoe from "./pages/shoesFolder/Allshoe";
import Solartankdetails from "./pages/powertankFolder/Solartankdetails";
import Shoedetails from "./pages/shoesFolder/Shoedetails";
import Cart from "./pages/context/Cart";
import { CartProvider } from "./pages/context/CartContext";
import Allelectronics from "./pages/electronicsFolder/Allelectronics";
import Electronicsdetails from "./pages/electronicsFolder/Electronicsdetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/powerbankdetails/:id", element: <Powerbankdetails /> },
        { path: "/solarproductdetails/:id", element: <Solartankdetails /> },
        {
          path: "/electronicsproductdetails/:id",
          element: <Electronicsdetails />,
        },
        { path: "/shoedetails/:id", element: <Shoedetails /> },
        { path: "/all-power-banks", element: <Allpowerbanks /> },
        { path: "/all-solar-tanks", element: <Allsolartanks /> },
        { path: "/all-electronics", element: <Allelectronics /> },
        { path: "/all-shoe", element: <Allshoe /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <CartProvider>
      {" "}
      {/* <-- wrap everything so all pages have cart context */}
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
