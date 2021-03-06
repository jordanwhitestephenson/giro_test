import {Row, Container} from "reactstrap";
import React from "react";

class LeftImageColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    };
  }
  async componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({isMobile: window.innerWidth <= 760});
  }
  render() {
    const isMobile = this.state.isMobile;

    return (
      <section bg-white>
        <Container className={isMobile ? "p-0" : this.props.firstLeftContainer && !isMobile ?  "mb-7 mt-7" : ""}>
          <Row>
            <div className={this.props.fullscreen ? "col-md-6 col-sm-12 p-0" : "col-md-6 col-sm-12"}>
              <img className={isMobile ? "pb-3" : ""} alt={this.props.alt} src={this.props.left} />
            </div>
            <div className="d-flex col-md-6 col-sm-12 align-items-center  ">
              <Container >
                <h3 className="text-left display-3 text-uppercase pt-4">{this.props.headline}</h3>
                {this.props.firstSecondaryHeadline ? <h4 className="text-left display-4 text-uppercase"> {this.props.firstSecondaryHeadline} </h4> : false}
                {this.props.firstSecondaryText ? <p className="text-left pb-4"> {this.props.firstSecondaryText}</p> : false}
                {this.props.secondSecondaryHeadline ? <h4 className="text-left display-4 text-uppercase"> {this.props.secondSecondaryHeadline} </h4> : false}
                {this.props.secondSecondaryText ? <p className="text-left pb-4"> {this.props.secondSecondaryText}</p> : false}
                {this.props.text ? <p className="text-left pb-4"> {this.props.text}</p>: false}
              </Container>
            </div>
          </Row>
        </Container>
      </section>
    );
  }
}

export default LeftImageColumn;
