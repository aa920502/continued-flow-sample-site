import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./RegistrationForm.module.css";
import Button from "./Button";
import axios from "axios";

function RegistrationFormWithContinuedFlow() {
  const [addFormData, setAddFormData] = useState({
    city: "",
    street: "",
    aptNumber: "",
    zipCode: "",
    lead_id: "",
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const fb_lead_id = searchParams.get("fbld_id");

  useEffect(() => {
    var preFillLeadInfo = async function preFillLeadInfo() {
      const lead = { lead_id: parseInt(fb_lead_id) };
      try {
        await axios.post("/lead_retrieval", { lead }).then((response) => {
          console.log(
            "Receiving lead info from backend and setting up form data"
          );
          console.log("reading lead retrieval info: " + response.data);
          for (const element of response.data) {
            switch (element.name) {
              case "full_name":
                setName(element.values[0]);
                break;
              case "email":
                setEmail(element.values[0]);
                break;
              case "phone_number":
                setPhoneNumber(parseInt(element.values[0].substr(1)));
                break;
              default:
                break;
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    preFillLeadInfo();
  }, [searchParams]);

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
    console.log("Sending to MongoDB");
    const registered = {
      fullName: name,
      email: email,
      phone: phoneNumber,
      city: addFormData.city,
      street: addFormData.street,
      apt: addFormData.aptNumber,
      zipcode: addFormData.zipCode,
      lead_id: fb_lead_id,
    };
    console.log("registered:");
    console.log(registered);
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
      city: "",
      street: "",
      aptNumber: "",
      zipCode: "",
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
            value={name}
            required
            readOnly="readonly"
            disabled="disabled"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            className={styles.formControl}
            name="email"
            value={email}
            required
            readOnly="readonly"
            disabled="disabled"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber">Phone </label>
          <input
            type="text"
            placeholder="Phone number"
            className={styles.formControl}
            name="phoneNumber"
            value={phoneNumber}
            required
            readOnly="readonly"
            disabled="disabled"
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

export default RegistrationFormWithContinuedFlow;
