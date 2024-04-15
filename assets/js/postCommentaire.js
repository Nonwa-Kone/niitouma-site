window.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form")
  form.addEventListener("submit", async e => {
    e.preventDefault()

    const url = new URL(location.href)
    const id = url.searchParams.get("id_profil")

    const formData = new FormData(form)

    let nom = formData.get("username")
    let note = formData.get("note")
    let message = formData.get("message")

    let data = {
      nom: nom,
      note: note,
      message: message,
    }

    const result = await fetch(
      `https://comfortable-shawl-cow.cyclic.app/api/v1/post-comment/${id}`,
      {
        method: "PATCH",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    )

    const { msg } = await result.json()

    Swal.fire({
      icon: "success",
      title: msg,
      showConfirmButton: true,
    }).then(result => {
      if (result.isConfirmed) {
        window.location.href = ""
      }
    })
  })
})
