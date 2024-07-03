import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DriverInfo() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('driverName', name)
    localStorage.setItem('driverPhone', phone)
    localStorage.setItem('driverEmail', email)
    localStorage.setItem('driverPassword', password)
    navigate('/ride-details')
  }

  return (
    <div className="form-container">
      <h2>Driver Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Phone Number:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Next</button>
      </form>
      
    </div>
  )
}

export default DriverInfo
