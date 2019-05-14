import { SIGN_IN, SIGN_OUT } from '../actions/actionTypes';

const INITIAL_STATE: {isSignedIn: null | boolean} = {
    isSignedIn: null
}

export default (state = INITIAL_STATE, action: {type: string}) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true }
        case SIGN_OUT:
            return { ...state, isSignedIn: false }
        default: 
            return state;
    }
}