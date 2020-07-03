import React, { Component } from "react";
import { connect } from "react-redux";
import { Url } from "../../../../Endpoint/index";
import abc from "./abc.jpg";
import { message } from "antd";
import { Link } from "react-router-dom";
import Header2 from "../../Header/header2";
import { Button } from "reactstrap";
import store from "../../../../store/store";

class Maahru extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      currentPage: 1,
      todosPerPage: 10,
      currentTodos: [],
      searchword: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }
  componentWillReceiveProps = (nextProps, prev) => {
    this.setState({
      todos: nextProps.saphonaNoorUlainProducts,
    });
  };


  componentDidMount() {
    fetch(Url + "/showSubNoorAinPro", {
      method: "GET",
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
        store.dispatch({
          type: "SHOW_NOORulain_PRODUCTS",
          payload: data,
        });
      });
  }
  addTocartItem = (price, description, title, image) => {
    let { cart } = this.props;
    // console.log(this.state);
    let amount = 0;
    var descriptionMatched = false;
    for (let i = 0; i < cart.length; i++) {
      if (description == cart[i].description) {
        descriptionMatched = true;
        // cart[i].amount++;
        descriptionMatched = cart[i];
        break;
      }
    }

    if (!descriptionMatched) {
      store.dispatch({
        type: "Add_To_Cart",
        payload: {
          price: price,
          description: description,
          file: image,
          amount: 1,
          title: title,
        },
      });
    } else {
      alert("item added to cart successfully");
      store.dispatch({
        type: "Update_Cart",
        payload: {
          price: price,
          description: description,
          file: image,
          amount: ++descriptionMatched.amount,
          title: title,
        },
      });
    }
  };
  deleteProducts = (event, id) => {
    // let getparentNode = event.target.parentNode.parentNode;
    fetch(Url + "/deleteNoorAinProducts/" + id, {
      method: "DELETE",
      // body: formdata
    }).then(function (res) {
      store.dispatch({
        type: "DELETE_NOOR_UL_AIN_PRODUCT",
        payload: id,
      });
    });
  };
  filterList = (e) => {
    this.setState({
      searchword: e.target.value,
    });
    const products = this.props.saphonaNoorUlainProducts;
    const filtereditem = products.filter((p) =>
      p.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log("item", filtereditem);
    this.setState({
      todos: filtereditem,
    });
  };
  render() {
    const key = "updatable";

    const openMessage = () => {
      message.loading({ content: "Loading...", key });
      setTimeout(() => {
        message.success({
          content: "Item Added To Cart Successfully!",
          key,
          duration: 2,
        });
      }, 1000);
    };
    const { currentPage, todosPerPage, todos, img } = this.state;
    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    let filetoshow;
    if (this.state.searchword.length != 0) {
      filetoshow = this.state.todos;
    } else {
      filetoshow = currentTodos;
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          style={{ paddingLeft: "2%" }}
        >
          {number}
        </li>
      );
    });
    return (
      <div>
        <div>
          <Header2 />
        </div>
        <div
          style={{
            textTransform: "uppercase",
            fontFamily: "OLD STANDARD TT",
            paddingBottom: "20px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            paddingTop: "5%",
            fontSize: "1.4rem",
          }}
        >
          {this.props.match.url.slice(9)}
        </div>
        <hr style={{ width: "60px", backgroundColor: "Black" }} />
        <span style={{ display: "flex", justifyContent: "center" }}>
          <form>
            <input
              type="text"
              name="search"
              placeholder="Search.."
              className="searchProduct_input"
              autoComplete="off"
              onChange={this.filterList}
            />
          </form>
        </span>
        <hr style={{ width: "60px", backgroundColor: "Black" }} />
        <div className="FCD_main_div">
          {filetoshow.map((item) => {
            console.log("itemCT", item);
            return (
              <div className="FCD_product_div" style={{ position: "relative" }}>
                <Button
                  color="primary"
                  size="lg"
                  className="cart_btn_span"
                  onClick={() =>
                    this.addTocartItem(
                      item.price,
                      item.description,
                      item.title,
                      item.file,
                      openMessage()
                    )
                  }
                >
                  ADD TO CART
                </Button>
                <Link to={`/noor-ul-ain/productDetails/${item.description}`}>
                  <div
                    className="bg_img_product_div"
                    style={{
                      width: "330px",
                      height: "500px",
                      backgroundImage: `url(${Url + item.file[0]}`,
                      backgroundPosition: "50% 50%",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </Link>
                <div className="FCD_desc_div">
                  {" "}
                  <i> {item.title} </i>{" "}
                </div>
                <div className="FCD_price_div">
                  {" "}
                  <i> Rs-{item.price + " "}only </i>{" "}
                </div>
                <div>
                  <button
                    onClick={(event) =>
                      window.confirm("are you sure you want to delete this ?")
                        ? this.deleteProducts(event, item._id)
                        : null
                    }
                  >
                    Delete
                  </button>
                  <Link to={"/kidsupdate/" + item._id}>
                    <button>update</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {/* Display page No */}
        <div className="see_page_no_main_div">
          <div
            style={{
              margin: "auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {/* {renderTodos} */}
          </div>

          <ul
            id="page-numbers"
            style={{
              display: "flex",
              listStyle: "none",
            }}
          >
            <button hidden={renderPageNumbers == 0}>
              {" "}
              {renderPageNumbers}{" "}
            </button>
          </ul>
        </div>
      </div>
    );
  }
}
let NewVM = connect(function (store) {
  return {
    saphonaNoorUlainProducts: store.imgReducer.saphonaNoorUlainProducts,
    cart: store.cartReducer.cartItems,
  };
})(Maahru);
export default NewVM;
