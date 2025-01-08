import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

fetch('./env.json')
    .then((response) => response.json())
    .then((env) => {
        const firebaseConfig = {
            apiKey: env.API_KEY,
            authDomain: env.AUTH_DOMAIN,
            projectId: env.PROJECT_ID,
            storageBucket: env.STORAGE_BUCKET,
            messagingSenderId: env.MESSAGING_SENDER_ID,
            appId: env.APP_ID,
        }

        const app = initializeApp(firebaseConfig)
        const auth = getAuth(app)

        console.log('Firebase iniciado com sucesso!')
    })
    .catch((error) => console.log('Erro ao inicial o env: ', error))