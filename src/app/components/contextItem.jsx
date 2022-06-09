import React from "react";

const ContextItem = () => {
    return (
        <div className="content__item">
            <header className="content__header">
                <p className="content__header-logo">LOGO</p>
                <div className="content__header-info">
                    <p className="content__header-price">21049 p.</p>
                    <p className="content__header-prompt">
                        Стоимость для одного взрослого пассажира
                    </p>
                </div>
            </header>
            <div className="content__flight flight">
                <div className="flight__places">
                    <div className="flight__places-from">
                        <span>Москва, ШЕРЕМЕТЬЕВО</span>
                        <span>(SVO)</span>
                    </div>
                    <div className="flight__places-arrow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 350 100"
                            width="350"
                            height="100"
                            fill="#17abe6"
                        >
                            <defs>
                                <marker
                                    id="arrowhead"
                                    markerWidth="10"
                                    markerHeight="7"
                                    refX="0"
                                    refY="3.5"
                                    orient="auto"
                                    stroke="#17abe6"
                                >
                                    <polygon points="0 0, 10 3.5, 0 7" />
                                </marker>
                            </defs>
                            <line
                                x1="0"
                                y1="50"
                                x2="250"
                                y2="50"
                                stroke="#17abe6"
                                strokeWidth="8"
                                markerEnd="url(#arrowhead)"
                            />
                        </svg>
                    </div>
                    <div className="flight__places-to">
                        <span>Москва, ШЕРЕМЕТЬЕВО</span>
                        <span>(SVO)</span>
                    </div>
                </div>
                <div className="flight__dates">
                    <div className="flight__dates-from">
                        <span>20:40</span>
                        <span>18 авг, вт</span>
                    </div>
                    <div className="flight__dates-time">
                        <span>14ч 15м</span>
                    </div>
                    <div className="flight__dates-to">
                        <span>19 авг, ср</span>
                        <span>09:25</span>
                    </div>
                    <div className="flight__dates-transfer">1 пересадка</div>
                </div>
                <div className="flight__company">
                    <p>
                        Рейс выполняет:
                        <span>LOT Polish Airlines</span>
                    </p>
                </div>
            </div>
            <div className="content__flight flight">
                <div className="flight__places">
                    <div className="flight__places-from">
                        <span>Москва, ШЕРЕМЕТЬЕВО</span>
                        <span>(SVO)</span>
                    </div>
                    <div className="flight__places-arrow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 350 100"
                            width="350"
                            height="100"
                            fill="#17abe6"
                        >
                            <defs>
                                <marker
                                    id="arrowhead"
                                    markerWidth="10"
                                    markerHeight="7"
                                    refX="0"
                                    refY="3.5"
                                    orient="auto"
                                    stroke="#17abe6"
                                >
                                    <polygon points="0 0, 10 3.5, 0 7" />
                                </marker>
                            </defs>
                            <line
                                x1="0"
                                y1="50"
                                x2="250"
                                y2="50"
                                stroke="#17abe6"
                                strokeWidth="8"
                                markerEnd="url(#arrowhead)"
                            />
                        </svg>
                    </div>
                    <div className="flight__places-to">
                        <span>Москва, ШЕРЕМЕТЬЕВО</span>
                        <span>(SVO)</span>
                    </div>
                </div>
                <div className="flight__dates">
                    <div className="flight__dates-from">
                        <span>20:40</span>
                        <span>18 авг, вт</span>
                    </div>
                    <div className="flight__dates-time">
                        <span>14ч 15м</span>
                    </div>
                    <div className="flight__dates-to">
                        <span>19 авг, ср</span>
                        <span>09:25</span>
                    </div>
                    <div className="flight__dates-transfer">1 пересадка</div>
                </div>
                <div className="flight__company">
                    <p>
                        Рейс выполняет:
                        <span>LOT Polish Airlines</span>
                    </p>
                </div>
            </div>
            <footer className="content__footer">
                <button type="button">Выбрать</button>
            </footer>
        </div>
    );
};

export default ContextItem;
