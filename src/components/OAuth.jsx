import { useLocation, useNavigate } from "react-router-dom"
import { getAuth, signInWithCredential, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import googleIcon from '../assets/svg/googleIcon.svg'

const OAuth = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const onGooleClick = async () =>{
            try {
                const auth = getAuth()
                const provider = new GoogleAuthProvider()
                const result = await signInWithPopup(auth, provider)
                const user = result.user
                
                // Check for users
                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef)

                // If user, doesn't exist, create one
                if(!docSnap.exists()){
                    await setDoc(doc(db, 'users', user.uid),{
                        name: user.displayName,
                        email: user.email,
                        timestamp: serverTimestamp()
                    })
                }
                navigate('/') 
            } catch (error) {
                toast.error('Could not authorize with Google')
            }
    }
    return (
        <>
        <div className="socialLogin">
            <p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'} </p>
            <span>
            <button className="socialIconDiv" onClick={onGooleClick}>
                <img className="socialIconImg" src={googleIcon} alt="google Icon" />
        </button>  
            </span>
        </div>   
               
        </>
    )
}

export default OAuth
