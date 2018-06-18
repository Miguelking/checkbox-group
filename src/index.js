import React from "react";
import ReactDOM from "react-dom";
import SingleCheckbox from "./singleCheckbox";
import CheckboxGroup from "./checkboxGroup";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Miguel</h1>
      <CheckboxGroup
        render={(onCheckboxClick, limitReached) => (
          <React.Fragment>
            <SingleCheckbox
              value="My name is Miguel"
              name="miguel1"
              onCheckboxClick={onCheckboxClick}
              limitReached={limitReached}
            />
            <SingleCheckbox
              value="My last name is King"
              name="miguel2"
              onCheckboxClick={onCheckboxClick}
              limitReached={limitReached}
            />
            <SingleCheckbox
              value="My wife's name is Anabel"
              name="miguel3"
              onCheckboxClick={onCheckboxClick}
              limitReached={limitReached}
            />
          </React.Fragment>
        )}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
