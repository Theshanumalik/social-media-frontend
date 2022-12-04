import {createContext, useReducer, useEffect} from 'react'
const INTIAL_STATE = {
    user:  JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: null
}

const reducer = (state, action) => {
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
        case 'REMOVE_ERROR':
            return {
                ...state,
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

    useEffect(() => {
      if(!state.error) return 
      const timeout = setTimeout(() => {
        dispatch({type: "REMOVE_ERROR"})
      }, 5000);
      return () => {
        clearTimeout(timeout)
      }
    }, [state.error])
    
    
    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}