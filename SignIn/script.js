import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebaseConfig'

function handleLogin(e) {
    const email = document.getElementById('inputEmail').value
    const password = document.getElementById('inputPassword').value
    
    e.preventDefault(e)
    signInWithEmailAndPassword(auth, email, password)
        
}

const loginForm = document.getElementById('loginButton')
loginForm.addEventListener('submit', handleLogin)