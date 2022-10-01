import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface PhoneInputGfgProps {
  phone: string,
  setPhone: (phone: string) => void
}

export default function PhoneInputGfg({ phone, setPhone }: PhoneInputGfgProps) {

  return (
    <PhoneInput
      country={'ua'}
      value={phone}
      onChange={setPhone}
      placeholder="Phone"
    />

  );
};