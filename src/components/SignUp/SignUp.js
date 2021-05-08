import React, { useState } from 'react';
export default function SignUp(props) {
  const [signUpInputs, setSignUpInputs] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [storeData, setStoreData] = useState([]);
  const { name, email, phone, address } = signUpInputs;

  const onHandleInput = event => {
    const { name, value } = event.target;
    setSignUpInputs(inputs => ({ ...inputs, [name]: value }));
  };
  const onHandleSubmit = event => {
    event.preventDefault();
    setStoreData(data => [...data, signUpInputs]);
    onResetValues();
  };
  const onResetValues = () => {
    const signUpInputs = {
      name: '',
      email: '',
      phone: '',
      address: '',
    };
    setSignUpInputs(signUpInputs);
  };
  const removeData = event => {
    event.preventDefault();
    setStoreData([]);
  };
  return (
    <div className="container center-load-text">
      <div className="head-text">Enter Your Details</div>
      <form onSubmit={onHandleSubmit} className="form-bg">
        <input
          type="text"
          value={name}
          className="form-control"
          placeholder="Name"
          name="name"
          onChange={onHandleInput}
          required
        />
        <input
          type="text"
          value={email}
          className="form-control"
          placeholder="Email"
          name="email"
          onChange={onHandleInput}
          required
        />
        <input
          type="text"
          value={phone}
          className="form-control"
          placeholder="Phone"
          name="phone"
          onChange={onHandleInput}
          required
        />
        <input
          type="text"
          value={address}
          className="form-control"
          placeholder="Address"
          name="address"
          onChange={onHandleInput}
          required
        />

        <button className="submit-btn" type="submit">
          Submit
        </button>
        <button className="remove-btn" type="reset" onClick={removeData}>
          Remove All Data
        </button>
      </form>
      <div className="card-main">
        {storeData &&
          storeData.length > 0 &&
          storeData.map((item, i) => {
            if (!item?.name && !item?.email && !item?.phone && !item?.address) {
              return null;
            } else {
              return (
                <div className="card" key={i}>
                  <div className="record">Record : {i + 1}</div>
                  <div>
                    <div className="data">
                      <span className="labels">Name:</span> {item.name}
                    </div>
                    <div className="data">
                      <span className="labels">Email:</span> {item.email}
                    </div>
                    <div className="data">
                      <span className="labels">Phone:</span> {item.phone}
                    </div>
                    <div className="data">
                      <span className="labels">Address:</span> {item.address}
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
