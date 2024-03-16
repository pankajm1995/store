import {configureStore} from '@reduxjs/toolkit'
import todoreducer from './slice/todo'

export const store = configureStore({
    reducer:{
        todo:todoreducer
    }
})