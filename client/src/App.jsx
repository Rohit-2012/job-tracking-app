import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<h1>home</h1>} />
      <Route path="/about" element={<h1>about</h1>} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
