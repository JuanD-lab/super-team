import HeroCard from "components/Common/HeroCard";
import React from "react";

function Team() {
    return (
        <div className="container">
            <h1>My Team</h1>
            <div className="row">
                <HeroCard
                    name="batman"
                    imgUrl="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
                    alt="batman"
                    height="400px"
                    isSearch={false}
                />
            </div>
        </div>
    );
}

export default Team;
