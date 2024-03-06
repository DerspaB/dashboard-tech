
import { Itask } from '@/interfaces'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface TaskManager {
    tasks: Itask[]
}



// Define the initial state using that type
const initialState: TaskManager = {
    tasks: []
}

export const appSlice = createSlice({
    name: 'taskManager',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setTasks: (state, action: PayloadAction<Itask[]>) => {
            state.tasks = action.payload
        },
        setNewTask: (state, action: PayloadAction<Itask>) => {
            state.tasks.push(action.payload)
        },
        changeStatusTask: (state, action: PayloadAction<number>) => {
            const prevStatus = state.tasks[action.payload].isComplete
            state.tasks[action.payload].isComplete = !prevStatus
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks.splice(action.payload, 1)

        }

    },
})

export const { setNewTask, changeStatusTask, deleteTask, setTasks } = appSlice.actions
export default appSlice.reducer
