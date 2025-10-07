import CashbackStore from "@/components/home/CashbackStore";
import Deals from "@/components/home/Deals";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";

const HomePage = () => {
    return (
        <>
            <Hero />
            <CashbackStore />
            <Deals />
            <Faq />
        </>
    );
};

export default HomePage;
