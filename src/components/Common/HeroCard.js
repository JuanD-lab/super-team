import React from "react";
import PropTypes from "prop-types";

function HeroCard({ name, imgUrl, alt, height = "330px", isSearch }) {
    return (
        <div className=" col-md-3">
            <div className="card d-flex flex-column my-3 text-center">
                <img
                    className=" object-cover hero-item"
                    src={imgUrl}
                    alt={alt}
                    height={height}
                />
                <h3 className="fs-5">{name}</h3>
                {isSearch ? (
                    <div className="py-3 card-body">
                        <button className="btn btn-primary">Agregar</button>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

HeroCard.propTypes = {
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    height: PropTypes.string,
    isSearch: PropTypes.bool,
};

export default HeroCard;
