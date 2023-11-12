import './App.css';
import React, { Component } from 'react';
import CardList from '../components/CardList';
import Search from '../components/Search';
import { Container } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../stylesheet';


class App extends Component {

  constructor() {
    super()
    this.state = {
      animeArr: [],
      search: 'empty',
    };
  };

  componentDidMount() {
    fetch('https://api.jikan.moe/v4/anime')
      .then(response => { return response.json() })
      .then(animes => this.setState({ animeArr: animes.data }))
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.setState({ search: event.target.value })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      fetch(`https://api.jikan.moe/v4/anime?q=${this.state.search}&sfw`)
        .then(response => { return response.json() })
        .then(animes => this.setState({ animeArr: animes.data }))
    }
  }


  render() {
    const { animeArr } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <div className='App'>
          <h1 style={{ color: '#222222' }}>
            Welcome To My Great Collection Of Anime!!
          </h1>
          <Search handleKeyPress={this.handleKeyPress} />
          <br />
          <br />
        </div>
        <Container
          sx={{
            backgroundImage: `url(${"04.jpg"})`,
            padding: '30px',
            height: "auto",
            borderRadius: '26px'
          }}>
          <CardList animeArr={animeArr} />
        </Container >
      </ThemeProvider>
    );
  }
}
export default App;