import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Coverage from "../coverage/Coverage";
import PrivateRoute from "../routes/PrivateRoute";
import SendParcel from "../pages/sendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("./ServiceCenter.json"),
      },
      {
        path: "sendParcel",
        loader: () => fetch("./ServiceCenter.json"),
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: '/dashboard',
    // Component: DashboardLayout,
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: 'myParcels',
       element: <PrivateRoute><MyParcels></MyParcels></PrivateRoute>
        
      },
      {
        path: 'payment/:parcelId',
        Component: Payment
      },
      {
        path: 'paymentHistory',
        Component: PaymentHistory,
      }
    ]
  }
]);
