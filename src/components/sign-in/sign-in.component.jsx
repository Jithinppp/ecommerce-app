import React from "react";
import "./sign-in.style.css";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignInWithGoogle } from "../../firebase/firebase.utils";

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
    console.log("signed in");
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
        <h2>I already have an account</h2>
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

          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={SignInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
