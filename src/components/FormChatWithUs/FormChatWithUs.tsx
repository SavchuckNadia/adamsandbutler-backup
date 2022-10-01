import React, { useState } from 'react'
import PhoneInputGfg from '../PhoneInput/PhoneInput'


function FormChatWithUs() {
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [place, setPlace] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [signUp, setSignUp] = useState(false)

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const newUser = {
            firstName,
            lastName,
            phone,
            email,
            signUp
        }
        console.log(newUser);
        setPhone('')
        setEmail('')
        setPlace('')
        setFirstName('')
        setLastName('')
        setSignUp(false)
    }

    const getPhoneValue = (phone: string) => {
        setPhone(phone)
    }


    return (
        <div className="wrap-form">
            <form className="user-form" onSubmit={handleSubmit}>
                <input
                    name="firstName"
                    id="firstName"
                    type="text"
                    value={firstName}
                    tabIndex={1}
                    placeholder="First Name"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    name="lastName"
                    id="lastName"
                    type="text"
                    value={lastName}
                    tabIndex={2}
                    placeholder="Last Name"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    name="email"
                    id="email"
                    type="email"
                    value={email}
                    tabIndex={3}
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <PhoneInputGfg phone={phone} setPhone={getPhoneValue} />
                <textarea
                    name="place"
                    id="place"
                    value={place}
                    tabIndex={4}
                    placeholder="Where would you like to go?"
                    rows={10}
                    cols={50}
                    onChange={(e) => setPlace(e.target.value)}
                />
                <div className="input_container">
                    <input
                        name="signUp"
                        id="signUpGetInspiration"
                        type="checkbox"
                        value="1"
                        tabIndex={5}
                        checked={signUp}
                        onChange={() => setSignUp(prevState => !prevState)}
                    />
                    <label htmlFor="signUpGetInspiration">
                        Sign up to receive travel inspiration, exclusive offers &amp;
                        our latest news.
                    </label>
                </div>
                <input
                    type="submit"
                    id="submit_button"
                    className="submit-btn"
                    value="Submit"
                    tabIndex={6}
                />
            </form>
        </div>
    )
}

export default FormChatWithUs