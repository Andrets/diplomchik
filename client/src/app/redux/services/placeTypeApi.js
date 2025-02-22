import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { url } from './currenturl'

export const placeTypeApi = createApi({
	reducerPath: 'placeTypeApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${url}/api/`
	}),
	tagTypes: ['PlaceType', 'Place'],
	endpoints: (build) => ({
		getAllplaceTypes: build.query({
			query: () => `/placeType`,
			providesTags: ['PlaceType']
		}),
		getPlaceTypeById: build.query({
			query: (id) => `/placeType/${id}`,
			providesTags: ['PlaceType']
		}),
		getAllplaces: build.query({
			query: () => `/place`,
			providesTags: ['Place']
		}),
		getPlaceById: build.query({
			query: (id) => `/place/${id}`,
			providesTags: ['Place']
		})
	})
})

export const {
	useGetPlaceTypeByIdQuery,
	useGetAllplaceTypesQuery,
	useGetAllplacesQuery,
	useGetPlaceByIdQuery
} = placeTypeApi
