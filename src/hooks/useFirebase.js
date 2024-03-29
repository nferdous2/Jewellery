import { getAuth, signOut,  signInWithPopup,onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        console.log('Signing in with Google...');
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                window.alert('Successfully loggedin!');

                window.location.href = 'https://jewellery1-5636e.web.app/'
            })
            .catch(error => {
                console.log(error);
            });
    }
    //Registration part handle
    const handleRegister = (email, password, name, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name);
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => { }).catch((error) => {
                    });
                    window.alert('Registration successful!');

                    window.location.href = 'https://jewellery1-5636e.web.app/'
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            })
    }
    //log in handle
    const loginHandle = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                window.alert('Login successful!');

                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        signOut(auth)
          .then(() => {
            // Reload the window after successful logout
            window.location.reload();
            window.location.href = 'https://jewellery1-5636e.web.app/'

          })
          .catch(error => {
            // Handle any errors during logout
            console.error('Error logging out:', error);
          });
      }
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://jewellery-server.onrender.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        handleRegister,
        logOut,
        error,
        loginHandle,
        signInWithGoogle,

    }
}

export default useFirebase;