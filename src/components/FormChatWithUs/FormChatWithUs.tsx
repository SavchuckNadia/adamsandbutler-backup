import { useState } from 'react';
import PhoneInputGfg from '../PhoneInput/PhoneInput'
import { useFormik } from "formik";
import * as yup from "yup";

import styles from "./FormChatWithUs.module.scss"


const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    receiveInspiration: false
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
    firstName: yup.string().required("This field is required."),
    lastName: yup.string().required("This field is required."),
    email: yup.string().email("Invalid email").required("This field is required."),
    location: yup.string().required("This field is required."),
    phone: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("This field is required."),
    receiveInspiration: yup
        .bool()
});


function FormChatWithUs() {
    const [phone, setPhone] = useState("")

    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        resetForm
    } = useFormik({
        initialValues: initialValues,
        validationSchema: userSchema,
        onSubmit: (values) => {
            console.log(JSON.stringify(values));
            setPhone('')
            resetForm({ values: initialValues })
        },
    });

    const getPhoneValue = (phone: string) => {
        setPhone(phone)
        values.phone = phone
    }

 

    return (
        <>
            <section className={styles.contact_details}>
                <a href="tel:1-800-894-5712">US Toll Free: 1-800-894-5712</a>
                <a href="tel:1-800-764-042">Australia Toll Free:1-800-764-042</a>
                <a href="tel:+353-1-288-9355">Ireland: +353-1-288-9355</a>
            </section>
            <p className="subtitle">
                Or fill in the form below and we'll be in touch
            </p>
            <div className={styles.wrap_form}>
                <form className={styles.user_form} onSubmit={handleSubmit}>
                    <div>
                        <input
                            name="firstName"
                            id="firstName"
                            type="text"
                            tabIndex={1}
                            placeholder="First Name"
                            onChange={handleChange}
                            value={values.firstName}
                            className={errors.firstName ? `${styles.invalid}` : ''}
                        />

                        {errors.firstName
                            ? <div className={styles.warning}>{errors.firstName}</div>
                            : null}
                    </div>
                    <div>
                        <input
                            name="lastName"
                            id="lastName"
                            type="text"
                            tabIndex={2}
                            placeholder="Last Name"
                            value={values.lastName}
                            className={errors.lastName ? `${styles.invalid}` : ''}
                            onChange={handleChange}
                        />
                        {errors.lastName
                            ? <div className={styles.warning}>{errors.lastName}</div>
                            : null}

                    </div>

                    <input
                        name="email"
                        id="email"
                        type="email"
                        tabIndex={3}
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        className={errors.email ? `${styles.invalid}` : ''}
                    />
                    {errors.email
                        ? <div className={styles.warning}>{errors.email}</div>
                        : null}

                    <PhoneInputGfg
                        phone={phone}
                        handleChange={handleChange}
                        name="phone"
                        setPhone={getPhoneValue}
                    />
                    {errors.phone
                        ? <div className={styles.warning}>{errors.phone}</div>
                        : null}

                    <textarea
                        name="location"
                        id="location"
                        tabIndex={4}
                        placeholder="Where would you like to go?"
                        rows={10}
                        cols={50}
                        value={values.location}
                        onChange={handleChange}
                    />
                    {errors.location
                        ? <div className={styles.warning}>{errors.location}</div>
                        : null}

                    <div className={styles.input_container}>
                        <input
                            name="receiveInspiration"
                            id="receiveInspiration"
                            type="checkbox"
                            checked={values.receiveInspiration}
                            tabIndex={5}
                            onChange={handleChange}

                        />
                        <label htmlFor="receiveInspiration">
                            Sign up to receive travel inspiration, exclusive offers &amp;
                            our latest news.
                        </label>
                    </div>
                    <input
                        type="submit"
                        id="submit_button"
                        className={styles.submit_btn}
                        value="Submit"
                        tabIndex={6}
                    />
                </form>
            </div>
        </>
    )
}

export default FormChatWithUs