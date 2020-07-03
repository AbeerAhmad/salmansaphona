import React from "react";
import "./css/adminpanel.css";
import store from "../../../store/store";
// import { Upload, Button, Icon } from 'antd';
import AddFeatureProduct from "./AddFeatureProduct/AddFeatureProduct";
// import AddCategories from "./AddCategories/AddCategories";
import AddSubCatPd from "./AddSubCatPd/addSubCatPd";
import ManageOrders from "./ManageOrders/index";
import CompletedOrders from "./CompletedOrders/index";
import { Url } from "../../../Endpoint/index";
import { Tabs } from "antd";
import { connect } from "react-redux";
import Header2 from "../../Dashboard/Header/header2";
class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      image: "",
      mode: "top",
    };
  }

  handleimg = (event) => {
    this.setState({ image: event.target.files[0] });
    console.log(event.target.files[0]);
  };
  saveData = (event) => {
    event.preventDefault();
    let formdata = new FormData();
    formdata.append("file", this.state.image);
    // this.setState({ open: false });

    fetch(Url + "/uploads", {
      method: "POST",
      body: formdata,
    }).then((resp) => {
      store.dispatch({
        type: "Carousel_info",
        payload: {
          image: URL.createObjectURL(this.state.image),
        },
      });
      if (resp) {
        // window.location.href = "/adminpanel";
        document.getElementById("file").value = null;
      }
    });
    // console.log(this.state);
  };
  componentDidMount = () => {
    console.log("props", this.props);
    if (this.props.isAuthenticated == false) {
      this.props.history.push("/admin-saphona");
    }
  };
  render() {
    const { TabPane } = Tabs;
    return (
      <div>
        <div>
          <Header2 />
        </div>
        <div className="adminPanel_main_div">
          <Tabs defaultActiveKey="4" tabPosition={this.state.mode}>
            <TabPane tab="Please Uplaod A Front Crousel Image" key="1">
              <div className="FC_upload_main_div">
                <div className="Crousel_img_upload_title_div">
                  <h3 className="Crousel_img_upload_title">
                    Please Uplaod A Front Crousel Image
                  </h3>
                </div>

                <div className="Crousel_img_upload_button_div">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    onChange={this.handleimg}
                  />

                  <button onClick={this.saveData}> Add Crousel Item </button>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Add Feature Product" key="2">
              <div>
                <AddFeatureProduct />
              </div>
            </TabPane>
            <TabPane tab="Add Sub-Category Product" key="3">
              <div>
                <AddSubCatPd />
                {/* <AddCategories /> */}
              </div>
            </TabPane>
            <TabPane tab="Manage orders" key="4">
              <div>
                <ManageOrders />
              </div>
            </TabPane>
            <TabPane tab="Completed orders" key="5">
              <div>
                <CompletedOrders />
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
let ADMIN = connect(function (store) {
  return {
    isAuthenticated: store.adminReducer.isAuthenticated,
  };
})(AdminPanel);
export default ADMIN;
