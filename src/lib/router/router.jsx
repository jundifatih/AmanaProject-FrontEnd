import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/main/Main";
import LandingPage from "../../pages/main/landingpage/LandingPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <LandingPage/>,
      },
    //  {
    //   path: "berita",
    //   element: <Berita/>
    //  } 
    ],
  },
]);

export default router;
