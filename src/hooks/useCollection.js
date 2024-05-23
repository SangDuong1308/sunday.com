import { useEffect, useState, useRef } from "react";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collectionName, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const queryRef = useRef(_query);
  const orderByRef = useRef(_orderBy);

  useEffect(() => {
    let ref = collection(projectFirestore, collectionName);

    if (queryRef.current) {
      const q = queryRef.current.map(([field, operator, value]) =>
        where(field, operator, value)
      );
      ref = query(ref, ...q);
    }

    if (orderByRef.current) {
      ref = orderBy(ref, ...orderByRef.current);
    }

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Could not fetch the data");
      }
    );

    // unsubscribe on unmount
    return () => unsubscribe();
  }, [collectionName]);

  return { documents, error };
};
