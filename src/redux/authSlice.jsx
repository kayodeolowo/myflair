import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    message: "",
    user: "",
    accessToken: "",
    loading: false,
    error: ""
}

export const signUpUser = createAsyncThunk('signupuser', async (body) => {
    const res = await fetch("ddd", {
        method: "post",
        headers: {
            'content-Type': "application/json"
        },

        body: JSON.stringify(body)
    })
    return await res.json();
})

export const signInUser = createAsyncThunk('signinuser', async (body) => {
    const res = await fetch("https://be-great-finance.herokuapp.com/api/users/signin", {
        method: "post",
        headers: {
            'content-Type': "application/json"
        },

        body: JSON.stringify(body)
    })
    return await res.json();
    
})



const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        addToken: (state, action) => {
            state.accessToken = localStorage.getItem("accessToken")
        },

        addUser: (state, action) => {
            state.user = localStorage.getItem("user")
        },

        logout: (state, action) => {
            state.token = null,
                localStorage.clear();
        },


    },
    extraReducers: {
        //login
        [signInUser.pending]: (state, action) => {
            state.loading = true
        },

        [signInUser.fulfilled]: (state, { payload: { error, message, accessToken, user } }) => {
            state.loading = false;
            if (error) {
                state.error = error;
            } else {
                state.message = message;
                state.accessToken = accessToken;
                state.user = user;
                localStorage.setItem('message', message)
                localStorage.setItem('user', JSON.stringify())
                localStorage.setItem('accessToken', accessToken)
            }
        },

        [signInUser.rejected]: (state, action) => {
            state.loading = true
        },

        //sign up
        [signUpUser.pending]: (state, action) => {
            state.loading = true
        },

        [signUpUser.fulfilled]: (state, { payload: { error, message } }) => {
            state.loading = false;
            if (error) {
                state.error = error
            } else {
                state.message = message
            }
        },

        [signUpUser.rejected]: (state, action) => {
            state.loading = true
        },
    }
})

export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer