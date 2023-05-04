import { IpInfoContryCity } from "../models/IpLocation";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const Header = ({ data }: { data: IpInfoContryCity | undefined }) => (
    <header>
        <h1>IP Address Tracker</h1>
        <SearchBar />
        <br />
        {data ? <SearchResults data={data} /> : null}
    </header>
);

export default Header;
