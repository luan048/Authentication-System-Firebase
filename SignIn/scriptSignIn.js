import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js"
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"

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

async function handleSignIn(e) {
    e.preventDefault();

    const email = document.getElementById('inputEmail').value
    const password = document.getElementById('inputPassword').value

    if(!email || !password) {
        alert('Todos os campos devem ser preenchidos!')
        return
    }

    try {
        await signInWithEmailAndPassword(auth, email, password)
        alert('Usuário Logado com sucesso!')
        window.location.href = '../HomePage/indexHome.html'
    }
    catch(error) {
        alert(`Erro ao fazer login: ${error.message}`)
    }
}

document.getElementById('loginButton').addEventListener('click', handleSignIn)