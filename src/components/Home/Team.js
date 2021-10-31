import HeroCard from "components/Common/HeroCard";
import React from "react";
import { useSelector } from "react-redux";

function Team() {
    const heroState = useSelector((store) => store.heroes);
    const heroesAdded = heroState.map((hero) => (
        <HeroCard
            id={hero.id}
            key={hero.id+hero.name}
            name={hero.name}
            imgUrl={hero.imgUrl}
            powerstats={hero.powerstats}
            alt="batman"
            height="400px"
            isSearch={false}
        />
    ));
    return (
        <div className="container">
            <h1>My Team</h1>
            <div className="row">
                {heroesAdded.length >= 1 ? (
                    heroesAdded
                ) : (
                    <p className="text-center">
                        Aun no has agregado ningun heroe
                    </p>
                )}
            </div>
        </div>
    );
}

export default Team;
