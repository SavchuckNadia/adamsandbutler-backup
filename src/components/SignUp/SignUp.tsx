import styles from "./SignUp.module.scss"

const SignUp = () => {
    return (
        <section className={styles.signup_band}>
            <div className={styles.wrap_signup_band_content}>
                <div className={styles.wrap_text}>
                    <p className={styles.signup_band_text}>Get the latest from Adams & Butler:
                        <span> Sign up to our Newsletter</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SignUp