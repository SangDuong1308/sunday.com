import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  // const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      // login
      const res = await signInWithEmailAndPassword(
        projectAuth,
        email,
        password
      );

      // update online status
      const userDocRef = doc(getFirestore(), "users", res.user.uid);
      await updateDoc(userDocRef, { online: true });

      // const documentRef = projectFirestore
      //   .collection("users")
      //   .doc(res.user.uid);
      // await documentRef.update({ online: true });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { login, isPending, error };
};
