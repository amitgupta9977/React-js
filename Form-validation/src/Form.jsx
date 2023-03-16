import { Component } from "react";
import {FormDiv} from './style'


class FormValidation extends Component {
  state = {
    name: "",
    city: "",
    state: "",
    mobile: "",
  };
  ShowData = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { name, city, state, mobile } = this.state;
    return (
      <>
        <FormDiv>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.ShowData}
          />
          <br />
          <br />
          <label htmlFor="">City :</label>
          <input
            type="text"
            value={city}
            name="city"
            onChange={this.ShowData}
          />
          <br />
          <br />
          <label htmlFor="">State :</label>
          <input
            type="text"
            value={state}
            name="state"
            onChange={this.ShowData}
          />
          <br />
          <br />
          <label htmlFor="">mobile no :</label>
          <input
            type="number"
            value={mobile}
            name="mobile"
            onChange={this.ShowData}
          />
          <br />
          <br />
        </FormDiv>
        <div>
          <p className="para">Name:{name}</p>
          <p className="para">City:{city}</p>
          <p className="para">State:{state}</p>
          <p className="para">Mobile:{mobile}</p>
        </div>
      </>
    );
  }
}
export default FormValidation;
