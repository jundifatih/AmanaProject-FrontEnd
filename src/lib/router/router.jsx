import { createBrowserRouter } from "react-router-dom";

import dashboardRouter from "./dashboardRouter";
import mainRouter from "./mainRouter";

const router = createBrowserRouter([mainRouter, dashboardRouter]);

export default router;
