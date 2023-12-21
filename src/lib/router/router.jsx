import { createBrowserRouter } from "react-router-dom";

import dashboardRouter from "./dashboardRouter";
import mainRouter from "./mainRouter";
import loginRouter from "./loginRouter";
import registerRouter from "./registerRouter";
import ruteRouter from "./ruteRouter";
import FirstFormRouter from "./firstformRouter";
import ModalAcara from "../../pages/main/modalAcara/ModalAcara";

const router = createBrowserRouter([mainRouter, dashboardRouter, loginRouter, registerRouter, ruteRouter, FirstFormRouter, ModalAcara]);

export default router;
