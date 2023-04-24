import { Promotional } from "../../components/Promotional";
import { BestProduct } from "../../components/BestProduct";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
function Home() {
    return (
        <div>
            <Navbar />
            <Promotional />
            <BestProduct />
            <Footer/>
        </div>
    )
}
export default Home