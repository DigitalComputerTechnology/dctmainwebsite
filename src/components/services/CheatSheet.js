import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";
import "../css/Services.css";
function Cheatsheet() {
    return ( 
        <>
        <section className="cheatsheet-first-section pt-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/digital_computer_technology_kotputli_ass_mg.png)`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <Header/>
        <div class="container">
         <div class="row align-items-center mt-3">
         <iframe src="/images/RSCIT_Assesment_Digital Computer Technology.pdf" style={{width: "100%",height: "100%",border: "none"}}></iframe>
        </div>
        </div>
        </section>

        <Footer/>
        </>
     );
}

export default Cheatsheet;