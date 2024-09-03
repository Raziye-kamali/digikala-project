import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Layout from "./assets/components/Layout";
import Main from  "./assets/pages/HeaderPage/Main"
import Login from "./assets/pages/HeaderPage/Login"
import Sell from "./assets/pages/HeaderPage/Sell"
import Question from "./assets/pages/HeaderPage/Question"
import Suggestion from "./assets/pages/HeaderPage/Suggestion"
import BestSeller from "./assets/pages/HeaderPage/BestSeller"
import GiftCard from "./assets/pages/HeaderPage/GiftCard"
import SupperMarket from "./assets/pages/HeaderPage/SupperMarket"
import Amazing from "./assets/pages/HeaderPage/Amazing"
import Category from "./assets/pages/HeaderPage/Category";
import Login2 from "./assets/pages/HeaderPage/Login2";
import OrginalProduct from "./assets/pages/FooterPage/OrginalProduct";
import DayReturn from "./assets/pages/FooterPage/DayReturn";
import Support from "./assets/pages/FooterPage/Support";
import ReciveHome  from "./assets/pages/FooterPage/ReciveHome"
import ExpresDelivery from "./assets/pages/FooterPage/ExpresDelivery";
import NewsHome from "./assets/pages/FooterPage/NewsHome";
import SellInDidikala from "./assets/pages/FooterPage/SellInDidikala";
import JobInDigikala from "./assets/pages/FooterPage/JobInDigikala";
import ViolationReport from "./assets/pages/FooterPage/ViolationReport"
import CallDigikala from "./assets/pages/FooterPage/CallDigikala";
import AboutDigikala from  "./assets/pages/FooterPage/AboutDigikala"
import AnswerQuestion from "./assets/pages/FooterPage/AnswerQuestion"
import ReturnProduct from "./assets/pages/FooterPage/ReturnProduct"
import UseConditional from "./assets/pages/FooterPage/UseConditional";
import Privacy from "./assets/pages/FooterPage/Privacy";
import BagReport from "./assets/pages/FooterPage/BagReport";
import RegisterOrder from "./assets/pages/FooterPage/RegisterOrder";
import SendOrder from "./assets/pages/FooterPage/SendOrder";
import Payment from "./assets/pages/FooterPage/Payment";
import MoreDownload from "./assets/pages/FooterPage/MoreDownload";
import Advertising from "./assets/pages/MainPage/Advertising";
import FoodBeverage from "./assets/pages/MainPage/FoodBeverage";
import Cheque from "./assets/pages/MainPage/Cheque";
import Digiplus from "./assets/pages/MainPage/DigiPlus";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Layout />} >
            <Route index element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sell" element={<Sell />}/>
            <Route path="/question" element={<Question />}/>
            <Route path="/suggestion" element={<Suggestion />}/>
            <Route path="/bestSeller" element={<BestSeller />}/>
            <Route path="/giftCard" element={<GiftCard />}/>
            <Route path="/supperMarket" element={<SupperMarket />}/>
            <Route path="/amazing" element={<Amazing />}/>
            <Route path="/category" element={<Category />}/>
            <Route path="/login/login2" element={<Login2 />}/>
            <Route path="/orginalProduct" element={<OrginalProduct />}/>
            <Route path="/dayReturn" element={<DayReturn />}/>
            <Route path="/support" element={<Support />}/>
            <Route path="/reciveHome" element={<ReciveHome />}/>
            <Route path="/expresDelivery" element={<ExpresDelivery />}/>
            <Route path="/newsHome" element={<NewsHome />}/>
            <Route path="/sellInDidikala" element={<SellInDidikala />}/>
            <Route path="/jobInDigikala" element={<JobInDigikala />}/>
            <Route path="/violationReport" element={<ViolationReport />}/>
            <Route path="/callDigikala" element={<CallDigikala />}/>
            <Route path="/aboutDigikala" element={<AboutDigikala />}/>
            <Route path="/answerQuestion" element={<AnswerQuestion />}/>
            <Route path="/returnProduct" element={<ReturnProduct />}/>
            <Route path="/useConditional" element={<UseConditional />}/>
            <Route path="/privacy" element={<Privacy />}/>
            <Route path="/bagReport" element={<BagReport />}/>
            <Route path="/registerOrder" element={<RegisterOrder />}/>
            <Route path="/sendOrder" element={<SendOrder />}/>
            <Route path="/payment" element={<Payment />}/>
            <Route path="/moreDownload" element={<MoreDownload />}/>
            <Route path="/advertising" element={<Advertising />}/>
            <Route path="/foodBeverage" element={<FoodBeverage />}/>
            <Route path="/cheque" element={<Cheque />}/>
            <Route path="/digiplus" element={<Digiplus />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
