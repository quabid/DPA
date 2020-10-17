import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Header branding="Dyverse Productions" />
      <main className="py-3">
        <Container>
          <Route
            path="/"
            component={Home}
            vdo_src="./components/assets/vdo_1.mp4"
            exact
          />
        </Container>
      </main>
    </Router>
  );
}

export default App;
