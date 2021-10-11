import React from "react";
import "./sign-in.style.css";

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
    this.setState({ [name]: value }, () => console.log(this.state.email));
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in sith email and password</span>
        <form onSubmit={this.HandleSubmit}>
          <input
            name="email"
            type="email"
            value={this.state.email}
            required
            onChange={this.ChangeHandler}
          />
          <label>Email</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            required
            onChange={this.ChangeHandler}
          />

          <input type="submit" value="Submit Form" />
          <label>Password</label>
        </form>
      </div>
    );
  }
}

export default SignIn;
