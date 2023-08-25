import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ControlledAccordions } from "./components/navbar"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ControlledAccordions />
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App