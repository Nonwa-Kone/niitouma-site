import { APP_API_ENDPOINT, APP_API_ROOT, CONFIG_POST } from "./constants/index.js"

window.addEventListener('DOMContentLoaded', (e)=> {
  const enregistrerUnEmail = () => {
    const formNewsletter = document.getElementById('newsletter')
    formNewsletter.addEventListener('submit', async(event)=> {
      event.preventDefault()
      const formData = new FormData(formNewsletter)
      const result = await fetch(
        `${APP_API_ROOT.PROD}/${APP_API_ENDPOINT.newsletter}/create`,{ 
          ...CONFIG_POST, 
          body: JSON.stringify({email: formData.get('email')})
        }
      )
      const {message} = await result.json()
      console.log(message);
      document.getElementById('reponse-serveur').innerHTML = `
        <div class="alert alert-dark mt-2">
          <strong>${message}</strong>
        </div>
      `;
    })
  }
  enregistrerUnEmail()
})