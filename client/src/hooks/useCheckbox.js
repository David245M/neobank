import { useState } from 'react'

const useCheckbox = (defaultChecked, handler = () => {}) => {
  const [checked, setChecked] = useState(defaultChecked)
  const reset = () => setChecked('')
  
  return [
    {
      checked,
      defaultChecked,
      onChange: event => {
        setChecked(event.target.checked);
        handler(event.target.checked)
      }
    },
    { checked, setChecked, reset }
  ]
}

export default useCheckbox