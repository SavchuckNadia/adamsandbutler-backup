import { locationData } from "../../data/select-location"
import AlertDialogSlide from "../Modal/Modal"
import styles from "./SignUp.module.scss"
import { useFormik } from "formik";
import * as yup from "yup";


const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    receiveEmail: false,
    acceptTerms: false,
};


const userSchema = yup.object().shape({
    firstName: yup.string().required("This field is required."),
    lastName: yup.string().required("This field is required."),
    email: yup.string().email("Invalid email").required("This field is required."),
    location: yup.string().required("This field is required."),
    receiveEmail: yup
        .bool()
        .oneOf([true], 'This field is required.'),
    acceptTerms: yup
        .bool()
        .oneOf([true], 'This field is required.'),
});

const SignUp = () => {

    const signUpText = 'Get the latest from Adams & Butler'

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
        values,
        errors,
    } = useFormik({
        initialValues: initialValues,
        validationSchema: userSchema,
        onSubmit: (values) => {
            console.log(JSON.stringify(values));
        },
    });

    return (
        <section className={styles.signup_band}>
            <div className={styles.wrap_signup_band_content}>
                <div className={styles.wrap_text}>
                    <div className={styles.signup_band_text}>{signUpText}:
                        <AlertDialogSlide btnTitle={" Sign up to our Newsletter"} modalTitle={signUpText}>

                            <form className={styles.sign_up_form} onSubmit={handleSubmit}>

                                <div className={errors.firstName && touched.firstName ? `${styles.form_item} ${styles.invalid}` : `${styles.form_item}`}>
                                    <input type="text" placeholder='First name' name="firstName" onChange={handleChange}
                                        onBlur={handleBlur} />

                                    {touched.firstName && errors.firstName
                                        ? <div className={styles.warning}>{errors.firstName}</div>
                                        : null}
                                </div>



                                <div className={errors.lastName && touched.lastName ? `${styles.form_item} ${styles.invalid}` : `${styles.form_item}`}>
                                    <input type="text" placeholder='Last Name' name="lastName" onChange={handleChange}
                                        onBlur={handleBlur} />

                                    {touched.lastName && errors.lastName
                                        ? <div className={styles.warning}>{errors.lastName}</div>
                                        : null}
                                </div>


                                <div className={errors.location && touched.location ? `${styles.form_item} ${styles.invalid}` : `${styles.form_item}`}>

                                    <select name="location" onChange={handleChange}>
                                        <option value="Location">Location</option>
                                        {locationData.map(location => (
                                            <option key={location.id}>{location.value}</option>
                                        ))}
                                    </select>

                                    {touched.location && errors.location
                                        ? <div className={styles.warning}>{errors.location}</div>
                                        : null}
                                </div>


                                <div className={errors.email && touched.email ? `${styles.form_item} ${styles.invalid}` : `${styles.form_item}`}>
                                    <input type="email" name="email" placeholder='Email' onChange={handleChange}
                                        onBlur={handleBlur} />

                                    {touched.email && errors.email
                                        ? <div className={styles.warning}>{errors.email}</div>
                                        : null}
                                </div>

                                <div className={`${styles.input_container}`}>
                                    <input type="checkbox" name="receiveEmail" id='receiveEmail' onChange={handleChange} />
                                    <label htmlFor='receiveEmail'>I would like to sign up to receive email updates from Adams &amp; Butler. See our <a href="https://adamsandbutler.com/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a>
                                    </label>
                                </div>
                                {errors.receiveEmail
                                    ? <div className={styles.warning}>{errors.receiveEmail}</div>
                                    : null
                                }

                                <div className={errors.acceptTerms && touched.acceptTerms ? `${styles.input_container} ${styles.invalid}` : `${styles.input_container}`}>
                                    <input type="checkbox" name="acceptTerms" id='acceptTerms' onChange={handleChange} />
                                    <label htmlFor="acceptTerms">I can confirm I have read and accepted the <a href="https://adamsandbutler.com/terms-conditions/" target="_blank" rel="noreferrer">Terms and Conditions</a>
                                    </label>
                                </div>
                                {errors.acceptTerms
                                    ? <div className={styles.warning}>{errors.acceptTerms}</div>
                                    : null
                                }
                                <button type='submit'>Join</button>
                            </form>
                        </AlertDialogSlide>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp