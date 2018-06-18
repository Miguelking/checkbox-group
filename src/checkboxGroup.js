import React from "react";

class CheckboxGroup extends React.Component {
  state = {
    checked: [],
    limitReached: false
  };

  onCheckboxClick = (checked, value) => {
    let newValue;
    if (checked) {
      newValue = this.state.checked.concat(value);
    } else {
      newValue = this.state.checked.filter(v => v !== value);
    }

    let limitReached = false;
    if (newValue.length >= 2) {
      limitReached = true;
    }

    this.setState({
      checked: newValue,
      limitReached
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.render(this.onCheckboxClick, this.state.limitReached)}
      </React.Fragment>
    );
  }
}

export default CheckboxGroup;
