import React, { StrictMode } from 'react'; // ✅ React import necessary
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Project from './pages/Project.jsx';
import Login from './component/Authentication/Login.jsx';
import Register from './component/Authentication/Register.jsx';
import { Auth } from './component/Authentication/Auth.jsx';
import { Logout } from './component/Authentication/Logout.jsx';
import Cv from './component/Resume/Cv.jsx';
import PublicRoute from './component/Authentication/PublicRoute.jsx';
import PrivateRoute from './component/Authentication/PrivateRoute.jsx';
import AdminRoute from './component/Authentication/Admin-Route.jsx';
import AdminLayout from './component/Admin/Layout/Admin-Layout.jsx';
// import Dashboard from './component/Admin/Dashboard/Dashboard.jsx';
import MessageList from './component/Admin/Message/Message-List.jsx';
import UserList from './component/Admin/User/User-List.jsx';
import MessageView from './component/Admin/Message/Message-View.jsx';
import Dashboard from './component/Admin/Dashboard/Dashboard.jsx';


const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
     { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "project", element: <Project /> },
      { path: "contact", element: <Contact /> },
      {
        element: <PublicRoute />,
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
      {
        element: <PrivateRoute />,
        children: [
          { path: "resume", element: <Cv /> },
          { path: "logout", element: <Logout /> },
        ],
      },
      {
        path: "admin",
        element: <AdminRoute />,
        children: [
          {
            element: <AdminLayout />,
            children: [
              { index: true, element: <Dashboard/> },
              { path: "users", element: <UserList /> },
              { path: "messages", element: <MessageList /> },
              { path: "messages/:id", element: <MessageView /> },
            ],
          },
        ],
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth>
      <RouterProvider router={allRoutes} />
    </Auth>
  </StrictMode>,
);
