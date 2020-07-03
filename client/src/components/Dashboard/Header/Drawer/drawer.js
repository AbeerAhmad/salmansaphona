import React, { Component } from "react";
import { Drawer, Button, Divider } from "antd";
import { MdMenu } from "react-icons/md";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import "./drawer.css";
class MenuDrawer extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
      showDroprDown: false,
      showAuraMblDpdwn: false
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div className="header-drawer">
        <MdMenu
          color={this.props.color}
          size={30}
          style={{ cursor: "pointer" }}
          onClick={this.showDrawer}
        />

        <Drawer
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => {
              this.setState({
                showDroprDown: !this.state.showDroprDown
              });
            }}
          >
            Saphona
            <span style={{ float: "right " }}>
              <img src={require("./images/down-arrow.png")} />
            </span>
          </p>

          <p hidden={this.state.showDroprDown == false}>
            <Link to="/saphona/maahru" style={{ color: "white" }}>
              Maahru
            </Link>
          </p>
          <p hidden={this.state.showDroprDown == false}>
            <Link to="/saphona/noor-ul-ain" style={{ color: "white" }}>
              Noor-ul-ain
            </Link>
          </p>
          <p hidden={this.state.showDroprDown == false}>
            <Link to="/saphona/noor-e-chashm" style={{ color: "white" }}>
              noor-e-chashm
            </Link>
          </p>
          <Divider />
          <p
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => {
              this.setState({
                showAuraMblDpdwn: !this.state.showAuraMblDpdwn
              });
            }}
          >
            Aura
            <span style={{ float: "right " }}>
              <img src={require("./images/down-arrow.png")} />
            </span>
          </p>
          <p hidden={this.state.showAuraMblDpdwn == false}>
            <Link to="/aura/fusion" style={{ color: "white" }}>
              Fusion
            </Link>
          </p>
          <p hidden={this.state.showAuraMblDpdwn == false}>
            <Link to="/aura/luxury" style={{ color: "white" }}>
              Luxury
            </Link>
          </p>
          <p hidden={this.state.showAuraMblDpdwn == false}>
            <Link to="/aura/print" style={{ color: "white" }}>
              Print
            </Link>
          </p>
          <Divider />
        </Drawer>
      </div>
    );
  }
}
export default MenuDrawer;
