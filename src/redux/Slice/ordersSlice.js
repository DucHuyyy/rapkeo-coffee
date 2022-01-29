import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    status: '',
    orders: [],
}

// --- Create thunk ---
export const addOrdersAsync = createAsyncThunk(
    'orders/addOrders',
    async () => {
        // --- Call API ---
        const response = await fetch('http://localhost:3000/orders')
            .then(response => response.json())
        return response
    }
)

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        set_orders: (state, action) => {
            state.orders.splice(action.payload, 1)
        }
    },
    extraReducers: {
        [addOrdersAsync.pending]: (state, action) => {
            state.status = 'loading'
            console.log('pending')
        },
        [addOrdersAsync.fulfilled]: (state, action) => {
            console.log("fulfilled")
            state.status ='success'
            state.orders = action.payload
        },
        [addOrdersAsync.rejected]: (state, action) => {
            console.log('error')
            state.status = 'error'
        }
    }

})

export const { set_orders,  } = ordersSlice.actions

export default ordersSlice.reducer