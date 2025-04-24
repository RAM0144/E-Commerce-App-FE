import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";


const CartLink = () => {

    const { totalQty } = useSelector((state) => state.cart);

    const { userInfo } = useSelector((state) => state.account);

    if (userInfo.userType === "seller") { 
       return ""
    }

    return (
       <Link to="/cart"  className="btn btn-outline-light">
        <i className="fa-solid fa-cart-shopping"></i>&nbsp;({totalQty})
      </Link>
    );
};

const Layout = () => {
   
  const dispatch = useDispatch();
  const naviagate = useNavigate();

  const handleLogout = () => {
    dispatch({type: "account_logout"});
    naviagate("/login");
  }
   
    return (
        <div>
      <header className="z-3 bg-dark text-white p-3 mb-4 position-sticky top-0">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" style={{ textDecoration: "none" }} > 
           {" "}
          <h1 className="h3">My E-Commerce App</h1>
          </Link>
          
          <form className="form-inline">
            <input className="form-control mr-sm-2" 
            style={{ display: "inline-block", width: "auto" }}
            type="search" placeholder="Search" aria-label="Search" />
            &nbsp; &nbsp;
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
          <CartLink />
          
          <i tabIndex={0} 
          className="fa-solid fa-right-from-bracket fa-2x"
          onClick={handleLogout}
          style={{cursor: "pointer"}}
          ></i>
        </div>
      </header>
      <div style={{minHeight: "100vh"}}>
      <Outlet />
      </div>
      <div>
      <footer style={{backgroundColor:"black",color:"white",bottom:0,position:"static",width:"100%",height:"70px",textAlign:"center"}}>
        <div style={{paddingTop:"20px"}}>
        <a href="email" style={{textAlign:"center"}}>e-commerce@gmail.com</a>
        <i className="fa-brands fa-facebook" style={{width:"12px",marginLeft:"6px",cursor: "pointer"}}></i> 
        <i className="fa-brands fa-square-instagram" style={{width:"15px",marginLeft:"10px",cursor: "pointer"}}></i>
        </div>
       </footer>
      </div>
    </div>
    )
};

export default Layout;