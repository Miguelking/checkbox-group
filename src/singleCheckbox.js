import React from "react";

class SingleCheckbox extends React.Component {
  state = {
    checked: false
  };

  onClick = e => {
    const checked = e.target.checked;
    const value = e.target.value;
    this.setState(
      {
        checked: !this.state.checked
      },
      () => this.props.onCheckboxClick(checked, value)
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="checkbox">
          <label htmlFor={this.props.name}>
            <input
              type="checkbox"
              name={this.props.name}
              id={this.props.name}
              value={this.props.value}
              onChange={this.onClick}
              disabled={this.props.limitReached && !this.state.checked}
            />{" "}
            {this.props.value}
          </label>
        </div>
      </React.Fragment>
    );
  }
}

export default SingleCheckbox;
