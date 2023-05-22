import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY } from "../gql/queries";

function Country() {
    const { countryCode} = useParams();

    const { loading, error, data } = useQuery(GET_COUNTRY, {
        variables: { countryCode }
    });
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error</div>;
    }
    const { country } = data;

    return (
        <div>
            <div>
                <h1>{country.name}</h1>
                <p>{country.emoji}</p>
                <p>Currency: {country.currency}</p>
                <p>Capital: {country.capital}</p>
            </div>
        </div>
    );
}

export default Country;