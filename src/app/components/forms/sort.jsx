import React, { useState } from "react";

const sortItemsArray = [
    "по возрастанию цены",
    "по убыванию цены",
    "по времени в пути"
];

const Sort = () => {
    const [radioChecked, setRadioChecked] = useState(0);

    const sortItems = (arr) => {
        return arr.map((item, i) => {
            return (
                <label key={`sort-${i}`} htmlFor={`sort-${i}`}>
                    <input
                        type="radio"
                        name={`sort-${i}`}
                        id={`sort-${i}`}
                        checked={i === radioChecked}
                        onChange={() => setRadioChecked(i)}
                    />
                    <p>{item}</p>
                </label>
            );
        });
    };

    return (
        <>
            <h2 className="sidebar__title">Сортировать</h2>
            <form action="#" className="sidebar__form">
                {sortItems(sortItemsArray)}
            </form>
        </>
    );
};

export default Sort;
