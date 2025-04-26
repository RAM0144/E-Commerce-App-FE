import { useState } from "react"
import { Link } from "react-router-dom";
import { handledAPIPost } from "../apis/apis.js";

const initialState = {
    name: "",
    phone: "",
    email: "",
    address: "",
    userType: "customer",
    gstNo: "",
    password: "",
};

const Register = () => {

     
     const [formData, setFormData] = useState(initialState);

     const handleChange = (e) => {
         const {name, value} = e.target
         setFormData((prevData) => ({
            ...prevData,
            [name]: value
         }));
     };

     const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await handledAPIPost("/register", formData);
         alert(response.msg || ""); 
        } catch (error) {
            alert(error.message);
        }
        
        setFormData(initialState);
     };


    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
        <form className="p-4 border rounded" onSubmit={handleSubmit}>
          <h2 className="mb-4">Register</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userType">User Type</label>
            <select
              className="form-control"
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
            >
              <option value="customer">Customer</option>
              <option value="admin">Seller</option>
            </select>
          </div>
          {formData.userType === "seller" && (
            <div className="form-group">
              <label htmlFor="gstNo">GST No</label>
              <input
                type="text"
                className="form-control"
                id="gstNo"
                name="gstNo"
                value={formData.gstNo}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-4">
            Register
          </button>
          <p className="mt-3">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    );
  };

export default Register;