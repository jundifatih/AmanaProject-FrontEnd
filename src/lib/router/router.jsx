import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <div>Hello World</div>,
      },
    ],
  },
]);

export default router;
