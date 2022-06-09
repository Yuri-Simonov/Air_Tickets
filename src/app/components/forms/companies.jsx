import React from "react";

const CompaniesFilter = () => {
    return (
        <>
            <h2 className="sidebar__title">Авиакомпании</h2>
            <form action="#" className="sidebar__form">
                <label className="sidebar__label-col3" htmlFor="company-1">
                    <input type="checkbox" name="company-1" id="company-1" />
                    <p>
                        <span>LOT Polish Airlines</span>
                    </p>
                    <span>от 23131 р.</span>
                </label>
                <label className="sidebar__label-col3" htmlFor="company-2">
                    <input type="checkbox" name="company-2" id="company-2" />
                    <p>
                        <span>Аэрофлот </span>
                    </p>
                    <span>от 23131 р.</span>
                </label>
            </form>
        </>
    );
};

export default CompaniesFilter;
