import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./Pages/About.jsx";

import LandingPage from "./Pages/LandingPage.jsx";
import Contact from "./Pages/Contact.jsx";
import Exercise from "./Pages/Exercise/Exercise.jsx";
import Cardio from "./Pages/Exercise/Cardio/Cardio.jsx";
import CardioDetails from "./Pages/Exercise/Cardio/CardioDetails.jsx";
import Chest from "./Pages/Exercise/Chest/Chest.jsx";
import LowerArms from "./Pages/Exercise/LowerArms/LowerArms.jsx";
import LowerLegs from "./Pages/Exercise/LowerLegs/LowerLegs.jsx";
import Shoulder from "./Pages/Exercise/Shoulders/Shoulder.jsx";
import UpperArms from "./Pages/Exercise/UpperArms/UpperArms.jsx";
import UpperLegs from "./Pages/Exercise/UpperLegs/UpperLegs.jsx";
import Waist from "./Pages/Exercise/Waist/Waist.jsx";
import Cart from "./Pages/Cart.jsx";
import ShopDetails from "./Pages/Shop/ShopDetails.jsx";
import Shop from "./Pages/Shop/Shop.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shop/:id",
    element: <ShopDetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/exercise",
    element: <Exercise />,
  },
  {
    path: "/cardio-exercises",
    element: <Cardio />,
  },
  {
    path: "/cardioDetails/:id",
    element: <CardioDetails />,
  },
  {
    path: "/chest-exercises",
    element: <Chest />,
  },
  {
    path: "/lower-arms-exercises",
    element: <LowerArms />,
  },
  {
    path: "/lower-legs-exercises",
    element: <LowerLegs />,
  },
  {
    path: "/shoulders-exercises",
    element: <Shoulder />,
  },
  {
    path: "/upper-arms-exercises",
    element: <UpperArms />,
  },
  {
    path: "/upper-legs-exercises",
    element: <UpperLegs />,
  },
  {
    path: "/waist-exercises",
    element: <Waist />,
  },
]);

// Default export
export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
