import { auth, auth_ } from '../firebaseConfig';

export const authGoogleService = async () => {
  const gAuth = await auth_.signInWithPopup(new auth.GoogleAuthProvider());
  const { displayName, email, photoURL, uid } = gAuth.user;
  const user = {
    displayName,
    email,
    photoURL,
    uid
  };
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', gAuth.credential.accessToken);
  return { user, token: gAuth.credential.accessToken };
};

export const correoClaveService = async (user, pass) => {
  await auth_.signInWithEmailAndPassword(user, pass).catch((error) => {
    return error;
  });
};
