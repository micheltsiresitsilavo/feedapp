import Root from "../components/Root";
import Login from "../components/Pages/Login";
import Home from "../components/Pages/Home";
import RegisterOutlet from "../components/Pages/Register/RegisterOutlet";
import RegisterAdmin from "../components/Pages/Register/RegisterAdmin";
import RecoveryPwd from "../components/Pages/Credential/RecoveryPwd";

import Dashboard from "../components/Pages/Dashboard";
import AdminAuth from "../components/Pages/AdminAuth";
import VerifyAccount from "../components/Pages/VerifyAccount";
import MyAccount from "../components/Pages/DashboardElement/MyAccount";

import AvatarHandler from "../components/Pages/DashboardElement/AccountElement/AvatarHandler";
import Profile from "../components/Pages/Profile";
import MainDash from "../components/Pages/DashboardElement/MainDash";
import Portal from "../components/Pages/Portal";
import AppVote from "../components/Pages/AppVote";
import { ProfileOne } from "../components/Pages/ProfileOne";
import Dash from "../components/Pages/DashboardElement/Dash";
import AddApp from "../components/Pages/AppVote/AddApp";
import ListApp from "../components/Pages/AppVote/ListApp";
import UpdateApp from "../components/Pages/AppVote/UpdateApp";
import Editor from "../components/Pages/AppVote/Editor";
import UpdateFeedback from "../components/Pages/AppVote/UpdateFeedback";
import PortaCaptif from "../components/Pages/PortaCaptif";
import About from "../components/Pages/About";
import ScreenMeasure from "../components/Pages/DashboardElement/ScreenMeasure";
import ReactEditor from "../components/Pages/AppVote/ReactEditor";

const path = [
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <div className="grid h-screen place-content-center bg-white px-4 dark:bg-gray-900">
        <h1 className="uppercase tracking-widest text-gray-500 dark:text-gray-400">
          404 | Not Found
        </h1>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "react-editor",
        element: <ReactEditor />,
      },
      {
        path: "register",
        element: <RegisterOutlet />,
        children: [
          {
            index: true,
            element: <RegisterAdmin />,
          },
        ],
      },
      {
        path: "resetPwd",
        element: <RecoveryPwd />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "portal",
        element: <Portal />,
      },
      {
        path: "captifportal",
        element: <PortaCaptif />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "screen",
        element: <ScreenMeasure />,
      },

      {
        path: "feedback/:appId",
        element: <Editor />,
      },
      {
        path: "appvote/:appId",
        element: <AppVote />,
      },
      {
        path: "profileme/:profileId",
        element: <ProfileOne />,
      },
      {
        path: "updateFeedback/:feedbackId",
        element: <UpdateFeedback />,
      },
      {
        path: "dash",
        element: <Dash />,
        children: [
          {
            index: true,
            element: <ListApp />,
          },
          {
            path: "addApp",
            element: <AddApp />,
          },
          {
            path: "updateApp/:appId",
            element: <UpdateApp />,
          },
        ],
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <MainDash />,
          },
          {
            path: "myaccount",
            element: <MyAccount />,
          },
          {
            path: "avatar_handler",
            element: <AvatarHandler />,
          },
        ],
      },
      {
        path: "fanovo/admin_app",
        element: <AdminAuth />,
      },

      {
        path: "verify_account",
        element: <VerifyAccount />,
      },
    ],
  },
];

export default path;
