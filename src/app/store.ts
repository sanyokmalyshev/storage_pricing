import { configureStore } from '@reduxjs/toolkit';
import serviceValuesReducer from '../features/serviceValues'

export const store = configureStore({
  reducer: {
    values: serviceValuesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;