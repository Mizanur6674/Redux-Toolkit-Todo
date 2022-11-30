import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
    numOfCakes: number
}

const initialState: InitialState = {
    numOfCakes: 10,
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    // reducer function
    reducers: {
        // action type
        ordered:  (state) => {
             state.numOfCakes--
        },

        // another action type
        restocked: (state, action: PayloadAction<number>) => {
            state.numOfCakes += action.payload
        },
    }

})

export default cakeSlice.reducer
export const { ordered, restocked} = cakeSlice.actions