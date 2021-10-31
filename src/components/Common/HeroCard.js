import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addHeroToTeam, deleteHeroFromTeam } from "redux/heroesReducer";

function HeroCard({
    id,
    name,
    imgUrl,
    isBad,
    powerstats,
    alt,
    height = "330px",
    isSearch,
}) {
    const dispatch = useDispatch();

    return (
        <div className={isSearch ? "col-md-3" : "col-md-4"}>
            <div className="card d-flex flex-column my-3">
                <img
                    className=" object-cover hero-item"
                    src={imgUrl}
                    alt={alt}
                    height={height}
                />
                <h3 className="fs-5 text-center">{name}</h3>
                <div className="py-3 card-body">
                    {isSearch ? (
                        ""
                    ) : (
                        <div className="d-flex row m-2">
                            {Object.entries(powerstats).map((key, index) => (
                                <div className="row">
                                    <div className="col-6">
                                        <span>{`${key[0]}: ${key[1]}`} </span>
                                    </div>
                                    <div className="col-6">
                                        <span
                                            className="m-1 bg-success d-inline-block"
                                            style={{
                                                width: `${key[1]}px`,
                                                height: "3px",
                                            }}
                                            key={index}
                                        ></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <a href={id} className="btn btn-primary mx-3 text-center">
                        Detalles
                    </a>
                    {isSearch ? (
                        <button
                            className="btn btn-success text-center"
                            onClick={() =>
                                dispatch(
                                    addHeroToTeam({
                                        id,
                                        name,
                                        imgUrl,
                                        isBad,
                                        powerstats,
                                    })
                                )
                            }
                        >
                            Agregar
                        </button>
                    ) : (
                        <button
                            className="btn btn-danger"
                            onClick={() =>
                                dispatch(
                                    deleteHeroFromTeam(id)
                                )
                            }
                        >
                            Eliminar
                        </button>
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
