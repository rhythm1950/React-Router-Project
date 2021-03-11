import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamInfo.css';

const TeamInfo = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [])

    const { strTeam, intFormedYear, strCountry, strSport, strGender, strTeamBadge } = team;

    // conditional rendering

    const playersImage = (strGender === "Male") ? <img src="https://sportstar.thehindu.com/football/football-photos/article25994110.ece/ALTERNATES/LANDSCAPE_1200/INDIAAFCREUTERSjpg" alt=""/> 
    : <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B9CF/production/_107576574_gettyimages-1152461181-1.jpg" alt=""/>

    return (
        <section>
            <div className="hero-div">
                <img src={strTeamBadge} alt="" />
            </div>

            <div className="second-div">
                <div className="info-container container">
                    <div className="row ">
                        <div className="Info-div col-md-6">
                            <h1>Team name: {strTeam}</h1>
                            <h5>Founded: {intFormedYear} </h5>
                            <h5>Country: {strCountry}</h5>
                            <h5>Sports Type: {strSport}</h5>
                            <h5>Gender: {strGender}</h5>
                        </div>

                        <div className="col-md-6 gender-div">
                            {playersImage}
                        </div>
                    </div>

                </div>

                <div>
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero harum doloribus a veritatis eum fugit. Repudiandae ullam nobis vero accusantium excepturi atque porro error minima sunt sint, est tenetur maiores perferendis repellat beatae consectetur veniam, maxime culpa quia reprehenderit? Cumque reprehenderit assumenda distinctio blanditiis quia earum eveniet libero inventore optio.</p><br />
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero harum doloribus a veritatis eum fugit. Repudiandae ullam nobis vero accusantium excepturi atque porro error minima sunt sint, est tenetur maiores perferendis repellat beatae consectetur veniam, maxime culpa quia reprehenderit? Cumque reprehenderit assumenda distinctio blanditiis quia earum eveniet libero inventore optio.</p><br />
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero harum doloribus a veritatis eum fugit. Repudiandae ullam nobis vero accusantium excepturi atque porro error minima sunt sint, est tenetur maiores perferendis repellat beatae consectetur veniam, maxime culpa quia reprehenderit? Cumque reprehenderit assumenda distinctio blanditiis quia earum eveniet libero inventore optio.</p>
                </div>

                <div className="icons">
                   
                </div>

            </div>
        </section>
    );
};

export default TeamInfo;