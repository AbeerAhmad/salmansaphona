import React from "react";
import "./css/FeaturedCollection.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class FeaturedCollection extends React.Component {
  render() {
    return (
      <div className="FC_Most_Main_Div">
        <div className="heading">Featured Collection</div>
        <hr className="line-break" />
        <div className="Featured_collect_main_div">
          <Row style={{ justifyContent: "space-around" }}>
            {/* Men */}
            <Col
              md="6"
              xs="12"
              sm="12"
              className="Men_Column col-1"
              style={{
                paddingTop: "30px"
              }}
            >
              <Link to="/saphona/maahru">
                <div className="backgroundimage image-1">
                  <div className="inner">Maahru</div>
                </div>
              </Link>
            </Col>
            <Col
              md="6"
              xs="12"
              sm="12"
              className="Men_Column col-2"
              style={{
                paddingTop: "30px"
              }}
            >
              <Link to="/aura/fusion">
                <div className="backgroundimage image-1">
                  <div className="inner">Fusion</div>
                </div>
              </Link>
            </Col>
            <Col
              md="6"
              xs="12"
              sm="12"
              className="Men_Column col-3"
              style={{
                paddingTop: "30px"
              }}
            >
              <Link to="/aura/luxury">
                <div className="backgroundimage image-1">
                  <div className="inner">Luxury</div>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default FeaturedCollection;
