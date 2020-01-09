import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import { StyledForms } from "../../styles/components"

const authservice = new AuthService();

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  login = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { data } = await authservice.login({ email, password });
    localStorage.setItem("user", JSON.stringify(data));
    alert("Bienvenido");
  };

  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  render() {
    return (
      <>
        <StyledForms>
          <div>
            <h1>Login</h1>
            <br></br>
            <br></br>
            <div>
              <form onSubmit={this.login}>
                <div>
                  <label htmlFor="email">e-mail</label>
                  <input
                    onChange={this.inputChange}
                    type="text"
                    name="email"
                    id="email"
                    required
                  />
                </div>
                <br></br>

                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    onChange={this.inputChange}
                    type="password"
                    name="password"
                    id="password"
                    required
                  />
                </div>
                <br></br>
                <br></br>
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </StyledForms>
      </>
    );
  }
}
