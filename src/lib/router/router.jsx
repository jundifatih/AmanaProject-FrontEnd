import { createBrowserRouter } from "react-router-dom";

import dashboardRouter from "./dashboardRouter";
import mainRouter from "./mainRouter";
import loginRouter from "./loginRouter";
import registerRouter from "./registerRouter";

const router = createBrowserRouter([mainRouter, dashboardRouter, loginRouter, registerRouter]);

export default router;
