import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
import { loader as editJobLoader } from "./pages/EditJob";
import { action as editJobAction } from "./pages/EditJob";
import { action as deleteJobAction } from "./pages/DeleteJob";
import { loader as adminLoader } from "./pages/Admin";
import { action as profileAction } from "./pages/Profile";
import { loader as statsLoader } from "./pages/Stats";
import ErrorElement from "./components/ErrorElement";

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />} errorElement={<Error />}>
      <Route index element={<Landing />} />
      <Route path="register" element={<Register />} action={registerAction} />
      <Route path="login" element={<Login />} action={loginAction(queryClient)} />
      <Route
        path="dashboard"
        element={<DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />}
        loader={dashboardLoader(queryClient)}
        queryClient={queryClient}
      >
        <Route index element={<AddJob />} action={addJobAction(queryClient)} />
        <Route path="stats" element={<Stats />} loader={statsLoader(queryClient)} errorElement={<ErrorElement />} />
        <Route path="all-jobs" element={<AllJobs />} loader={allJobsLoader(queryClient)} errorElement={<ErrorElement />} />
        <Route path="profile" element={<Profile />} action={profileAction(queryClient)} />
        <Route path="admin" element={<Admin />} loader={adminLoader} />
        <Route
          path="edit-job/:id"
          element={<EditJob />}
          loader={editJobLoader(queryClient)}
          action={editJobAction(queryClient)}
        />
        <Route path="delete-job/:id" action={deleteJobAction(queryClient)} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
