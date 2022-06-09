import React, { useContext } from "react";
import PropTypes from "prop-types";
import allFlights from "../sources_docs/flights_cut.json";

const FlightsContext = React.createContext();

export const useFlights = () => {
    return useContext(FlightsContext);
};

const FlightsProvider = ({ children }) => {
    const flights = allFlights.result.flights;
    const filteredFlights = flights;
    return (
        <FlightsContext.Provider value={{ filteredFlights }}>
            {children}
        </FlightsContext.Provider>
    );
};
FlightsProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default FlightsProvider;
