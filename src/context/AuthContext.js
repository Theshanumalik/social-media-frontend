import {createContext, useReducer, useEffect} from 'react'
const INTIAL_STATE = {
    user:  {},
    isFetching: false,
    error: null
}

const reducer = (action, state) => {
    switch(action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                isFetching: true,
                error: null
            }
        
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                isFetching: false,
                error: null
            }

        case 'LOGIN_FAILURE':
            return {
                user: null,
                isFetching: false,
                error: action.payload
            }

        case 'LOGOUT':
            return {
                user: null,
                isFetching: false,
                error: null
            }

        default:
            return state
    }
}

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INTIAL_STATE);
    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])
    
    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}