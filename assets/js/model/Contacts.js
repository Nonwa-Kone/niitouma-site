class Contacts {
  static async nouveauContact (data) {
    const result = await fetch(
      "http://localhost:3000/api/v1/contact/create",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    )
    const {message} = await result.json()
    return message
  }
}

export default Contacts