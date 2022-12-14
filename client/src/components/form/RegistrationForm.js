import React, { useState } from "react";

import styles from "./RegistrationForm.module.css";
import Button from "./Button";
import axios from "axios";

function RegistrationForm() {
  const [addFormData, setAddFormData] = useState({
    name: "",
    email: "",
    phoneNumber: 0,
    city: "",
    street: "",
    aptNumber: "",
    zipCode: "",
    lead_id: "",
  });

  const addFormHandler = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    if (fieldName === "phoneNumber") {
      let x = parseInt(event.target.value);
      console.log(typeof x);
      console.log(x);
      newFormData[fieldName] = x;
    } else {
      newFormData[fieldName] = fieldValue;
    }
    setAddFormData(newFormData);
  };

  async function onSubmit(e) {
    e.preventDefault();
    console.log("SUBMITTED!");
    console.log(addFormData);
    console.log("Sending to MongoDB");
    const registered = {
      fullName: addFormData.name,
      email: addFormData.email,
      phone: addFormData.phoneNumber,
      city: addFormData.city,
      street: addFormData.street,
      apt: addFormData.aptNumber,
      zipcode: addFormData.zipCode,
      lead_id: "NA"
    };
    try {
      await axios.post("/signup", registered).then((response) => {
        console.log(response.data);
        clear();
      });
    } catch (error) {
      console.log(error);
    }
  }

  function clear() {
    setAddFormData({
      name: "",
      email: "",
      phoneNumber: 0,
      city: "",
      street: "",
      aptNumber: "",
      zipCode: "",
      lead_id: "",
    });
  }

  return (
    <div className={styles.justifyContentAround}>
      <form className={styles.formStyle} onSubmit={(e) => onSubmit(e)}>
        <h3>Basic Info</h3>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            placeholder="Full name"
            className={styles.formControl}
            name="name"
            value={addFormData.name}
            onChange={addFormHandler}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            className={styles.formControl}
            name="email"
            value={addFormData.email}
            onChange={addFormHandler}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber">Phone </label>
          <input
            type="text"
            placeholder="Phone number"
            className={styles.formControl}
            name="phoneNumber"
            value={addFormData.phoneNumber === 0 ? "" : addFormData.phoneNumber}
            onChange={addFormHandler}
            required
          />
        </div>
        <h3>Address</h3>
        <div className={styles.formGroup}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            placeholder="City"
            className={styles.formControl}
            name="city"
            value={addFormData.city}
            onChange={addFormHandler}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            placeholder="Street"
            className={styles.formControl}
            name="street"
            value={addFormData.street}
            onChange={addFormHandler}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="aptNumber">APT</label>
          <input
            type="text"
            placeholder="Apartment number"
            className={styles.formControl}
            name="aptNumber"
            value={addFormData.aptNumber}
            onChange={addFormHandler}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="zipCode">Zip code</label>
          <input
            type="number"
            placeholder="Zip code"
            className={styles.formControl}
            name="zipCode"
            value={addFormData.zipCode}
            onChange={addFormHandler}
            required
          />
        </div>
        <div>
          <Button type="submit">Register</Button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
