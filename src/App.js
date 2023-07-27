import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Showcases from "./components/modules/Showcases";
import Workshop from "./components/modules/Workshop";
import Certifications from "./components/modules/Certifications";
import Partnership from "./components/modules/Partnership";

const router = createBrowserRouter([
  {
    path: "/tns",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/showcases",
    element: <Showcases />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/workshop",
    element: <Workshop />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/certifications",
    element: <Certifications />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/partnership",
    element: <Partnership />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
