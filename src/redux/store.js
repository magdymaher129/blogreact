import {configureStore}  from '@reduxjs/toolkit'
import  statusReducer from './statusSlice'
export const store =configureStore({
    reducer:{
        statuc:statusReducer,
    },
})