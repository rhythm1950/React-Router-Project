import { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Field.css';

const Field = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <section>
            <div className="static-hero-div">
                <h1 className="header-text">Team Tracker</h1>
            </div>
            <div className="teamslist">
                {
                    teams.map(team => <Team team={team}></Team>)
                }
            </div>
        </section>

    );
};

export default Field;