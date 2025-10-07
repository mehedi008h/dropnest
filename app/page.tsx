import Footer from "@/components/common/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import CashbackStore from "@/components/home/CashbackStore";
import Deals from "@/components/home/Deals";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";

const HomePage = () => {
    return (
        <>
            <ScrollToTop />
            <Hero />
            <CashbackStore />
            <Deals />
            <Faq />
            <Footer />
        </>
    );
};

export default HomePage;
