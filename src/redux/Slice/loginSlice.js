import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
    accounts: {},
    status: 'idle',
    
    id: '',
    userName: null,
    password: null,
    
    flat: false,
    

}

// --- Create thunk --- 
export const addLoginAsync = createAsyncThunk(
    'login/addLogin',
    async () => {
        // --- Call API ---
        const response = await fetch('http://localhost:3000/account')
            .then(response => response.json())
        return response 
    }
)

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        setUserName: (state, action) => {
            state.userName = action.payload
        },

        setPassword: (state, action) => {
            state.password = action.payload
        },   
        
        setid: (state, action) => {
            if (action.payload == undefined) {
                for (let i = 0; i < state.accounts.length; i++) {
                    if (state.accounts[i].userName === state.userName ) {
                        state.id = state.accounts[i].id
                        state.flat = true
                    }
                }
                if (state.flat == false) {
                    state.id = ''
                }
            }
            else {
                state.id = action.payload
            }
        },

        checkAccount: (state) => {
            if(state.flat) {
                if (state.accounts[state.id].userName === state.userName && state.accounts[state.id].password === state.password) {
                    alert('ĐÃ ĐĂNG NHẬP')
                    return
                }
            }
            
        alert('TÀI KHOẢN HOẶC MẬT KHẨU KHÔNG CHÍNH XÁC')

        this.preventDefault();
        },
    },
    extraReducers: {

        // --- Handling reducer with case pending / fulfilled / rejected
        [addLoginAsync.pending]: (state, action) => {
            state.status = 'loading'
            console.log('pending')
        },
        [addLoginAsync.fulfilled]: (state, action) => {
            console.log("fulfilled")
            state.status ='success'
            state.accounts = action.payload
        },
        [addLoginAsync.rejected]: (state, action) => {
            console.log('error')
            state.status = 'error'
        }
    }
    
})


export const { setUserName, setPassword, setid, checkAccount, logout } = loginSlice.actions

export default loginSlice.reducer

