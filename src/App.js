import Header from './components/header/header';
import Footer from './components/header/footer/footer';
import logo from './logo.svg';
import "../src/pages/home/home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Xertz from './pages/xertz/xertz';

import Doc_login from './pages/login/login_as_doc';
import Reception from './pages/login/reception_login';
import Signup from './pages/signup/signup';
import Login_as_patient from './pages/login/login_as_patient';
import Register from './pages/register/register';
import about from './pages/about/about';
import login from './pages/login/login';
import BookAppointment from './pages/Book Appointment/BookAppointment';
import Medicine from './pages/medicine/Medicine';
import Home from './pages/home/home';
// import {ApolloClient,
//   InMemory,
//   ApolloProvider,
//   HttpLink,
//   from,
//   } from "@apollo/client";
//   const errorLink = onError(({graphqlErrors, networkError}) => {
//     if (graphqlErrors){
//       graphqlErrors.map(({message, location, path}) =>{
//         alert(`Graphql erro ${message}`);
//       })
//     }
//   }) 
// const link = from([
//   errorLink,
//   new HttpLink({}) //enter the link for graphql

// ])
// import {onError} from '@apollo/client/link/error';
// const client =  new ApolloClient ({
//   cache : new InMemoryCache(),
//   link: link

// })








function App() {
  return  (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/xertz" component={Xertz} /> 
         



          <Route path="/login_as_doc" component={Doc_login} /> 
          <Route path="/reception_login" component={Reception} />
          <Route path="/login_as_patient" component={Login_as_patient} />
          <Route path="/register" component={Register} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />
          
          
          
          <Route path="/BookAppointment" component={BookAppointment} />
          <Route path="/Medicine" component={Medicine} />
          <Route path="/about" component={about} />
          <Route path="/login" component={login} />
          
          
          
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
