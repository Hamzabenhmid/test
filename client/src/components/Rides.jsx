import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Rides() {
  const [rides, setRides] = useState([])
  const [filteredRides, setFilteredRides] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const driverName = localStorage.getItem('driverName')
    const driverPhone = localStorage.getItem('driverPhone')
    const driverDeparture = localStorage.getItem('driverDeparture')
    const driverDestination = localStorage.getItem('driverDestination')
    const driverDate = localStorage.getItem('driverDate')
    const driverAvailableSeats = localStorage.getItem('driverAvailableSeats')

    const allRides = driverName && driverPhone && driverDeparture && driverDestination && driverDate && driverAvailableSeats 
      ? [{
          driverName,
          driverPhone,
          driverDeparture,
          driverDestination,
          driverDate,
          driverAvailableSeats
        }]
      : []

    setRides(allRides)

    const userLocation = localStorage.getItem('userLocation')
    if (userLocation) {
      const filtered = allRides.filter(ride => ride.driverDeparture === userLocation)
      setFilteredRides(filtered)
    } else {
      setFilteredRides(allRides)
    }
  }, [])

  return (
    <div className="form-container">
      <h2>Available Rides</h2>
      {filteredRides.length > 0 ? (
        filteredRides.map((ride, index) => (
          <div key={index}>
            <h3>Driver Name: {ride.driverName}</h3>
            <h3>Driver Phone: {ride.driverPhone}</h3>
            <h3>Departure: {ride.driverDeparture}</h3>
            <h3>Destination: {ride.driverDestination}</h3>
            <h3>Date: {ride.driverDate}</h3>
            <h3>Available Seats: {ride.driverAvailableSeats}</h3>
          </div>
        ))
      ) : (
        <p>No available rides.</p>
      )}
    </div>
  )
}

export default Rides
