import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import WebDevelopment from "./components/courses/WebDevelopment";
import AppDevelopment from "./components/courses/AppDevelopment";
import CodingForCids from "./components/courses/CodingForkids";
import CyberSecurity from "./components/courses/CyberSecurity";
import DigitalMarketing from "./components/courses/DigitalMarketing";
import EnglishSpoken from "./components/courses/EnglishSpoken";
import EthicalHeacking from "./components/courses/EthicalHeacking";
import GameDevelopment from "./components/courses/GameDevelopment";
import RsCit from "./components/courses/RsCit";
import TallyWithGst from "./components/courses/TallyWithGst";
import WebDesigner from "./components/courses/WebDesigner";
import Account from "./components/courses/Account";
import GoogleAds from "./components/services/GoogleAds";
import Cheatsheet from "./components/services/CheatSheet";
import Cyber from "./components/services/Cyber";
import Web from "./components/services/Web";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Staff from "./components/Staff";
import Blog from "./components/Blog";
import DigitalMarketingBlog from "./components/DigitalMarketingBlog";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/appdevelopment" element={<AppDevelopment />} />
        <Route exact path="/codingforkids" element={<CodingForCids />} />
        <Route exact path="/cybersecurity" element={<CyberSecurity />} />
        <Route exact path="/digitalmarketing" element={<DigitalMarketing />} />
        <Route exact path="/englishspoken" element={<EnglishSpoken />} />
        <Route exact path="/ethicalheacking" element={<EthicalHeacking />} />
        <Route exact path="/gamedevelopment" element={<GameDevelopment />} />
        <Route exact path="/rscit" element={<RsCit />} />
        <Route exact path="/tallywithgst" element={<TallyWithGst />} />
        <Route exact path="/webdesigner" element={<WebDesigner />} />
        <Route exact path="/webdevelopment" element={<WebDevelopment />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/cyber" element={<Cyber />} />
        <Route exact path="/googleads" element={<GoogleAds />} />
        <Route exact path="/cheatsheet" element={<Cheatsheet />} />
        <Route exact path="/web" element={<Web />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/staff" element={<Staff />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/marketingblog" element={<DigitalMarketingBlog />} />


      </Routes>
    </Router>
  );
}

export default App;
