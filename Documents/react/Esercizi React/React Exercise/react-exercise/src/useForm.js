import { useState } from "react";

const useForm = (initialState = { username: "", password: "" }) => {
  const [state, setState] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  return [state, handleInputChange];
}

export default useForm;
