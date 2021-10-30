import React from "react";
import PropTypes from "prop-types";

function HeroCard({ name, imgUrl, alt, height = "330px", isSearch }) {
    return (
        <div className={isSearch ? "col-md-3" : "col-md-4"}>
            <div className="card d-flex flex-column my-3 text-center">
                <img
                    className=" object-cover hero-item"
                    src={imgUrl}
                    alt={alt}
                    height={height}
                />
                <h3 className="fs-5">{name}</h3>
                <div className="py-3 card-body">
                    <a href={name} className="btn btn-primary mx-3">
                        Detalles
                    </a>
                    {isSearch ? (
                        <button className="btn btn-success">Agregar</button>
                    ) : (
                        <button className="btn btn-danger">Eliminar</button>
                    )}
                </div>
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
