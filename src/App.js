import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Subscribe from './Pages/Subscribe/Subscribe';
import LearnMore from './Pages/LearnMore/LearnMore';
import AddService from './Pages/AddService/AddService';
import Book from './Pages/Book/Book/Book';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import MyBookings from './Pages/MyBookings/MyBookings';
import Services from './Pages/Home/Services/Services';



function App() {
  return (
    <div className="App ">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/book/:id">
              <Book></Book>
            </PrivateRoute>
            <PrivateRoute path="/subscribe">
              <Subscribe></Subscribe>
            </PrivateRoute>
            <PrivateRoute path="/learnmore">
              <LearnMore></LearnMore>
            </PrivateRoute>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/mybookings/:email">
              <MyBookings></MyBookings>
            </Route>
            <Route path="/manageorders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
