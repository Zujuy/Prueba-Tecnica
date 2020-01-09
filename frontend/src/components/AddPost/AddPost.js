import React, { Component } from "react";
import PostServices from "../../services/postServices";
import { StyledForms } from "../../styles/components";

const postServices = new PostServices();

export default class AddPost extends Component {
  state = {
    title: "",
    content: ""
  };
  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  addPost = async e => {
    e.preventDefault();
    const { title, content } = this.state;
    const post = await postServices.createPost({ title, content });
    console.log(post);
    alert("Post creado");
    this.setState({
      title: "",
      content: ""
    });
  };


  render() {
    return (
      <>
        <StyledForms>
          <div>
            <h1>Crear post</h1>
            <div>
              <form onSubmit={this.addPost}>
                <div>
                  <label htmlFor="title">Título</label>
                  <input
                    onChange={this.inputChange}
                    value={this.state.title}
                    type="text"
                    name="title"
                    id="title"
                  />
                </div>
                <br></br>

                <div>
                  <label htmlFor="content">Contenido</label><br></br>
                  {/* <input
                    onChange={this.inputChange}
                    value={this.state.content}
                    type="text"
                    name="content"
                    id="content"
                  /> */}
                  <textarea
                    onChange={this.inputChange}
                    value={this.state.content}
                    name="content"
                    id="content"
                  />
                </div>
                <br></br>
                <button type="submit">Crear post</button>
              </form>
            </div>
          </div>
        </StyledForms>
      </>
    );
  }
}
