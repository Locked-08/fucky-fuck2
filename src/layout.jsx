import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout() {
    return (<div className="flex flex-col min-h-screen bg-black">
        <Header />
        <Outlet />
    </div>)
}