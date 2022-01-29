import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modal: false,

    orders: [],
    total_money: 0,

    name: null,
    phone: null,
    address: null,
    note: null,

}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {

        open: (state, action) => {

            state.modal = true

            state.orders = [...state.orders, action.payload]

            for (let i = 0; i < state.orders.length - 1; i++) {
                if (state.orders[i].name === state.orders[state.orders.length - 1].name) {
                    state.orders.pop()
                }
            }

            state.total_money = 0

            for (let i = 0; i < state.orders.length; i++) {
                state.total_money = state.total_money + state.orders[i].price * state.orders[i].quantily
            }
        },

        close: (state) => {
            state.modal = false;
        },

        plus: (state, action) => {

            state.orders[action.payload].quantily = state.orders[action.payload].quantily + 1;

            state.total_money = 0;

            for (let i = 0; i < state.orders.length; i++) {
                state.total_money = state.total_money + state.orders[i].price * state.orders[i].quantily;
            }


        },

        minus: (state, action) => {

            if (state.orders[action.payload].quantily < 2 ) {
                state.orders[action.payload].quantily = 1;
            }
            else {
                state.orders[action.payload].quantily = state.orders[action.payload].quantily - 1;

                state.total_money = 0

                for (let i = 0; i < state.orders.length; i++) {
                    state.total_money = state.total_money + state.orders[i].price * state.orders[i].quantily;
                }
            }
        },

        remove: (state, action) => {
            state.orders.splice(action.payload, 1)
            
            state.total_money = 0

                for (let i = 0; i < state.orders.length; i++) {
                    state.total_money = state.total_money + state.orders[i].price * state.orders[i].quantily;
                }
        },

        setName: (state, action) => {
            state.name = action.payload
        },

        setPhone: (state, action) => {
            state.phone = action.payload
        },

        setAddress: (state, action) => {
            state.address = action.payload
        },

        setNote: (state, action) => {
            state.note = action.payload
        },

        done: (state) => {
            if (window.location.href !== 'http://localhost:4000/Cart' && state.orders.length === 0) {
                alert('Đơn hàng trống')
                window.location.href="/Menu"
            }
            state.modal = false;
        },


    }
})

export const { open, close, plus, minus, remove, done, setName, setPhone, setAddress, setNote } = modalSlice.actions

export default modalSlice.reducer