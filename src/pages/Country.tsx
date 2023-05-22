import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY } from "../gql/queries";
import {ICountry} from "./Countries";

interface  ICountryDetailed extends ICountry {
    currency: string;
    capital: string;
}

function Country() {
    const { countryCode} = useParams();

    const { loading, error, data } = useQuery(GET_COUNTRY, {
        variables: { countryCode }
    });

    let country: ICountryDetailed = { name: '', emoji: '', code: '', currency: '', capital: ''}
    if (data) {
        country = data.country
    }

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <div>
                    <h1>{country.name}</h1>
                    <p>{country.emoji}</p>
                    <p>Currency: {country.currency}</p>
                    <p>Capital: {country.capital}</p>
                </div>
            )}
        </div>
    );
}

export default Country;