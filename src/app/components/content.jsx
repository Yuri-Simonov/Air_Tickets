import React from "react";
import ContextItem from "../components/contextItem";
import { useFlights } from "../../hooks/useFlights";

const Content = () => {
    const { filteredFlights } = useFlights();
    console.log("filteredFlights", filteredFlights);
    return (
        <div className="content">
            {filteredFlights.map((flight, i) => {
                return <ContextItem key={i} />;
            })}
            <button className="show-more">Показать еще</button>
        </div>
    );
};

export default Content;
