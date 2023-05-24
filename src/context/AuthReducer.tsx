import { AuthState } from './AuthContext'

type AuthAction = 
  | { type: 'signIn' }
  | { type: 'logOut' }
  | { type: 'changeFavoriteIcon', payload: string }

export const AuthReducer = ( state: AuthState, action: AuthAction ): AuthState => {

	switch (action.type) {
	case 'signIn':
		return {
			...state,
			isLoggedIn: true,
			userName: 'no-username-yet'
		}

	case 'logOut':
		return {
			...state,
			isLoggedIn: false,
			userName: undefined,
			favoriteIcon: undefined,
		}

	case 'changeFavoriteIcon':
		return {
			...state,
			favoriteIcon: action.payload
		}

	default:
		return state
	}

}
