import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { Bmi } from "./container/Bmi";
import Activities from "./Activities";
import DailyCalo from "./container/DailyCalo";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AdminPage } from "./container/Admin";
import { Provider } from "react-redux";
import store from "./store/store";
import { LoginContainer } from "./container/LoginContainer";
import { RegisterContainer } from "./container/RegisterContainer";
import { RequireAuth } from "./component/RequireAuth";
import { HomePage } from "./container/Home";
import { FreshFruit } from "./container/FreshFruit";
import { Meat } from "./container/Meat";
import { ComboPage } from "./container/ComboPage";
import { CartDetail } from "./container/CartDetail";
import { ContactUs } from "./container/ContactUs";
import { Juice } from "./container/Juice";
import { Vegetable } from "./container/Vegetable";
import { FastFood } from "./container/FastFood";
import { Others } from "./container/Others";
import CalculatorCalo from "./container/CalculatorCalo";
import { Blog } from "./container/Blog";
import "./i18n/i18n";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0="
  crossorigin="anonymous"
/>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/bmi",
    element: <Bmi />,
  },
  {
    path: "/calculatorcalo",
    element: <CalculatorCalo />,
  },
  {
    path: "/dailycalo",
    element: <DailyCalo />,
  },
  {
    path: "/login",
    element: <LoginContainer />,
  },
  {
    path: "/register",
    element: <RegisterContainer />,
  },
  {
    path: "/admin",
    element: (
      <RequireAuth>
        {" "}
        <AdminPage />
      </RequireAuth>
    ),
  },
  {
    path: "/freshfruit",
    element: <FreshFruit />,
  },
  {
    path: "/meat",
    element: <Meat />,
  },
  {
    path: "/combo",
    element: <ComboPage />,
  },
  {
    path: "/cart-detail",
    element: <CartDetail />,
  },
  ,
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/juice",
    element: <Juice />,
  },
  {
    path: "/vegetable",
    element: <Vegetable />,
  },
  {
    path: "/fast-food",
    element: <FastFood />,
  },
  {
    path: "/others",
    element: <Others />,
  },
  {
    path: "/blog-6-great",
    element: <Blog />,
  },
]);

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
