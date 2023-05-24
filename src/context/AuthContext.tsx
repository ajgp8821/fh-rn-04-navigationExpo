import React, { createContext, useReducer } from 'react'
import { AuthReducer } from './AuthReducer'

// Define what it looks like, what information will I have here
export interface AuthState {
  isLoggedIn: boolean,
  userName?: string,
  favoriteIcon?: string,
}

// Initial state
export const authInitialState: AuthState = {
	isLoggedIn: false,
	userName: undefined,
	favoriteIcon: undefined,
}

// We'll use it to tell react what it looks like and what it exposes in the context
export interface AuthContextProps {
  authState: AuthState,
  signIn: () => void,
  logOut: () => void,
  changeFavoriteIcon: (name: string) => void,
}

// Create the context
export const AuthContext = createContext({} as AuthContextProps)

// State Provider Component
// export const AuthProvider = ({children}: any) => {
export const AuthProvider = ({children}: {children: JSX.Element[]}) => {

	const [authState, dispatch] = useReducer(AuthReducer, authInitialState)

	const signIn = () => {
		dispatch({type: 'signIn'})
	}

	const logOut = () => {
		dispatch({ type: 'logOut' })
	}

	const changeFavoriteIcon = ( name: string ) => {
		dispatch({ type: 'changeFavoriteIcon', payload: name })
	}

	return (
		<AuthContext.Provider value={{
			authState,
			signIn,
			logOut,
			changeFavoriteIcon,
		}}>
			{children}
		</AuthContext.Provider>
	)
}
