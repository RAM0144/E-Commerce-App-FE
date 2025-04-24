import { Provider, useSelector } from 'react-redux'
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
// import Register from './pages/Register'
// import Login from './pages/Login'
// import ProductListing from './pages/ProductListing'
// import UserProfile from './pages/UserProfile'
// import ProductInfo from './pages/ProductInfo'
// import Cart from './pages/Cart'
import Layout from './pages/Layout'
import store from './store/store.js'
import "./App.css"
import { lazy, Suspense } from 'react';
import Loader from './component/Loder.jsx';


const Login = lazy(()=> import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ProductListing = lazy(() => import("./pages/ProductListing"));
const ProductInfo = lazy(() => import("./pages/ProductInfo"));
const Cart = lazy(() => import("./pages/Cart"));

const ProtectedComponent = ({component}) => {
  const { authenticated } = useSelector((state) => state.account);

  if (authenticated) {
    return component;
  }
  else {
    return <Navigate to="/login" />
  }
}

ProtectedComponent.propTypes = {
  component: PropTypes.node.isRequired,
}


function App() {
  return (
     
        <Suspense fallback={<Loader/>} >
        <Provider store={store}>
          <Router>
          <Routes>
          <Route path='' element={<Layout/>}>
          <Route path="/" element={<ProtectedComponent component={<ProductListing />} />} />
          <Route path="/cart" element={<ProtectedComponent component={<Cart />} />} />
          <Route path="/products/:productSku" element={<ProtectedComponent component={<ProductInfo />} />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />  
        </Routes>
          </Router>
        </Provider>
        </Suspense>
    
  )
}

export default App
