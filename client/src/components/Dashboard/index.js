import React from "react";
import { Route } from "react-router-dom";
import TopHeader from "./TopHeader/TopHeader";
import NavBar from "./navbar/navbar";
import FrontCrousel from "./FrontCrousel/frontcrousel";
import Introduction from "./Introduction/indroduction";
import FeaturedCollection from "./FeaturedCollection/FeaturedCollection";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import NewsLetter from "./Newsletter/newsletter";
import FeaturedProductsDetail from "./FeaturedProductsDetail/FeaturedProductsDetail";
import PolicyDetails from "./Policy Details/Policy-Details";
import Footer from "./Footer/footer";
import Footer2 from "./Footer2/footer";
import FeaturedCollectionDetails from "./FeaturedCollectionDetails/FeaturedCollectionDetails";
import AdminLogin from "../Account/Admin-login/admin-login";
import AdminPanel from "../Account/Admin-Panel/adminpanel";
import Header from "../Dashboard/Header/header";
import Maahru from "../Dashboard/products/maahru/index";
import NoorUlAin from "../Dashboard/products/Noor-ul-ain/index";
import NoorEChashm from "../Dashboard/products/Noor-e-chashm/index";
import AuraFusion from "../Dashboard/Auraproducts/Fusion/index";
import AuraLuxury from "../Dashboard/Auraproducts/Luxury/index";
import AuraPrint from "../Dashboard/Auraproducts/Print/index";
import Checkout from "../Dashboard/Checkout/index";
import MaahruPdDetails from "../Dashboard/SaphonaProductDetails/FeaturedProductsDetail";
import NoorAinPdDetails from "../Dashboard/NoorAinProductDetails/FeaturedProductsDetail";
import NoorChashmPdDetails from "../Dashboard/NoorChashmProductDetails/FeaturedProductsDetail";
import FusionPdDetails from "../Dashboard/FusionProductDetails/FeaturedProductsDetail";
import LuxuryPdDetails from "../Dashboard/LuxuryProductDetails/FeaturedProductsDetail";
import PrintPdDetails from "../Dashboard/PrintProductDetails/FeaturedProductsDetail";
import AboutUs from "../Dashboard/AboutUs/index";
import ContactUs from "../Dashboard/ContactUs/index";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        {/* <TopHeader /> */}
        {/* <NavBar /> */}
        <Route
          exact
          path="/"
          render={() => {
            return (
              <React.Fragment>
                <Header />
                <FrontCrousel />
                <Introduction />
                <FeaturedCollection />
                <FeaturedProducts />
                <NewsLetter />
                {/* <PolicyDetails /> */}
              </React.Fragment>
            );
          }}
        />
        <Route
          path="/FeaturedProductsDetail/:pid"
          component={FeaturedProductsDetail}
        />
        <Route path="/maahru/productDetails/:pid" component={MaahruPdDetails} />
        <Route
          path="/noor-ul-ain/productDetails/:pid"
          component={NoorAinPdDetails}
        />
        <Route
          path="/noor-e-chashm/productDetails/:pid"
          component={NoorChashmPdDetails}
        />
        <Route path="/fusion/productDetails/:pid" component={FusionPdDetails} />
        <Route path="/luxury/productDetails/:pid" component={LuxuryPdDetails} />
        <Route path="/print/productDetails/:pid" component={PrintPdDetails} />

        {/* <Route path="/FeaturedCollectionDetails" component={SaphonaPdDetails} /> */}
        <Route path="/admin-saphona" component={AdminLogin} />
        <Route path="/adminpanel" component={AdminPanel} />
        <Route path="/saphona/maahru" component={Maahru} />
        <Route path="/saphona/noor-ul-ain" component={NoorUlAin} />
        <Route path="/saphona/noor-e-chashm" component={NoorEChashm} />
        <Route path="/aura/fusion" component={AuraFusion} />
        <Route path="/aura/luxury" component={AuraLuxury} />
        <Route path="/aura/print" component={AuraPrint} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />

        {/* <Route
          path="/Signup"
          component={Signup}
        /> */}
        {/* <Route
          path="/kids"
          component={Kids}
        />     
        <Route
          path="/search-data-details/:xid"
          component={SearchDetails}
        />
        */}
        {/* <Footer /> */}
        <Footer2 />
      </div>
    );
  }
}

export default Dashboard;
