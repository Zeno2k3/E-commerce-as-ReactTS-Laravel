import { createReducer } from '@reduxjs/toolkit'

interface Customer {
    customerName: string;
    phone: string;
    birthday: Date;
}

interface AuthState {
    isLoggedIn: boolean;
    customer: Customer | null;
    token: string | null;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: AuthState = {
    isLoggedIn: false,
    customer: null,
    token: null,
    loading: 'idle',
    error: null
}


const LoginReducer = createReducer(initialState, (builder) => {})

export default LoginReducer;