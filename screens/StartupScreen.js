import React, {useEffect,useContext} from 'react'
import { Context as AuthContext } from '../components/context/authContext';


const StartupScreen = () => {
  const { localSignin} = useContext(AuthContext);
  useEffect(() => {
    localSignin();
  }, [])
    return null
}

export default StartupScreen;
