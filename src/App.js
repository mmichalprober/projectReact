import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './component/navbar/navbar'
import store from './redux/store'
import PageOne from './component/pageOne'
import PageTow from './component/pageTwo'
import PageThree from './component/pageThree'
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/page1" component={PageOne} />
            <Route path="/page2" component={PageTow} />
            <Route path="/page3" component={PageThree} />
            <Route path='/' component={PageOne} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;







