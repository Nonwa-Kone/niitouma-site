class Reservation {
  static async nouveauReservation(data){
    const result = await fetch('http://localhost:3000/api/v1/reservation', 
      { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(data) 
      }
    )
    const {message} = await result.json()
    return message
  }
}

export default Reservation