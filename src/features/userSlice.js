import {createSlice} from '@reduxjs/toolkit'

// tiene el reducer y el action en el mismo sitio, cool 

export const userSlice = createSlice({
    name:'user',
    initialState:{
        user: null,
    },
    reducers:{
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;