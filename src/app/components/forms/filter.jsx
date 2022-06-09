import React from "react";

const Filter = () => {
    return (
        <>
            <h2 className="sidebar__title">Фильтровать</h2>
            <form action="#" className="sidebar__form">
                <label htmlFor="checkbox-1">
                    <input type="checkbox" name="checkbox-1" id="checkbox-1" />
                    <p>1 пересадка</p>
                </label>
                <label htmlFor="checkbox-2">
                    <input type="checkbox" name="checkbox-2" id="checkbox-2" />
                    <p>без пересадок</p>
                </label>
            </form>
        </>
    );
};

export default Filter;
