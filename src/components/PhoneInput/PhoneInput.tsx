import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface PhoneInputGfgProps {
  phone: string,
  name: string,
  setPhone: (phone: string) => void
  handleChange: (e: any) => void
}

export default function PhoneInputGfg(props: PhoneInputGfgProps) {

  return (
    <PhoneInput
      country={'ua'}
      value={props.phone}
      onChange={props.setPhone}
      {...props}
      placeholder="Phone"
    />
  );
};