import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_CONTINENTS } from '../gql/queries';

interface IContinent {
    code: string;
    name: string;
}

function Continents() {
    const [search, setSearch] = useState('');

    const { loading, error, data } = useQuery(GET_CONTINENTS);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error</div>;
    }
    const continents = data.continents;

    const filteredContinents = continents.filter((continent: IContinent) =>continent.name.toLowerCase().includes(search.toLowerCase()) )

    return (
        <div>
            <h1>Continents</h1>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher..."
            />
            <ul>
                {filteredContinents.map((continent: IContinent) => (
                    <li key={continent.code}>
                        <Link to={`/continents/${continent.code}`}>{continent.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Continents;