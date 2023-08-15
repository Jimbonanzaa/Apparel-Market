
import {BrowserRouter,Route, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
function App() {

  //Adding of badge
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter> 
    <div className="grid-container">
    <header className="row">
    <div>
     
      <Link className="brand" to="/">
       APPAREL | MARKET
        </Link>
 
    </div>
    <div>
     
      <Link to="/cart">
      <i className="fa fa-shopping-cart"></i>
        CART
        {cartItems.length > 0 && (
          <span className="badge">{cartItems.length}</span>
        )}
      </Link>

      {userInfo ? (
        <div className="dropdown">
          <Link to="#">
            {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
          </Link>
          <ul className="dropdown-content">
            <li>
              <Link to="#signout" onClick={signoutHandler}>
              <i className="fa fa-arrow-left"></i> SIGN OUT
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="/signin"><i className="fa fa-location-arrow"></i>SIGN IN</Link>
      )}
    </div>
  </header>
        <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/" component={HomeScreen}exact ></Route>
          
        </main>
        <footer className="row center"> <i className="fa fa-copyright"></i> ALL RIGHTS RESERVED. <i className="fa fa-trademark"></i>
        </footer>
        


        

    </div>
    </BrowserRouter>

  );
}

export default App;

