import { createSelector, createSlice } from "@reduxjs/toolkit";
import { SearchParam } from "../models/IpLocation";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        data: {
            type: SearchParam.IP_ADDRESS,
            value: "",
        },
        error: "",
        isSearching: false,
    },
    reducers: {
        setSearchData: (state, action) => {
            state.data = action.payload;
        },
        setSearchError: (state, action) => {
            state.error = action.payload;
        },
        resetSearchData: (state) => {
            state.data = {} as any;
            state.error = "";
        },
        setIsSearching: (state, action) => {
            state.isSearching = action.payload;
        },
    },
});

export const {
    setSearchData,
    resetSearchData,
    setSearchError,
    setIsSearching,
} = searchSlice.actions;

export default searchSlice.reducer;

// Selectors
export const selectSearch = (state: any) => state.search;
export const selectSearchData = createSelector(
    selectSearch,
    (search) => search.data
);
export const selectSearchError = createSelector(
    selectSearch,
    (search) => search.error
);
export const selectIsSearchingStatus = createSelector(
    selectSearch,
    (search) => search.isSearching
);
