import { Header } from "../components/header";
import { AllBurguers } from "../components/allBurguers";
import { Provider } from "../context/Provider";

const Home = () => {
    return(
        <Provider>
            <Header />
            <AllBurguers />
        </Provider>
    )
};

export { Home }