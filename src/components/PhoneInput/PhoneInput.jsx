import { useEffect, useState } from "react";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
  
export default function PhoneInputGfg (props) {
const [phone, setPhone] = useState("")

useEffect(() => {
console.log(phone);
}, [phone])

    return (
      <div>
        <PhoneInput
          country={'ua'}
          value={phone}
          onChange={(phone) => setPhone( phone )}
          placeholder="Phone"
        />
      </div>
    );
};