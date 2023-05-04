import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
    IpInfoContry,
    IpInfoContryCity,
    IpInfoContryCityVPN,
    LocationApiParams,
} from "../models/IpLocation";

const apiKey = import.meta.env.VITE_IPFY_API_KEY;

type ParamsType = Partial<LocationApiParams>;

export const ipifyApi = createApi({
    reducerPath: "ipifyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://geo.ipify.org/api/v2/",
    }),
    endpoints: (builder) => ({
        getCountryLocation: builder.query<IpInfoContry, ParamsType>({
            query: ({
                ipAddres,
                domain,
                email,
                escapedUnicode,
            }: ParamsType) => {
                const params = new URLSearchParams({
                    apiKey,
                    ipAddres: ipAddres ?? "",
                    domain: domain ?? "",
                    email: email ?? "",
                    escapedUnicode: escapedUnicode ?? "",
                });
                return `/country?${params}`;
            },
        }),
        getCountryAndCityLocation: builder.query<IpInfoContryCity, ParamsType>({
            query: ({
                ipAddres,
                domain,
                email,
                escapedUnicode,
            }: ParamsType) => {
                const params = new URLSearchParams({
                    apiKey,
                    ipAddres: ipAddres ?? "",
                    domain: domain ?? "",
                    email: email ?? "",
                    escapedUnicode: escapedUnicode ?? "",
                });

                return `/country,city?${params}`;
            },
        }),
        getCountryAndCityAndVpnLocation: builder.query<
            IpInfoContryCityVPN,
            ParamsType
        >({
            query: ({
                ipAddres,
                domain,
                email,
                escapedUnicode,
            }: ParamsType) => {
                const params = new URLSearchParams({
                    apiKey,
                    ipAddres: ipAddres ?? "",
                    domain: domain ?? "",
                    email: email ?? "",
                    escapedUnicode: escapedUnicode ?? "",
                });
                return `/country,city,vpn?${params}`;
            },
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetCountryLocationQuery,
    useLazyGetCountryAndCityLocationQuery,
    useGetCountryAndCityAndVpnLocationQuery,
} = ipifyApi;
