import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES_BY_CONTINENTS } from '../gql/queries';
import { Link, useParams } from "react-router-dom";

export interface ICountry {
    code: string;
    name: string;
    emoji: string;
}

function Countries() {
    const { continentCode} = useParams();

    const { loading, error, data } = useQuery(GET_COUNTRIES_BY_CONTINENTS, {
        variables: { continentCode }
    });
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error</div>;
    }
    const { countries } = data.continent;

    return (
        <div>
            <ul>
                {countries.map((country: ICountry) => (
                    <li key={country.code}>
                        <Link to={`/countries/${country.code}`}>
                            {country.emoji}
                            {country.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Countries;