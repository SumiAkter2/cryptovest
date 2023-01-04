import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../Firebase/firebase.init"

const useProfile = () => {
    const [user] = useAuthState(auth);
    const [useProfile, setUseProfile] = useState({});
    const [isUserLoading, setIsUserLoading] = useState(false);
    
}