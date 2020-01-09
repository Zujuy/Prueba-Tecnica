import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import { StyledForms } from "../../styles/components";

const authservice = new AuthService();


export default class Signup extends Component {
  state = {
    formSignup: {
      name: '',
      lastName: '',
      email: '',
      password: ''
    }
  };

  handleSignup = async e => {
    e.preventDefault();
    const { formSignup } = this.state;
    console.log(formSignup)
    const { data } = await authservice.signup(formSignup);
  };

  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      formSignup: {
        ...this.state.formSignup,
        [name]: value
      }
    });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            this.handleSignup(e);
            this.props.history.push('/login');
          }}
        >
          <StyledForms>
            <div>
              <h2>Registro</h2>
              <br></br>

              <div className="formstyle">
                <div>
                  <label htmlFor="name">Nombre/s</label>
                  <input
                    name="name"
                    placeholder="Nombre/s"
                    type="text"
                    value={this.state.formSignup.name}
                    onChange={this.inputChange}
                  />
                </div>
                <br></br>

                <div>
                  <label htmlFor="lastName">Apellidos</label>
                  <input
                    name="lastName"
                    placeholder="Apellidos"
                    type="text"
                    value={this.state.formSignup.last_name}
                    onChange={this.inputChange}
                  />
                </div>
                <br></br>

                <div>
                  <label htmlFor="email">email</label>
                  <input
                    name="email"
                    placeholder="e-mail"
                    type="text"
                    value={this.state.formSignup.email}
                    onChange={this.inputChange}
                  />
                </div>
                <br></br>

                <div>
                  <label htmlFor="password">Contraseña</label>
                  <input
                    name="password"
                    placeholder="Contraseña"
                    type="password"
                    value={this.state.formSignup.password}
                    onChange={this.inputChange}
                  />
                </div>
                <br></br>

                <div>
                  <button type="submit">Registrarse</button>
                </div>
              </div>
            </div>
          </StyledForms>
        </form>
      </div>
    )
  }

}


