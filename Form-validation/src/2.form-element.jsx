//new added
import { Component } from "react";
import styled from "styled-components";

const Input = styled("input")`
  width: 100%;
`;

const DivFormElement = styled("div")`
  padding: 12px;
  margin-bottom: 6px;
  background-color: beige;
`;
class FormElement extends Component {
  /*  state = {
    firstName: "",
    lastName: "",
    email: "",
  }; */

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };
  }

  handleInputChange = (e) => {
    console.log(e);
  };

  render() {
    console.log("Re-render");
    return (
      <>
        <DivFormElement className="form-element">
          <label htmlFor="firstName">First Name: {this.state.firstName}</label>
          <Input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            onChange={(meraEvent) => {
              const { value, name } = meraEvent.target;
              console.log("MeraEvent: ", value, name);
            }}
          />
        </DivFormElement>

        <DivFormElement className="form-element">
          <label htmlFor="lastName">Last Name: {this.state.lastName}</label>
          <Input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            onChange={this.handleInputChange}
          />
        </DivFormElement>

        <DivFormElement className="form-element">
          <label htmlFor="email">Email: {this.state.email}</label>
          <Input
            type="email"
            name="email"
            placeholder="Enter email address"
            onChange={this.handleInputChange}
          />
        </DivFormElement>
      </>
    );
  }
}

export default FormElement;
