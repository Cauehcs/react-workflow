import {
  signInWithPopup,
  AuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
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

export const SignOnGoogle = () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  SignOnPopup(provider);
};
