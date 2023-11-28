import Main from "../../layout/main/Main";
import Acara from "../../pages/main/acara/Acara";
import Berita from "../../pages/main/berita/Berita";
import LandingPage from "../../pages/main/landingpage/LandingPage";
import TentangKami from "../../pages/main/tentangkami/TentangKami";

const mainRouter = {
  path: "/",
  element: <Main />,
  children: [
    {
      index: true,
      element: <LandingPage />,
    },
    {
      path: "berita",
      element: <Berita/>
     },
    {
      path: "acara",
      element: <Acara/>
     },
    {
      path: "tentangkami",
      element: <TentangKami/>,
     },
  ],
};

export default mainRouter;
