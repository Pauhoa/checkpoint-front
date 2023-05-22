import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES_BY_CONTINENTS } from '../gql/queries';
import { Link, useParams } from "react-router-dom";

export interface ICountry {
    code: string;
    name: string;
    emoji: string;
}

function Countries() {
    const [search, setSearch] = useState('');

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
    const { countries, name } = data.continent;

    const filteredCountries = countries.filter((country: ICountry) =>country.name.toLowerCase().includes(search.toLowerCase()) )

    return (
        <div>
            <h1>{name}</h1>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher..."
            />
            <ul>
                {filteredCountries.map((country: ICountry) => (
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