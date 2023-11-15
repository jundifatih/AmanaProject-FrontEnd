import Dashboard from "../../layout/dashboard";

const dashboardRouter = {
  path: "/dashboard",
  element: <Dashboard />,
  children: [
    {
      index: true,
      element: <div>Dashboard</div>,
    },
  ],
};

export default dashboardRouter;
