import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES_BY_CONTINENTS } from '../gql/queries';
import { Link, useParams } from "react-router-dom";

interface ICountry {
    code: string;
    name: string;
    emoji: string;
}

function Countries() {
    const { continentCode} = useParams();

    const { loading, error, data } = useQuery(GET_COUNTRIES_BY_CONTINENTS, {
        variables: { continentCode }
    });

    return (
        <div>
            <h1>Countries</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <ul>
                    {data.continent.countries.map((country: ICountry) => (
                        <li key={country.code}>
                            <Link to={`/country/${country.code}`}>
                                {country.emoji}
                                {country.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Countries;