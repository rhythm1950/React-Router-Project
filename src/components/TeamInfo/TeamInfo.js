import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faFutbol, faMars, faFlag } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
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

    const { strTeam, intFormedYear, strCountry, strSport, strGender, strTeamBadge, strFacebook, strTwitter, strYoutube } = team;

    // conditional rendering

    const playersImage = (strGender === "Male") ? <img src="https://sportstar.thehindu.com/football/football-photos/article25994110.ece/ALTERNATES/LANDSCAPE_1200/INDIAAFCREUTERSjpg" alt="" />
        : <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B9CF/production/_107576574_gettyimages-1152461181-1.jpg" alt="" />

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
                            <h5><FontAwesomeIcon icon={faCertificate} />Founded: {intFormedYear} </h5>
                            <h5><FontAwesomeIcon icon={faFlag} />Country: {strCountry}</h5>
                            <h5><FontAwesomeIcon icon={faFutbol} />Sports Type: {strSport}</h5>
                            <h5><FontAwesomeIcon icon={faMars} />Gender: {strGender}</h5>
                        </div>

                        <div className="col-md-6 gender-div d-flex justify-content-center">
                            {playersImage}
                        </div>
                    </div>
                </div>

                <div>
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero harum doloribus a veritatis eum fugit. Repudiandae ullam nobis vero accusantium excepturi atque porro error minima sunt sint, est tenetur maiores perferendis repellat beatae consectetur veniam, maxime culpa quia reprehenderit? Cumque reprehenderit assumenda distinctio blanditiis quia earum eveniet libero inventore optio.</p><br />
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero harum doloribus a veritatis eum fugit. Repudiandae ullam nobis vero accusantium excepturi atque porro error minima sunt sint, est tenetur maiores perferendis repellat beatae consectetur veniam, maxime culpa quia reprehenderit? Cumque reprehenderit assumenda distinctio blanditiis quia earum eveniet libero inventore optio.</p><br />
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero harum doloribus a veritatis eum fugit. Repudiandae ullam nobis vero accusantium excepturi atque porro error minima sunt sint, est tenetur maiores perferendis repellat beatae consectetur veniam, maxime culpa quia reprehenderit? Cumque reprehenderit assumenda distinctio blanditiis quia earum eveniet libero inventore optio.</p>
                </div>

                <div className="icons d-flex justify-content-center">
                    <h2><a href="https://web.programming-hero.com/dashboard"><FontAwesomeIcon icon={faFacebookF} /></a></h2>
                    <h2><a href="https://web.programming-hero.com/dashboard"><FontAwesomeIcon icon={faTwitter} /></a></h2>
                    <h2><a href="https://web.programming-hero.com/dashboard"><FontAwesomeIcon icon={faYoutube} /></a></h2>
                </div>
            </div>
        </section>
    );
};

export default TeamInfo;