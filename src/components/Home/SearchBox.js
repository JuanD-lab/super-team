import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import SearchSuggestions from "./SearchSuggestions";
import InputField from "components/Common/InputField";

const SearchBox = () => {
    const [query, setQuery] = useState("");
    const handleSearch = () => {
        setQuery("");
    };
    return (
        <>
            <Formik>
                <Form>
                    <Field
                        id="heroName"
                        type="text"
                        name="heroName"
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        placeholder="Search by hero name"
                        component={InputField}
                    />
                </Form>
            </Formik>
            {query !== "" ? (
                <SearchSuggestions
                    url={`https://superheroapi.com/api/895993884677140/search/${query}`}
                    handle={handleSearch}
                />
            ) : null}
        </>
    );
};

export default SearchBox;