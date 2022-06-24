import React, { Component } from 'react';
import PostServices from '../../services/postServices';
import { Link } from 'react-router-dom';
import Cards from '../postcards/Cards';
import { ButtonStyled } from '../../styles/components';

const postServices = new PostServices();

export default class Home extends Component {
  state = {
    posts: [],
  };
  async componentDidMount() {
    const {
      data: { posts },
    } = await postServices.getPosts();
    this.setState({
      posts,
    });
    console.log(this.state);
  }

  render() {
    return (
      <>
        <ButtonStyled>
          <h1>Views de post</h1>
          <Link to="/add-post">
            <button>Crearas un post</button>
          </Link>
        </ButtonStyled>
        <br></br>
        <Cards posts={this.state.posts} />
      </>
    );
  }
}
