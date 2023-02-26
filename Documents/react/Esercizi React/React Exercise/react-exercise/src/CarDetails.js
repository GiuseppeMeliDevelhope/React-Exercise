import { useRef, useEffect } from 'react'

export function CarDetails({ initialData }) {
  const formRef = useRef(null)

  useEffect(() => {
   
    if (formRef.current) {
      formRef.current.reset()
    }
  }, [initialData])

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data)
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="model">Model:</label>
        <input type="text" name="model" defaultValue={initialData.model} />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input type="number" name="year" defaultValue={initialData.year} />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input type="text" name="color" defaultValue={initialData.color} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
