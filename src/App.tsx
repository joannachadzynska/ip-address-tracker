import { useSelector } from "react-redux";
import "./App.css";
import { Header, MapContainer } from "./components";
import { selectSearchData } from "./features/searchSlice";
import { useLazyGetCountryAndCityLocationQuery } from "./services/locationService";
import { useEffect } from "react";

function App() {
    const searchData = useSelector(selectSearchData);
    const [getCountryAndCityLocation, { data }] =
        useLazyGetCountryAndCityLocationQuery();

    useEffect(() => {
        if (searchData && searchData.value && searchData.value.length > 0) {
            getCountryAndCityLocation({
                [searchData.type]: searchData.value,
            });
        }
    }, [searchData.value]);

    return (
        <>
            <Header data={data} />
            <MapContainer data={data} />
        </>
    );
}

export default App;
