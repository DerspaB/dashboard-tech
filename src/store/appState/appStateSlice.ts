import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface appState {
    showMobileMenu: boolean
    weatherInput: string
}

// Define the initial state using that type
const initialState: appState = {
    showMobileMenu: false,
    weatherInput: ''
}

export const appSlice = createSlice({
    name: 'appState',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setShowMobileMenu: (state, action: PayloadAction<boolean>) => {
            state.showMobileMenu = action.payload
        },
        setWeatherInput: (state, action: PayloadAction<string>) => {
            state.weatherInput = action.payload
        },
    },
})

export const { setShowMobileMenu, setWeatherInput } = appSlice.actions
export default appSlice.reducer
