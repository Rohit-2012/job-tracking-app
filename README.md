#### Create React APP

[VITE](https://vitejs.dev/guide/)

```sh
npm create vite@latest projectName -- --template react
```

#### Vite - Folder and File Structure

```sh
npm i
```

```sh
npm run dev
```

- APP running on http://localhost:5173/
- .jsx extension

#### Remove Boilerplate

- remove App.css
- remove all code in index.css

  App.jsx

```jsx
const App = () => {
  return <h1>Jobify App</h1>;
};
export default App;
```

#### Install Packages (Optional)

- yes, specific package versions
- specific commands will be provided later
- won't need to stop/start server

```sh
npm install @tanstack/react-query @tanstack/react-query-devtools axios dayjs react-icons react-router-dom react-toastify recharts styled-components

```

#### Create Pages

- create src/pages directory
- setup index.js and following pages :

  AddJob.jsx
  Admin.jsx
  AllJobs.jsx
  DashboardLayout.jsx
  DeleteJob.jsx
  EditJob.jsx
  Error.jsx
  HomeLayout.jsx
  Landing.jsx
  Login.jsx
  Profile.jsx
  Register.jsx
  Stats.jsx

```jsx
const AddJob = () => {
  return <h1>AddJob</h1>;
};
export default AddJob;
```