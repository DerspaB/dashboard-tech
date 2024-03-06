import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import appStateReducer from './appState/appStateSlice'
import taskManagerReducer from './taskManager/taskManagerSlice'
import { localStorageMiddleware } from './middleware/localstorage-middleware'

export const store = configureStore({
    reducer: {
        appState: appStateReducer,
        taskManager: taskManagerReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: localStorageMiddleware,
            },
            serializableCheck: false,
        }).concat(localStorageMiddleware as any),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector