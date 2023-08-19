
import { GithubAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js'
import { auth } from '../services/firebase'
import { useNavigate } from 'react-router-dom'

export const useUser = () => {
  const navigate = useNavigate()

  const login = async () => {
    const provider = new GithubAuthProvider()

    await signInWithPopup(auth, provider)

    navigate('/')
  }


  const logout = async () => {
    await auth.signOut()

    navigate('/login')
  }

  return {
    login,
    logout
  }
}