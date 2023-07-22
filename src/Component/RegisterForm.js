import React, {useState} from 'react'
import './RegisterForm.css'

const RegisterForm = () => {
  const [user, setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    city:"",
    zip:"",
  });
  
  let name, value;
  const getUserData = (event) => {
    name=event.target.name;
    value=event.target.value;
    
    setUser({ ...user, [name]:value});
  };

  return (
    <div className='contan '>
      <form className="row ">
  <div className="col-md-5 m-3 mx-4">
    <label htmlFor="validationDefault01" className="form-label p-3">First name</label>
    <input type="text" className="form-control" id="validationDefault01" name="firstName" value={user.firstName} onChange={getUserData} autoComplete='off' required/>
  </div>
  <div className="col-md-5 m-3">
    <label htmlFor="validationDefault02" className="form-label p-3">Last name</label>
    <input type="text" className="form-control" id="validationDefault02" name="lastName" value={user.lastName} onChange={getUserData} autoComplete='off'  required/>
  </div>
  <div className="col-md-5 m-3 mx-4">
    <label htmlFor="validationDefaultUsername" className="form-label p-3">Email</label>
    <div className="input-group">
      <input type="email" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" name='email' value={user.email} onChange={getUserData} autoComplete='off'required/>
    </div>
  </div>
  <div className="col-md-5 m-3 mx-4">
    <label htmlFor="validationDefault03" className="form-label p-3">City</label>
    <input type="text" className="form-control" id="validationDefault03" name='city' value={user.city} onChange={getUserData} autoComplete='off'  required/>
  </div>
  {/* <div className="col-md-3">
    <label htmlFor="validationDefault04" className="form-label">State</label>
    <select className="form-select" id="validationDefault04" >
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div> */}
  <div className="col-md-5 m-3 mx-4">
    <label htmlFor="validationDefault05" className="form-label p-3">Zip</label>
    <input type="text" className="form-control" id="validationDefault05" name='zip' value={user.zip} onChange={getUserData} autoComplete='off'  required/>
  </div>
 
  <div className="col-12 m-5">
    <button className="btn btn-dark w-25 h-100 rounded-pill" type="submit">Submit </button>
  </div>
</form>
    </div>
  )
}

export default RegisterForm
