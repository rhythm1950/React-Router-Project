import '../Team/Team.css'

import React from 'react';
import { Link } from 'react-router-dom';

const Team = (props) => {
    const { strTeam, strTeamBadge, strSport, idTeam } = props.team;
    return (

        <section className="main-div">
            <div className="mt-5">
                <div className="team-div card container">
                    <img src={strTeamBadge} alt="" />
                    <h3 className="team-name">{strTeam}</h3>
                    <p>Sports Type: {strSport}</p>
                    <p>id: {idTeam}</p>
                    <Link to={`/details/${idTeam}`}><button className="team-button">Explore</button></Link>
                </div>
            </div>

        </section>
    );
};

export default Team;