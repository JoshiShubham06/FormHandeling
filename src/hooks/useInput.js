import { useState } from "react";

export function useInput(defaultValue, validationFn){
      const [data, setData] = useState(defaultValue);
      const [didEdit, setDidEdit] = useState(false);

      const valueIsValid = validationFn(data);
      function handleEventBlur() {
        setDidEdit(true);
      }
      function handleInputChange(event) {
        setData(event.target.value);
        setDidEdit(false);
      }
      return {
        value:data,
        handleInputChange,
        handleEventBlur,
        hasError: didEdit && !valueIsValid
      }
}