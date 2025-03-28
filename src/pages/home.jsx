import { Header } from "../components/header";
import { AllBurguers } from "../components/allBurguers";
import { Cart } from "../components/Cart/cart";
//import { Provider } from "../context/Provider";

const Home = () => {
    return(
        <>
            <Header />
            <AllBurguers />
            <Cart />
        </>
    )
};

export { Home }