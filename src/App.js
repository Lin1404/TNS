import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Gallery from "./components/modules/Gallery";
import Certifications from "./components/modules/Certifications";
import DRP from "./components/modules/DRP";
import RepairProcess from "./components/homePageComponents/RepairProcess";
import AboutUs from "./components/modules/AboutUs";

const router = createBrowserRouter([
  {
    path: "/tnsauto",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/gallery",
    element: <Gallery />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/certifications",
    element: <Certifications />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/drp",
    element: <DRP />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/repairprocess",
    element: <RepairProcess />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/aboutus",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
