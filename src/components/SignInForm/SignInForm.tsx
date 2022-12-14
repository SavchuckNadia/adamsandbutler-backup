import { useFormik } from "formik";
import * as yup from "yup";

import styles from "./SignInForm.module.scss"
import { useUserAuth } from "../../context/auth/UserAuthContext";


const initialValues = {
    email: "",
    password: ""
};

const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm


const userSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("This field is required."),
    password: yup.string()
        .matches(passwordRegExp, "Password is not valid")
        .required("This field is required.")
});

const SignInForm = () => {
    const { logIn } = useUserAuth();

    const submitHandler = async (values: any) => {
        await logIn(values.email, values.password);
        resetForm({ values: initialValues })
    }

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
        values,
        errors,
        resetForm
    } = useFormik({
        initialValues: initialValues,
        validationSchema: userSchema,
        onSubmit: (values) => {
            console.log(JSON.stringify(values));
            // signIn(values.email, values.password)
            submitHandler(values)
            resetForm({ values: initialValues })
        },
    });


    return (
        <div className={styles.wrap_form}>
            <form className={styles.user_form} onSubmit={handleSubmit}>

                <div className={errors.email && touched.email ? `${styles.form_item} ${styles.invalid}` : `${styles.form_item}`}>

                    <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        className={errors.email ? `${styles.invalid}` : ''}
                    />
                    {errors.email
                        ? <div className={styles.warning}>{errors.email}</div>
                        : null}

                </div>


                <div className={errors.password && touched.password ? `${styles.form_item} ${styles.invalid}` : `${styles.form_item}`}>
                    <input type="password" placeholder='Password' name="password" onChange={handleChange}
                        value={values.password}
                        onBlur={handleBlur} />

                    {touched.password && errors.password
                        ? <div className={styles.warning}>{errors.password}</div>
                        : null}
                </div>

                <input
                    type="submit"
                    id="submit_button"
                    className={styles.submit_btn}
                    value="Submit"
                />
            </form>
        </div>
    )
}

export default SignInForm