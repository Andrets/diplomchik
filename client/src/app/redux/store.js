import { configureStore } from '@reduxjs/toolkit'

import dailyTasksReducer from '@redux/slices/dailyTasksSlice'
import userReducer from '@redux/slices/userSlice'
import shopReducer from '@redux/slices/shopSlice'
import placesReducer from '@redux/slices/placesSlice'
import citiesReducer from '@redux/slices/citiesSlice'
import locationsReducer from '@redux/slices/locationsSlice'
import modalsReducer from '@redux/slices/modalsSlice'
import cityApiReducer, { cityApi } from '@redux/services/cityApi'

export const store = configureStore({
	reducer: {
		dailyTasks: dailyTasksReducer,
		user: userReducer,
		shop: shopReducer,
		places: placesReducer,
		cities: citiesReducer,
		locations: locationsReducer,
		modals: modalsReducer,
		// RTK QUERY
		cityApi : cityApiReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(cityApi.middleware),
})
