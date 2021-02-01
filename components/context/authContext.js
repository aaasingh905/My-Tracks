import createDataContext from './createDataContext'
import trackerApi from '../../api/tracker'
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { navigate } from '../../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ERROR' :
            return{...state, errorMessage: action.payload};
        case 'SIGNUP' :
            return {errorMessage:'', token:action.payload}
            case 'SIGNIN' :
            return {errorMessage:'', token:action.payload}
        default:
            return state;
    }
}

const signup = (dispatch) =>async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signup', {email,password})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type:'SIGNUP', payload:response.data.token})
            navigate('TrackList');
        }
        catch(err) {
            console.log(err)
            dispatch({type:'ADD_ERROR', payload:'Something Went Wrong with sign up'})
        }

    }


const signin = (dispatch) =>async ({email, password}) => { try {
        const response = await trackerApi.post('/signin', {email,password})
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type:'SIGNIN', payload:response.data.token})
      
        navigate('TrackList');
    }
    catch(err) {
        console.log(err)
        dispatch({type:'ADD_ERROR', payload:'Something Went Wrong with sign in'})
    }
} 

const localSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if(token) {
        dispatch({type:'SIGNIN', payload:token})
        navigate('TrackList')
    } else {
        navigate('Signup')
    }
}

const signout = (dispatch) =>{
    return () => {
        
    }
} 

export const { Provider, Context} = createDataContext (
    authReducer,
    {signin,signout,signup, localSignin},
    {isSignedIn: false, errorMessage:''}
)