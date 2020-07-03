import React from "react";
import "./css/FeaturedCollectionDetails.css";
import abc from "./abc.jpg";

class FeaturedCollectionDetails extends React.Component {
//   componentDidMount = () => {
//     var x = localStorage.getItem("bgPosition");
//     this.setState({
//       bgPosition: x
//     });
//     console.log();
//   };
  render() {
    return (
      <div>
        <div className="FCD_main_div">
          <div className="FCD_product_div">
            <img src={abc} style={{ width: "330px", height: "500px" }} />
            <div className="FCD_desc_div">
              {" "}
              <i> Blue Painted T-Shirt </i>{" "}
            </div>
            <div className="FCD_price_div">
              {" "}
              <i> Rs-250 Only </i>{" "}
            </div>
          </div>
          <div className="FCD_product_div">
            <img src={abc} style={{ width: "330px", height: "500px" }} />
            <div className="FCD_desc_div">
              {" "}
              <i> Blue Painted T-Shirt </i>{" "}
            </div>
            <div className="FCD_price_div">
              {" "}
              <i> Rs-250 Only </i>{" "}
            </div>
          </div>
          <div className="FCD_product_div">
            <img src={abc} style={{ width: "330px", height: "500px" }} />
            <div className="FCD_desc_div">
              {" "}
              <i> Blue Painted T-Shirt </i>{" "}
            </div>
            <div className="FCD_price_div">
              {" "}
              <i> Rs-250 Only </i>{" "}
            </div>
          </div>
          <div className="FCD_product_div">
            <img src={abc} style={{ width: "330px", height: "500px" }} />
            <div className="FCD_desc_div">
              {" "}
              <i> Blue Painted T-Shirt </i>{" "}
            </div>
            <div className="FCD_price_div">
              {" "}
              <i> Rs-250 Only </i>{" "}
            </div>
          </div>
          <div className="FCD_product_div">
            <img src={abc} style={{ width: "330px", height: "500px" }} />
            <div className="FCD_desc_div">
              {" "}
              <i> Blue Painted T-Shirt </i>{" "}
            </div>
            <div className="FCD_price_div">
              {" "}
              <i> Rs-250 Only </i>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FeaturedCollectionDetails;
