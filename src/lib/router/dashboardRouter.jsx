import Dashboard from "../../layout/dashboard";
import DashboardPage from "../../pages/dashboard/Dashboard/DashboardPage";
import MosqueAdmins from "../../pages/dashboard/MosqueAdmins";
import MosqueEvent from "../../pages/dashboard/MosqueEvent";
import MosqueProfile from "../../pages/dashboard/MosqueProfile";
import MosqueReport from "../../pages/dashboard/MosqueReport";
import UserProfile from "../../pages/dashboard/UserProfile";

const dashboardRouter = {
  path: "/dasbor",
  element: <Dashboard />,
  children: [
    {
      index: true,
      element: <DashboardPage />,
    },
    {
      path: "profil-pengguna",
      element: <UserProfile />,
    },
    {
      path: "profil-masjid",
      element: <MosqueProfile />,
    },
    {
      path: "pengurus-masjid",
      element: <MosqueAdmins />,
    },
    {
      path: "acara-masjid",
      element: <MosqueEvent />,
    },
    {
      path: "laporan-masjid",
      element: <MosqueReport />,
    },
  ],
};

export default dashboardRouter;
