import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_CONTINENTS } from '../gql/queries';

interface IContinent {
    code: string;
    name: string;
}

function Continents() {
    const { loading, error, data } = useQuery(GET_CONTINENTS);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error</div>;
    }
    const continents = data.continents;

    return (
        <div>
            <h1>Continents</h1>
            <ul>
                {continents.map((continent: IContinent) => (
                    <li key={continent.code}>
                        <Link to={`/continents/${continent.code}`}>{continent.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Continents;