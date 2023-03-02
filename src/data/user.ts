import { DataSnapshot } from "firebase/database";
import { getRealTime, setRealtTime } from "../services/firebase/db";
import { auth } from "../services/firebase/firebase";
import { User } from "./../classes/user";

let currentUser = new User(
  "Nome do usuário",
  "E-mail do usuário",
  "https://firebasestorage.googleapis.com/v0/b/workflow-fcf6b.appspot.com/o/photo-default.jpeg?alt=media&token=fdb557a4-18d8-4655-8c6b-7072302fee8a",
  "Cargo do usuário",
  "Time do usuário"
);

export function getCurrentUser(): User {
  return currentUser;
}

export async function fetchCurrentUser(): Promise<void> {
  let user: User | DataSnapshot | null = null;

  await getRealTime(`users/${auth.currentUser?.uid}`).then((userData) => {
    user = userData;
  });

  if (!user) {
    createCurrentUser();
  }

  currentUser = user as unknown as User;
}

function createCurrentUser(): void {
  setRealtTime(
    `users/${auth.currentUser?.uid}`,
    new User(
      auth.currentUser?.displayName || "Nome do usuário",
      auth.currentUser?.email || "E-mail do usuário",
      auth.currentUser?.photoURL ||
        "https://firebasestorage.googleapis.com/v0/b/workflow-fcf6b.appspot.com/o/photo-default.jpeg?alt=media&token=fdb557a4-18d8-4655-8c6b-7072302fee8a",
      "Cargo do usuário",
      "Time do usuário"
    )
  );
}
