import useForm from "./useForm";

export function Form() {
  const [formState, handleInputChange] = useForm()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formState.username}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}
