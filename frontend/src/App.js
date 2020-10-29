import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './screens/HomeScreen';
import About from './screens/AboutScreen';

function App() {
  return (
    <Router>
      <Header branding="Dyverse Productions" />
      <main className="py-3">
        <Container fluid>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
        </Container>
      </main>
    </Router>
  );
}

export default App;
