import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '', 
    })
    const [data, setData] = useState({})


    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    
    function handleSubmit (e) {
        e.preventDefault()
        setData(formData)
        console.log('details',formData)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='firstName'
                placeholder='your first name'
                onChange={handleChange}
                value={formData.firstName}
             />
            <input
                type='text'
                name='lastName'
                placeholder='your lastName'
                onChange={handleChange}
                value={formData.lastName}
             />
            <input
                type='text'
                name='email'
                placeholder='your email'
                onChange={handleChange}
                value={formData.email}
             />
             <button type='submit'>Submit</button>
            
        </form>
        <h4>{data.firstName} {data.email} {data.lastName}</h4>
    </div>
  )
}

export default Form