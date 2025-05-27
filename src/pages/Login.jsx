import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  handledAPIPost } from "../apis/apis.js";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const naigate = useNavigate();

  const dispatch = useDispatch();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await handledAPIPost("/login", { email, password });
        const { msg, userToken } = response;
        localStorage.setItem("authToken", userToken);

        alert(msg);
        dispatch({
          type: "account_authenticated", 
          userInfo: jwtDecode(userToken) 
        });
        naigate("/")
      } catch (error) {
        alert(error.message)
        console.log(error.message);
    }
  };
    
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="p-4 border rounded" onSubmit={handleSubmit}>
        <h2 className="mb-4">Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4">
          Login
        </button>
        <p className="mt-3">
          Don&apos;t have an account?{" "}
          <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;



// import { useState } from "react"
// import { loginUser } from "./APIs.js";


// const Login = () => {
//     const [formData, setFormData] = useState({
//         identifier: "",
//         password: "",
//     });

//     const handleChange = (e) => {
//         const { name,value } = e.target;
//         setFormData({
//             ...formData,
//             [name]:value
//         });
//     };

//     const handleSubmit = async (e) => {
//           e.preventDefault(); 
        
//         try {
//             const { userToken } = await loginUser(formData);
//             localStorage.setItem("authStatus", "authenticated");
//             localStorage.setItem("authToken", userToken);
//         } catch (error) {
//             console.log("Error", error);
//             alert(error.message);
//         }
//     };
    

//     return (
            
//         <div>
//             <h2 style={{color:"blue"}}>Event Management App</h2>
//          <div className="container-5">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit} >
//                 <div >
//                 <label htmlFor="identifier">Email Or Mobile</label>
//                 <input 
//                 type="text"
//                 className="form-control"
//                 id="identifier"
//                 name="identifier"
//                 value={formData.identifier}
//                 onChange={handleChange}
//                 required
//                 /> 
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password</label>
//                     <input 
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary" style={{margin:"5px"}}>Login</button>
//             </form>
//          </div>
//         </div>
//     )
// };

// export default Login;