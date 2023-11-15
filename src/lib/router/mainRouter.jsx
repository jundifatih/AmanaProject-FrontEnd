import Main from "../../layout/main/Main";
import LandingPage from "../../pages/main/landingpage/LandingPage";

const mainRouter = {
  path: "/",
  element: <Main />,
  children: [
    {
      index: true,
      element: <LandingPage />,
    },
    //  {
    //   path: "berita",
    //   element: <Berita/>
    //  }
  ],
};

export default mainRouter;
