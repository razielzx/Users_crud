import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const UsersForm = ({
  addProduct,
  productEdit,
  updateProduct,

}) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pasword, setPasword] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    if (productEdit) {
      setName(productEdit.first_name);
      setLastName(productEdit.last_name);
      setEmail(productEdit.email);
      setPasword(productEdit.password);
      setBirthday(productEdit.birthday);
    }
     else {
      setName("");
      setLastName("");
      setEmail("");
      setPasword("");
      setBirthday("");
    }
  }, [productEdit]);

  const submit = (e) => {
    e.preventDefault();
    const product = {
      first_name: name,
      last_name: lastName,
      email,
      password: pasword,
      birthday
    };
    Swal.fire({
      title: "Ready",
      text: "Updated!",
      icon: "success",
      
  });
    reset();
    if (productEdit) {
      product.id = productEdit.id;
      updateProduct(product);
    }
  
     else {
      addProduct(product);

    } 
  };
  
 
  const reset = () => { 
      setName("");
      setLastName("");
      setEmail("");
      setPasword("");
      setBirthday("");
  };




  return (
    <div className="input-group">
      <h1>New User</h1>
      <form onSubmit={submit}>
        <div className="input-group">
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            aria-label="First name" 
            className="form-control"
            placeholder="First name"
            required
          />
        </div>
        <div >
          <label htmlFor="lastName"></label>
          <input
            type="text"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            aria-label="Last name" 
            className="form-control"
            placeholder="Last name"
            required

          />
        </div>
        </div>


        <div className="input-container">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            aria-label="E-mail" 
            className="form-control"
            placeholder="E-mail"
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="pasword"></label>
          <input
            type="password"
            id="pasword"
            onChange={(e) => setPasword(e.target.value)}
            value={pasword}
            aria-label="Last name" 
            className="form-control"
            placeholder="Password"
            required

          />
        </div>

        <div className="input-container">
          <label htmlFor="birthday"></label>
          <input
            type="date"
            id="birthday"
            onChange={(e) => setBirthday(e.target.value)}
            value={birthday}
            aria-label="Last name" 
            className="form-control"
            
            required
            placeholder="Birthday"

          />
        </div>

       
        <input type="submit"
          value="Upload" 
          className="btn btn-success"
        />
        
        {
           <input type="button"
           value="Clear"
           onClick={reset}
           className="btn btn-secondary"
         />
        }
       
        
      </form>
    </div>
  );
};

export default UsersForm;
