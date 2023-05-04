import { SearchParam } from "../models/IpLocation";
import { useDispatch } from "react-redux";
import {
    resetSearchData,
    selectSearchData,
    selectSearchError,
    setIsSearching,
    setSearchData,
    setSearchError,
} from "../features/searchSlice";
import { useSelector } from "react-redux";

const SearchBar = () => {
    const dispatch = useDispatch();
    const searchData = useSelector(selectSearchData);
    const error = useSelector(selectSearchError);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchData.value) {
            dispatch(resetSearchData());
        }
    };
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const result = getSearchParam(e.target.value);

        const isResultTypeString = !Object.values(SearchParam).includes(
            result as SearchParam
        );

        if (isResultTypeString) {
            // dispatch(setSearchError(result));
            dispatch(
                setSearchData({ type: SearchParam.IP_ADDRESS, value: "" })
            );
        } else {
            dispatch(setSearchData({ type: result, value: e.target.value }));
        }

        // if (e.target.value.length === 0 || !isResultTypeString) {
        //     dispatch(setSearchError(""));
        // }
    };

    const getSearchParam = (text: string): SearchParam | string => {
        const ipAddressRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
        const domainNameRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*\.[a-z]{2,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (ipAddressRegex.test(text)) {
            return SearchParam.IP_ADDRESS;
        } else if (domainNameRegex.test(text)) {
            return SearchParam.DOMAIN;
        } else if (emailRegex.test(text)) {
            return SearchParam.EMAIL;
        } else {
            return "Invalid input text";
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} noValidate>
                <input
                    onChange={handleSearch}
                    type='search'
                    placeholder='Search for any IP address or domain'
                />

                <button type='submit'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='11'
                        height='14'>
                        <path
                            fill='none'
                            stroke='#FFF'
                            strokeWidth='3'
                            d='M2 1l6 6-6 6'
                        />
                    </svg>
                </button>
            </form>
            {error && <span>{error}</span>}
        </>
    );
};

export default SearchBar;
