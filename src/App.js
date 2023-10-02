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
import Services from "./components/modules/Services";
import Contact from "./components/modules/Contact";
import Satisfaction from "./components/modules/Satisfaction";
import Career from "./components/modules/Career";
import ComingSoon from "./components/ComingSoon";

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
  {
    path: "/tnsauto/services",
    element: <Services />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/satisfaction",
    element: <Satisfaction />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/career",
    element: <Career />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/comingsoon",
    element: <ComingSoon />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
      {/* <Chat /> */}
    </div>
  );
}

export default App;
