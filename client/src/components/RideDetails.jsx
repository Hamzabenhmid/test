import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function RideDetails() {
  const [departure, setDeparture] = useState('')
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState('')
  const [availableSeats, setAvailableSeats] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('driverDeparture', departure)
    localStorage.setItem('driverDestination', destination)
    localStorage.setItem('driverDate', date)
    localStorage.setItem('driverAvailableSeats', availableSeats)
    navigate('/rides')
  }

  return (
    <div className="form-container">
      <h2>Ride Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Departure:
          <input type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} required />
        </label>
        <label>
          Destination:
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} required />
        </label>
        <label>
          Date:
          <input type="text" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>
          Available Seats:
          <input type="text" value={availableSeats} onChange={(e) => setAvailableSeats(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  )
}

export default RideDetails
