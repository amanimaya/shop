import Footer from "./Footer";
import Header from "./Header";
import NewProducts from "./NewProdut";

import heroimg from "./OKn1KFI_d.webp"
import "./home.css"

export default function Home()
{
    return(
        <>
        
          <section id="hero-section">
      <div className="hero-text">
        <h1>Welcome to AmNIShop</h1>
        <p>Discover beautiful products at the best prices. Fashion, electronics, accessories and more!</p>
       
      </div>

      <div className="hero-img">
        <img src={heroimg} alt="Shop Banner" />
      </div>
    </section>
    <NewProducts></NewProducts>
        <Footer></Footer>
        
        
        
        </>
    )
}