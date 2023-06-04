import React from 'react'
import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client/react'

const CREATE_CONSULTANCY = gql`
  mutation CreateConsultancy($createConsultancyInput: CreateConsultancyInput!) {
    createConsultancy(createConsultancyInput: $createConsultancyInput)
  }
`

export const ContactSection = () => {
  const [createConsultancy] = useMutation(CREATE_CONSULTANCY)
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // manage the form with objectfromdataentries
    const formData = new FormData(e.currentTarget)
    const objectFormData = Object.fromEntries(formData.entries())
    console.log(objectFormData)
    createConsultancy({ variables: { createConsultancyInput: objectFormData } })
  }

  return (
    <section id='contact' className='homepage homepage__container'>
      <h1 className='homepage__title'>¿Necesitas una consultoria?</h1>
      <p className='homepage__smallText'>
        Llena el siguiente formulario y recibe una consultoria de calidad
      </p>
      <form onSubmit={handleOnSubmit} className='homepage__contact'>
        <label htmlFor='fullName'>
          Nombre
          <input required name='fullName' type='text' placeholder='Luis Diaz' />
        </label>
        <label htmlFor='phoneNumber'>
          Telefono
          <input
            required
            name='phoneNumber'
            type='text'
            placeholder='3202020020'
          />
        </label>
        <label htmlFor='email'>
          Correo Electronico
          <input
            required
            name='email'
            type='email'
            placeholder='example@gmail.com'
          />
        </label>
        <label htmlFor='description'>
          Descripción del problema
          <textarea required name='description' placeholder='Necesito...' />
        </label>
        <button type='submit'>Enviar</button>
      </form>
    </section>
  )
}
