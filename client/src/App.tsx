import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"
import Home from "./components/Home"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LanguageSelector from "./components/LanguageSelector"

const Layout = () => {
  return (
    <div className="bg-yellow-1 ">
     
      <Navbar />
      <div className="max-w-7xl mx-auto md:py-32 py-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/notfound",
          element: <NotFound />,
        },
        {
          path: "*",
          element: <Navigate to="/notfound" />,
        },
      ],
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App
