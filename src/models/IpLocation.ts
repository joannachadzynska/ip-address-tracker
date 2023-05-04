export type IpLocation = any;

export interface IpInfoContry {
    ip: string;
    location: ICountryLocation;
    domains: string[];
    as?: IAs;
    isp?: string;
}

export interface IpInfoContryCity {
    ip: string;
    location: IContryCityLocation;
    domains: string[];
    as?: IAs;
    isp?: string;
}

export interface IpInfoContryCityVPN {
    ip: string;
    location: IContryCityLocation;
    domains: string[];
    as?: IAs;
    isp?: string;
    proxy: IProxy;
}

export interface ICountryLocation {
    country: string;
    region: string;
    timezone: string;
}

export interface IContryCityLocation {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
    geonameId?: number;
}

export interface IAs {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: AsType;
}

export enum AsType {
    CableDslIsp = "Cable/DSL/ISP",
    Content = "Content",
    EducationalResearch = "Educational/Research",
    Enterprise = "Enterprise",
    NonProfit = "Non-Profit",
    NotDisclosed = "Not Disclosed",
    Nsp = "NSP",
    RouteServer = "Route Server",
}

export interface IProxy {
    proxy: boolean;
    vpn: boolean;
    tor: boolean;
}

export type LocationApiParams = {
    apiKey: string;
    ipAddres?: string;
    domain?: string;
    email?: string;
    escapedUnicode?: "0" | "1";
};

export enum SearchParam {
    IP_ADDRESS = "ipAddres",
    DOMAIN = "domain",
    EMAIL = "email",
}
