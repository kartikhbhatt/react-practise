import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

// react element same as dom element
// const heading = React.createElement("h1", { id: "heading" }, "this is heading");

// jsx - html like syntax => jsx => React.createelement() => react.createlement- js object=> html element

const AppLayout = () => {
   return (
      <div className="app">
         <Header />
         {/* if path = / => body
            if path /about => /about
            if path /contact => /contact
         */}
         <Outlet />
      </div>
   );
};

const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
      children: [
         {
            path: "/",
            element: <Body />,
         },
         {
            path: "/about",
            element: <About />,
         },
         {
            path: "/contact",
            element: <Contact />,
         },
         {
            path: "/restaurant/:resId",
            element: <RestaurantMenu />,
         },
      ],
      errorElement: <Error />,
   },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
