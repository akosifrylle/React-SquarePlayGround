import React from "react";
import "./Square.css";
import PropTypes from "prop-types";

export default class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      squareColor: this.props.initialColor,
      isVisible: this.props.initialVisibility
    };
  }

  setColor(color) {
    this.setState({
      squareColor: color
    });
  }

  toggleSquare(visible) {
    console.log(!visible);
    this.setState({
      isVisible: !visible
    });
  }

  render() {
    let textElem;
    const style = {
      width: "100px",
      height: "100px",
      backgroundColor: this.state.squareColor,
      visibility: this.state.isVisible ? "visible" : "hidden"
    };

    return (
      <div>
        <div style={style} className="Square"></div>
        <div className="SquareControls">
          <input
            ref={elem => {
              textElem = elem;
            }}
            type="text"
            placeholder="Color..."
          />
          <button onClick={() => this.setColor(textElem.value)}>Ok</button>
          <button
            id="squareToggle"
            onClick={() => this.toggleSquare(this.state.isVisible)}
          >
            {this.state.isVisible ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    );
  }
}

Square.propTypes = {
  initialColor: PropTypes.string,
  initialVisibility: PropTypes.bool
};

Square.defaultProps = {
  initialColor: "blue",
  initialVisibility: true
};
