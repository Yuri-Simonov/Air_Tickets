import React from "react";
import CompaniesFilter from "./forms/companies";
import Filter from "./forms/filter";
import FilterByPrice from "./forms/filterByPrice";
import Sort from "./forms/sort";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__item">
                <Sort />
            </div>
            <div className="sidebar__item">
                <Filter />
            </div>
            <div className="sidebar__item">
                <FilterByPrice />
            </div>
            <div className="sidebar__item">
                <CompaniesFilter />
            </div>
        </div>
    );
};

export default Sidebar;
