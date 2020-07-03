import React from "react";
import { Container, Row } from "reactstrap";
import "./css/introduction.css";

class Introduction extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <div className="introduction_main_div">
              <p>
                We are a small brand with big dreams and an eye on the future.
                We've already grown in product line and ethos and we’re finding
                a great sense of purpose along the way. We hope our offerings
                speak to your own lifestyle and goals, and invite you to share
                this journey with us.
              </p>
              {/* <p>
            Our products are inspired by the people and world around us.
            Beautiful, high quality goods that are designed especially for you.
            Discover our story and meet the people that make our brand what it
            is.
          </p> */}
              {/* <p>
                        Our work is a result of the way we look at the world.
                        We choose to live simply and the undeniable soul of
                        the brand is the belief that less is more.
                    </p>  */}
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Introduction;
