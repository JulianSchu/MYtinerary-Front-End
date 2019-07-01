import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import { loadUser } from './actions/authActions';
import store from './store';

import Home from './views/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import LogIn from './views/LogIn';
import SignUp from './views/SignUp';
import Cities from './views/Cities';
import ChosenCity from './views/ChosenCity';
import NewItinerary from './components/NewItinerary';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }

  render() {
  return (
    <Provider store={store}>
      <Router>
        <Container className="main">
          <Header />
          <div style={bottomSpace}></div>       
          <Route exact path="/" component={Home} />
          <Route path="/Cities" component={Cities}/>
          <Route path="/LogIn" component={LogIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route name="ChosenCity" path="/ChosenCity/:city" component={ChosenCity} />
          <NewItinerary />
          <div style={bottomSpace}></div>
          <Footer />
        </Container>
      </Router>
    </Provider>
  );
  }
}

const bottomSpace = {
  height: '60px'
}

export default App;
