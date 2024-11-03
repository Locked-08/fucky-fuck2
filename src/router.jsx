import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import T3 from "./pages/T3";

export function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/About" element={<About />} />
                <Route path="/*" element={<HomePage />} />
                <Route path="t3" element={<T3 />} />
            </Route>
        )
    )
    return router
}