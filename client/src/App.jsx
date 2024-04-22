import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomeLayout, Landing, Register, Login, DashboardLayout, Error } from './pages'
import {action as registerAction} from './pages/Register'

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true'
  document.body.classList.toggle("dark-theme", isDarkTheme)
  return isDarkTheme
}

const isDarkThemeEnabled = checkDefaultTheme()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />} errorElement={<Error />}>
      <Route index element={<Landing />} />
      <Route path="register" element={<Register />} action={registerAction}/>
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<DashboardLayout isDarkThemeEnabled={ isDarkThemeEnabled} />}>

      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
