import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  EditJob,
  Admin,
  Profile, 
} from "./pages";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { action as addJobAction } from "./pages/AddJob";
import { loader as allJobsLoader } from "./pages/AllJobs";
import { loader as editJobLoader } from './pages/EditJob';
import { action as editJobAction } from './pages/EditJob';
import { action as deleteJobAction } from './pages/DeleteJob';
import { loader as adminLoader } from './pages/Admin';
import { action as profileAction } from './pages/Profile';
import { loader as statsLoader } from './pages/Stats';

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />} errorElement={<Error />}>
      <Route index element={<Landing />} />
      <Route path="register" element={<Register />} action={registerAction} />
      <Route path="login" element={<Login />} action={loginAction} />
      <Route
        path="dashboard"
        element={<DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />}
        loader={dashboardLoader}
      >
        <Route index element={<AddJob />} action={addJobAction} />
        <Route path="stats" element={<Stats />} loader={statsLoader} />
        <Route path="all-jobs" element={<AllJobs />} loader={allJobsLoader} />
        <Route path="profile" element={<Profile />} action={profileAction} />
        <Route path="admin" element={<Admin />} loader={adminLoader} />
        <Route path="edit-job/:id" element={<EditJob />} loader={editJobLoader} action={editJobAction} />
        <Route path="delete-job/:id" action={deleteJobAction} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
