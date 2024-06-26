import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Routes/RootLayout";
import Posts, {loader as postsLoader} from "./Routes/Posts";
import "./index.css";
import NewPost, {action as newFormAction } from "./Routes/NewPost";
import PostDetails, {loader as postDetailsLoader } from "./Routes/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: newFormAction,
          },
          {
            path: '/:id',
            element: <PostDetails/>,
            loader: postDetailsLoader
          }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
