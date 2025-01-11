import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"

const firebaseConfig = {
    apiKey: window.env.FIREBASE_API_KEY,
    authDomain: window.env.FIREBASE_AUTH_DOMAIN,
    projectId: window.env.FIREBASE_PROJECT_ID,
    storageBucket: window.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: window.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: window.env.FIREBASE_APP_ID
  }

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

async function handleSignUp(event) {
    event.preventDefault()

    const email = document.getElementById('inputEmail').value
    const password = document.getElementById('inputPassword').value

    if (!email || !password) {
        alert("Por favor, preencha todos os campos.")
        return
    }

    try {
        await createUserWithEmailAndPassword(auth, email, password)
        alert("Usuário criado com sucesso!")
    } 
    catch (error) {
        alert(`Erro: ${error.message}`)
    }
}

document.getElementById('loginButton').addEventListener('click', handleSignUp)
