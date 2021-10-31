import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRoute } from "wouter";

function HerodDetails() {
    const [match, params] = useRoute("/hero/:id");
    const url = `${process.env.REACT_APP_SERVER_URL}/hero/${params.id}`;
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const promise = axios(url);
        promise.then((res) => {
            setResults(res.data);
            setLoading(false);
        });
        promise.catch(() => {});
    }, [url]);
    return (
        <div className="container d-flex flex-wrap mt-3">
            {loading ? (
                "loading..."
            ) : (
                <>
                    <div className="banner-detail">
                        <img
                            className="object-cover w-100"
                            src={results.image.url}
                            alt={results.name}
                        />
                    </div>
                    <div className="m-3 d-flex flex-column flex-wrap">
                        <h1>{results.name}</h1>
                        <p>{results.biography.aliases[1]}</p>

                        <h4>Appearance</h4>
                        {Object.entries(results.appearance).map(
                            (key, index) => (
                                <p key={index}>{`${key[0]}: ${key[1]}`}</p>
                            )
                        )}
                        <p>{`Base: ${results.work.base}`}</p>
                        <p>{`Occupation: ${results.work.occupation}`}</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default HerodDetails;
