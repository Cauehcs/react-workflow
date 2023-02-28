import { signInWithPopup, AuthProvider } from "firebase/auth";
import { auth } from "./firebase";

export const SignOnPopup = (provider: AuthProvider) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};
