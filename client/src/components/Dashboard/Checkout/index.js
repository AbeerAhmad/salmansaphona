import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Url } from "../../../Endpoint/index";
import { connect } from "react-redux";
import "./css/index.css";
import { Link } from "react-router-dom";
import { Button, message } from "antd";
import { Badge } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const key = "updatable";

const openMessage = () => {
  message.loading({ content: "Loading...", key });
  setTimeout(() => {
    message.success({ content: "Order Confirmed!", key, duration: 2 });
  }, 1000);
};

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
      phone: "",
      province: "",
      city: "",
      address: "",
      postalCode: "",
      desc: "",
      price: "",
      country: "",
      cartArray: [],
    };
  }
  componentDidMount() {
    this.setState({
      cartArray: this.props.nCartItems,
    });
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  buyNow = (event) => {
    event.preventDefault();
    // debugger;
    let orderDetails = {
      cartNewItems: this.state.cartArray,
      address: this.state.address,
      city: this.state.city,
      phone: this.state.phoneNo,
      email: this.state.email,
      firstName: this.state.fname,
      lastName: this.state.lname,
      totalamount: this.props.nTotal + 250,
      country: this.state.country,
      status: "Active",
    };
    fetch(Url + "/buyNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderDetails }),
    }).then((data)=>data.json()).then((resp) => {
      if (resp) {
     if(resp.success){
       this.props.history.push('/')
     }

        openMessage();
      }
    });
  };

  render() {
    return (
      <div
        className="checkout_most_main_div"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        <Container>
          <Row style={{ paddingBottom: "20px" }}>
            <Col xs="12" sm="12" md="12" lg="7" xl="7">
              <div className="chckout_details_col1_main_div">
                <div className="co_title_div">
                  <Link to="/" style={{ color: "rgb(4,4,4)" }}>
                    <span>Saphona</span>
                  </Link>
                </div>
                {/* form div */}
                <div className="co_form_main_div">
                  <form>
                    <label for="cInfo" className="co_info_title1">
                      Contact Information
                    </label>
                    <input
                      type="text"
                      id="cInfo"
                      name="email"
                      placeholder="Your Email.."
                      className="co_mail_input co_input_tag"
                      onChange={(event) => {
                        this.handleChange(event);
                      }}
                    />

                    <input
                      type="text"
                      name="phoneNo"
                      placeholder="Phone Number"
                      className="co_phoneNo_input co_input_tag"
                      onChange={(event) => {
                        this.handleChange(event);
                      }}
                    />
                    <label
                      for="cInfo"
                      className="co_info_title1"
                      style={{ marginTop: "18px" }}
                    >
                      Shipping Information
                    </label>
                    <div className="co_FandLname_form_div">
                      <div style={{ width: "50%" }}>
                        <input
                          style={{ width: "95%" }}
                          type="text"
                          name="fname"
                          placeholder="First Name"
                          className="co_fname_input co_input_tag"
                          onChange={(event) => {
                            this.handleChange(event);
                          }}
                        />
                      </div>
                      <div style={{ width: "50%" }}>
                        <input
                          type="text"
                          name="lname"
                          placeholder="Last Name"
                          className="co_lname_input co_input_tag"
                          onChange={(event) => {
                            this.handleChange(event);
                          }}
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      className="co_address_input co_input_tag"
                      onChange={(event) => {
                        this.handleChange(event);
                      }}
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      className="co_city_input co_input_tag"
                      onChange={(event) => {
                        this.handleChange(event);
                      }}
                    />
                    <input
                      type="text"
                      name="country"
                      placeholder="country"
                      className="co_country_input co_input_tag"
                      onChange={(event) => {
                        this.handleChange(event);
                      }}
                    />
                    <div className="co_FandLname_form_div">
                      <div style={{ width: "50%" }}>
                        <input
                          style={{ width: "95%" }}
                          type="text"
                          name="province"
                          placeholder="province"
                          className="co_province_input co_input_tag"
                          onChange={(event) => {
                            this.handleChange(event);
                          }}
                        />
                      </div>
                      <div style={{ width: "50%" }}>
                        <input
                          type="text"
                          name="postalCode"
                          placeholder="postal Code"
                          className="co_postalCode_input co_input_tag"
                          onChange={(event) => {
                            this.handleChange(event);
                          }}
                        />
                      </div>
                    </div>
                    <input type="submit" value="Submit" onClick={this.buyNow} />
                  </form>
                </div>
              </div>
            </Col>
            <Col xs="12" sm="12" md="12" lg="5" xl="5">
              <div className="chckout_details_col2_main_div">
                {this.props.nCartItems.map((item) => {
                  console.log("item", item);
                  return (
                    <div>
                      <div
                        className="cart-total"
                        style={{ paddingBottom: "20px" }}
                      >
                        <Badge
                          count={item.amount}
                          style={{ backgroundColor: "gray" }}
                        >
                          <div
                            style={{
                              height: "70px",
                              width: "70px",
                              backgroundImage: `url(${Url + item.file[0]})`,
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                              backgroundPosition: "50% 50%",
                            }}
                          ></div>
                        </Badge>
                        <div
                          className="item item-1"
                          style={{
                            fontSize: "20px",
                            fontFamily: "OLD STANDARD TT",
                            paddingLeft: "30px",
                          }}
                        >
                          {item.title}
                        </div>

                        <div
                          className="item item-2"
                          style={{
                            fontSize: "15px",
                            fontFamily: "OLD STANDARD TT",
                            paddingLeft: "30px",
                          }}
                        >
                          Rs{item.price}
                        </div>
                      </div>
                      <hr />
                      <div
                        className="show_price_div_checkout"
                        style={{
                          width: "100%",
                          paddingBottom: "10px",
                          fontFamily: "Raleway",
                          fontWeight: "500",
                          fontSize: "15px",
                        }}
                      >
                        <span>Sub-Total</span>
                        <span style={{ float: "right" }}>
                          {`Rs - ${this.props.nTotal}`}
                        </span>
                      </div>
                      <div
                        className="show_price_div_checkout"
                        style={{
                          width: "100%",
                          paddingBottom: "10px",
                          fontFamily: "Raleway",
                          fontWeight: "500",
                          fontSize: "15px",
                        }}
                      >
                        <span>Shipping Charges</span>
                        <span style={{ float: "right" }}>Rs - 250</span>
                      </div>
                      <hr />
                      <div
                        className="show_price_div_checkout"
                        style={{
                          width: "100%",
                          fontFamily: "Raleway",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        <span>Total</span>
                        <span style={{ float: "right" }}>
                          {`Rs - ${this.props.nTotal + 250}`}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    nCartItems: store.cartReducer.cartItems,
    nTotal: store.cartReducer.total,
  };
};

export default connect(mapStateToProps)(Checkout);
