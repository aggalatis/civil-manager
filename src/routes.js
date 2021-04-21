import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Customers from "views/Customers/Customers.js";
import Authaireta from "views/Authaireta/Authaireta.js";
import EditCustomers from  "views/Customers/EditCustomer.js"
import AddCustomer from  "views/Customers/AddCustomer.js"
import AddAuthaireto from  "views/Authaireta/AddAuthaireto.js"

const dashboardRoutes = [
  {
    path: "/customers",
    name: "ΠΕΛΑΤΕΣ",
    icon: "nc-icon nc-single-02",
    component: Customers,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/authereta",
    name: "ΑΥΘΑΙΡΕΤΑ",
    icon: "nc-icon nc-istanbul",
    component: Authaireta,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/customer/:handle",
    name: "ΕΠΕΞΕΡΓΑΣΙΑ ΠΕΛΑΤΗ",
    icon: "nc-icon nc-single-02",
    component: EditCustomers,
    layout: "/admin",
    sidebar: false,
  },
  {
    path: "/addCustomer",
    name: "ΔΗΜΙΟΥΡΓΙΑ ΠΕΛΑΤΗ",
    icon: "nc-icon nc-single-02",
    component: AddCustomer,
    layout: "/admin",
    sidebar: false,
  },
  {
    path: "/addAuthaireto",
    name: "ΔΗΜΙΟΥΡΓΙΑ ΑΥΘΑΙΡΕΤΟΥ",
    icon: "nc-icon nc-single-02",
    component: AddAuthaireto,
    layout: "/admin",
    sidebar: false,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
    sidebar: true,
  },
];

export default dashboardRoutes;
