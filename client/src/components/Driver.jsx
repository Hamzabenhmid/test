import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from './Title'

function Driver() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [departure, setdeparture] = useState('')
  const [destination, setdestination] = useState('')
  const [ date, setdate] = useState('')
  const [availableSeats, setavailableSeats] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('driverName', name)
    localStorage.setItem('driverPhone', phone)
    localStorage.setItem('driverdeparture', departure)
    localStorage.setItem('driverdestination', destination)
    localStorage.setItem('driverdate', date)
    localStorage.setItem('driveravailableSeats', availableSeats)
    navigate('/rides')
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
          departure:
          <input type="text" value={departure} onChange={(e) => setdeparture(e.target.value)} required />
        </label>
        <label>
          destination:
          <input type="text" value={destination} onChange={(e) => setdestination(e.target.value)} required />
        </label>
        <label>
          date:
          <input type="text" value={date} onChange={(e) => setdate(e.target.value)} required />
        </label> <label>
          availableSeats:
          <input type="text" value={availableSeats} onChange={(e) => setavailableSeats(e.target.value)} required />
        </label>
        <button type="submit">Next</button>
      </form>
      
    </div>
  )
}

export default Driver
