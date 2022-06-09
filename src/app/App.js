import React from "react";
import FlightsProvider from "../hooks/useFlights";
import Flights from "./components/flights";

const App = () => {
    return (
        <main className="wrapper">
            <div className="container">
                <FlightsProvider>
                    <Flights />
                </FlightsProvider>
            </div>
        </main>
    );
};

export default App;
