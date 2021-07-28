import React, { useContext, useState, useEffect } from "react";
import { SelectProfileContainer } from "./profile.container";
import { FirebaseContext } from "../context/firebase";
import { Loading } from "../components";

export default function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const user = firebase.auth().currentUser || {};
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}</>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
