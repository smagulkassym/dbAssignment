import { ERROR_ROUTE, MAIN_ROUTE, RECORDS_ROUTE, USERS_ROUTE } from "./utils/consts";
import Main from "./pages/Main"
import Records from "./pages/Records"
import Users from "./pages/Users"
import ErrorPage from "./pages/ErrorPage"

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: USERS_ROUTE,
        Component: Users
    },
    {
        path: RECORDS_ROUTE,
        Component: Records
    },
    {
        path: ERROR_ROUTE,
        Component: ErrorPage
    }
]