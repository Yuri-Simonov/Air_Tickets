import React from "react";
import Content from "./content";
import Sidebar from "./sidebar";

const Flights = () => {
    return (
        <section className="flights">
            <div className="flights__body">
                <Sidebar />
                <Content />
            </div>
        </section>
    );
};

export default Flights;
