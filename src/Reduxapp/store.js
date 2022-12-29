import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../Feature/cake/CakeSlice'
import icecreamReducer from '../Feature/icecream/icecreamSlice'
import userReducer from '../Feature/user/UserSlice'

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
  }
})

export default store