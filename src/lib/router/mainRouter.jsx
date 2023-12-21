import Main from "../../layout/main/Main";
import Acara from "../../pages/main/acara/Acara";
import DetailAcara from "../../pages/main/acara/DetailAcara";
import Berita from "../../pages/main/berita/Berita";
import InfoMasjid from "../../pages/main/infomasjid/InfoMasjid";
import LandingPage from "../../pages/main/landingpage/LandingPage";
import ModalAcara from "../../pages/main/modalAcara/ModalAcara";
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
    {
      path: "infomasjid",
      element: <InfoMasjid/>,
     },
     {
      path: "detailacara",
      element : <DetailAcara/>,
     },
     {
      path:"formAcara",
      element: <ModalAcara/>
     }
  ],
};

export default mainRouter;
