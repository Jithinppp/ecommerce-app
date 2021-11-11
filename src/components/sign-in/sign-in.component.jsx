import React from "react";
import "./sign-in.style.css";
import FormInput from "../form-input/form-input.component";

import { SignInWithGoogle } from "../../firebase/firebase.utils";
import SecondButton from "../second-button/second-button.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  HandleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  ChangeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span className="sub-span">Sign in sith email and password</span>
        <form onSubmit={this.HandleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            required
            ChangeHandler={this.ChangeHandler}
            label="Email"
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            required
            ChangeHandler={this.ChangeHandler}
            label="Password"
          />

          <SecondButton type="submit">Sign In</SecondButton>
          <SecondButton onClick={SignInWithGoogle}>
            Sign In With Google
          </SecondButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
