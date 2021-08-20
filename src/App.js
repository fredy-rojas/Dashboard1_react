import SideBar from "./componets/sidebar/SideBar";
import Topbar from "./componets/topbar/Topbar";
import Home from "./Pages/Home/Home";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,} from "react-router-dom";
import Userlist from "./Pages/UserList/Userlist";
import User from "./Pages/User/User"
import NewUser from "./Pages/NewUser/NewUser";
import ProductList from "./Pages/ProductList/ProductList";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/NewProduct/NewProduct";




function App() {
  return (
    <Router>
      <Topbar /> 
      <div className="container">
        <SideBar/> 
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/users"><Userlist/></Route>
          <Route path= "/user/:userID"><User/></Route>
          <Route path="/newUser"><NewUser></NewUser></Route>

          <Route path="/products"><ProductList/></Route>
          <Route path= "/product/:productID"><Product/></Route>
          <Route path="/newProduct"><NewProduct/></Route>

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
