import React from "react";

const FilterByPrice = () => {
    return (
        <>
            <h2 className="sidebar__title">Цена</h2>
            <form action="#" className="sidebar__form">
                <label htmlFor="price-1">
                    <p>От</p>
                    <input type="number" name="price-1" id="price-1" />
                </label>
                <label htmlFor="price-2">
                    <p>До</p>
                    <input type="number" name="price-2" id="price-2" />
                </label>
            </form>
        </>
    );
};

export default FilterByPrice;
