import { useEffect, useState } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { doc, getFirestore, setDoc, updateDoc } from "firebase/firestore";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      // update online status
      const { uid } = projectAuth.currentUser;

      const userDocRef = doc(getFirestore(), "users", uid);
      await updateDoc(userDocRef, { online: false });

      // sign the user out
      await projectAuth.signOut();

      // dispatch logout action
      dispatch({ type: "LOGOUT" });

      // update state

      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { logout, error, isPending };
};
