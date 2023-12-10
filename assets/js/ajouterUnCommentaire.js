window.addEventListener("DOMContentLoaded", function () {
  const form = this.document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const url = new URL(location.href);
    const id = url.searchParams.get("id_profil");

    const formData = new FormData(form);

    let username = formData.get("username");
    let note = formData.get("note");
    let msg = formData.get("message");

    let data = {
      nom: username,
      note: note,
      message: msg,
    };

    const response = await fetch(
      `http://localhost:3000/api/v1/post-comment/${id}`,
      {
        method: "post",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    const res = response.json();

    console.log(res);
  });
});
