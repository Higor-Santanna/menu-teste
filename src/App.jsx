import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Burguers } from "./pages/burguers"
import { Drinks } from "./pages/drinks"
import { Portions } from "./pages/portions"
import { Snacks } from "./pages/snacks"
import { PlateMeats } from "./pages/plateMeats"

function App() {
  const router = createBrowserRouter([
    {
      path: "burguers",
      element: <Burguers />
    },
    {
      path: "drinks",
      element: <Drinks />
    },
    {
      path: "portions",
      element: <Portions />
    },
    {
      path: "/",
      element: <Snacks />
    },
    {
      path: "plate-meats",
      element: <PlateMeats />
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App