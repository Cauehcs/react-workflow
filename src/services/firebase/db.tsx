import { db } from "./firebase";
import { DataSnapshot, child, get, ref, set } from "firebase/database";

export const setRealtTime = (path: string, value: any): void => {
  set(ref(db, path), value);
};

export const getRealTime = (path: string): Promise<DataSnapshot> => {
  const res = get(child(ref(db), path))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return res;
};
