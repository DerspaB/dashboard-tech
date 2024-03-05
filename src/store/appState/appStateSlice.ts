import { ILocations } from '@/interfaces'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface appState {
    showMobileMenu: boolean
    weatherInput: string
    listofLocations: ILocations[]
    currentLocation: ILocations
}

const getInitialLocation = (): ILocations => {
    return {
        place_id: "",
        licence: "",
        osm_type: "",
        osm_id: "",
        boundingbox: [],
        lat: "",
        lon: "",
        display_name: "",
        class: "",
        type: "",
        importance: 0,
    }
}

// Define the initial state using that type
const initialState: appState = {
    showMobileMenu: false,
    weatherInput: "",
    listofLocations: [],
    currentLocation: getInitialLocation()
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
        setListofLocations: (state, action: PayloadAction<ILocations[]>) => {
            state.listofLocations = action.payload
        },
        setCurrentLocation: (state, action: PayloadAction<ILocations>) => {
            state.currentLocation = action.payload
        },
    },
})

export const { setShowMobileMenu, setWeatherInput, setCurrentLocation, setListofLocations } = appSlice.actions
export default appSlice.reducer
