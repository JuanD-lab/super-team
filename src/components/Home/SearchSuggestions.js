import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import HeroCard from "components/Common/HeroCard";

const SearchSuggestions = ({ url }) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const promise = axios(url);
        promise.then((res) => {
            if (!res.data.results) {
                return [];
            } else {
                setResults(res.data.results.slice(0, 8));
            }
        });
        promise.catch(() => {});
    }, [url]);

    const resultsList = results.map((value) => (
        <HeroCard
            name={value.name}
            imgUrl={value.image.url}
            alt={value.name}
            isSearch={true}
            key={`SearchHero-${value.name}${value.id}`}
        />
    ));

    return (
        <>
            {resultsList.length >= 1 ? (
                <div className="container rounded-6 shadow">
                    <button
                        onClick={() => setResults([])}
                        className="btn btn-danger"
                    >
                        X
                    </button>
                    <div className="d-flex row ">{resultsList}</div>
                </div>
            ) : null}
        </>
    );
};

SearchSuggestions.propTypes = {
    url: PropTypes.string.isRequired,
    handle: PropTypes.func,
};

export default SearchSuggestions;
