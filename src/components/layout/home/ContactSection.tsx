import React from 'react'

const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // manage the form with objectfromdataentries
    const formData = new FormData(e.currentTarget)
    const objectFormData = Object.fromEntries(formData.entries())
    console.log(objectFormData)
    // send the data to the backend
    //axios.post('http://localhost:3001/api/contact', objectFormData) for example
    // objectFormData = {name:name, phone:phone, email:email, description:description}
}

export const ContactSection = () => {
  return (
    <section id='contact' className='homepage homepage__container'>
      <h1 className='homepage__title'>¿Necesitas una consultoria?</h1>
      <p className='homepage__smallText'>
        Llena el siguiente formulario y recibe una consultoria de calidad
      </p>
      <form onSubmit={handleOnSubmit} className='homepage__contact'>
        <label htmlFor='nombre'>
          Nombre
          <input required name='nombre' type='text' placeholder='Luis Diaz' />
        </label>
        <label htmlFor='telefono'>
          Telefono
          <input
            required
            name='telefono'
            type='number'
            placeholder='3202020020'
          />
        </label>
        <label htmlFor='correo'>
          Correo Electronico
          <input
            required
            name='correo'
            type='email'
            placeholder='example@gmail.com'
          />
        </label>
        <label htmlFor='descripcion'>
          Descripción del problema
          <textarea required name='descripcion' placeholder='Necesito...' />
        </label>
        <button type='submit'>Enviar</button>
      </form>
    </section>
  )
}
