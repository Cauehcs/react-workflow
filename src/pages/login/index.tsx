import { GoogleAuthProvider } from "firebase/auth";
import { Divider } from "../../components/divider/divider";
import { SignOnPopup } from "../../services/firebase/auth";
import { auth } from "../../services/firebase/firebase";

export function Login() {
  return (
    <div>
      <h1>Iniciar sessão</h1>
      <Divider />
      <button
        onClick={() => {
          const provider = new GoogleAuthProvider();
          provider.setCustomParameters({ prompt: "select_account" });
          SignOnPopup(provider);
        }}
      />
    </div>
  );
}
