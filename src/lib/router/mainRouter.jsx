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
    {
      path: "berita",
      element: <div>Hello Berita</div>
     },
  ],
};

export default mainRouter;
