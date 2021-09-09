import React, { useEffect, useState } from "react";

const Director = ({ id, type }) => {
    const [director, setDirector] = useState([]);
    useEffect(() => {
        const getTrailer = async () => {
            const url = `
              https://api.themoviedb.org/3/${type}/${id}/credits?api_key=cb1cb02271e379c911c6d9401d1eb7f8`;
            const response = await fetch(url);
            const data = await response.json();
            const { crew } = data;
            setDirector(crew);
        };
        getTrailer();
    }, []);
    const D = director.map((d) => {
        if (d.job === "Director") {
            return <div>{d.name}</div>
        }
        return ''
    });
    return (
        <div>
            {D}
        </div>
    );
};

export default Director;