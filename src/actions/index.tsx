import { SIGN_IN, SIGN_OUT } from './actionTypes';

export const signIn: () => { type: string } = () => {
    return {
        type: SIGN_IN
    };
};

export const signOut: () => { type: string } = () => {
    return {
        type: SIGN_OUT
    };
};

