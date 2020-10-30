import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './screens/HomeScreen';
import About from './screens/AboutScreen';
import VideosScreen from './screens/VideosScreen';

function App() {
  return (
    <Router>
      <Header branding='Dyverse Productions' />
      <main>
        <Container fluid>
          <Route path='/' component={Home} exact />
          <Route path='/videos' component={VideosScreen} exact />
          <Route path='/about' component={About} exact />
          <Route
            path='/redirect'
            component={() => {
              window.location.href =
                'https://www.youtube.com/channel/UCmElDwZrRIjcdgMHq1BeXJQ';
              return null;
            }}
          />
        </Container>
      </main>
    </Router>
  );
}

export default App;
