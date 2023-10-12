import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import BeforeAndAfter from "./components/modules/BeforeAndAfter";
import Certifications from "./components/modules/Certifications";
import DRP from "./components/modules/DRP";
import RepairProcess from "./components/homePageComponents/RepairProcess";
import AboutUs from "./components/modules/AboutUs";
import Services from "./components/modules/Services";
import Contact from "./components/modules/Contact";
import Satisfaction from "./components/modules/Satisfaction";
import Career from "./components/modules/Career";
import Facility from "./components/modules/Facility";
import Portfolio from "./components/modules/Portfolio";
import ComingSoon from "./components/ComingSoon";
import AluminumCertified from "./components/modules/services/AluminumCertified";
import CarRentals from "./components/modules/services/CarRentals";
import CollisionRepair from "./components/modules/services/CollisionRepair";
import Detailing from "./components/modules/services/Detailing";
import Estimating from "./components/modules/services/Estimating";
import InsuranceClaim from "./components/modules/services/InsuranceClaim";
import Paint from "./components/modules/services/Paint";
import Towing from "./components/modules/services/Towing";
import Warranty from "./components/modules/services/Warranty";

const router = createBrowserRouter([
  {
    path: "/tnsauto",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/before&after",
    element: <BeforeAndAfter />,
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
    path: "/tnsauto/facility",
    element: <Facility />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/career",
    element: <Career />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/tns1011portfolio",
    element: <Portfolio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/comingsoon",
    element: <ComingSoon />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/aluminum-certified",
    element: <AluminumCertified />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/car-rentals",
    element: <CarRentals />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/collision-repair",
    element: <CollisionRepair />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/detailing",
    element: <Detailing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/estimating",
    element: <Estimating />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/insurance-claim",
    element: <InsuranceClaim />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/paint",
    element: <Paint />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/towing",
    element: <Towing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tnsauto/warranty",
    element: <Warranty />,
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
