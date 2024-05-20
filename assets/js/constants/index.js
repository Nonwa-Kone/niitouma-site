const APP_API_ROOT = {
  DEV: "http://localhost:3000/api/v1",
  PROD: "https://comfortable-shawl-cow.cyclic.app/api/v1"
}

const APP_API_ENDPOINT = {
  newsletter: "newsletter",
  reservation: "reservation",
  adherent: "adherent",
  contact: "contact"
}

const CONFIG_POST = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

export { APP_API_ENDPOINT, APP_API_ROOT, CONFIG_POST }

