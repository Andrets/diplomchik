import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { url } from './currenturl'

export const cityApi = createApi({
	reducerPath: 'cityApi',
	baseQuery: fetchBaseQuery({ baseUrl: `${url}/api/city` }),
	tagTypes: ['City'],
	endpoints: (build) => ({
		// Получить все задания
		getAllCity: build.query({
			query: () => `/`,
			providesTags: ['City']
		})
	})
})

export const { useGetAllCityQuery } = cityApi
