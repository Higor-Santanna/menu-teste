import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Provider } from "../context/Provider";

const AppRoutes = () => {
    return (
        <Provider>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Provider>
    )
};

export { AppRoutes }