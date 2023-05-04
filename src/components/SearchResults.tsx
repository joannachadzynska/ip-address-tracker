import { IpInfoContryCity } from "../models/IpLocation";

const SearchResults = ({
    data: { location, ip, isp },
}: {
    data: IpInfoContryCity;
}) => {
    const boxes = [
        {
            name: "ip address",
            value: ip,
        },
        {
            name: "location",
            value: `${location.city}, ${location.country} \n${location.geonameId}`,
        },
        {
            name: "timezone",
            value: `UTC ${location.timezone}`,
        },
        {
            name: "isp",
            value: isp,
        },
    ];
    return (
        <div className='search-result'>
            {boxes.map(({ name, value }) => (
                <div key={name} className='search-result__box'>
                    <span className='search-result__box__name'>{name}</span>
                    <p className='search-result__box__value'>{value}</p>
                </div>
            ))}
        </div>
    );
};
export default SearchResults;
