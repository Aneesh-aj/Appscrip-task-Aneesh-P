import { useState } from "react";
import "../style/filter.css";

const Filter = ({ isMobile, hideFilter, setHideFilter }) => {
    const [idealFor, setIdealFor] = useState({
        men: false,
        women: false,
        babyAndKids: false,
    });

    const [fabric, setFabric] = useState({
        cotton: false,
        polyester: false,
        wool: false,
    });

    const [occasion, setOccasion] = useState({
        casual: false,
        formal: false,
        party: false,
    });

    const [dropdownOpen, setDropdownOpen] = useState({
        idealFor: false,
        fabric: false,
        occasion: false,
    });

    const resetIdealFor = () => setIdealFor({ men: false, women: false, babyAndKids: false });
    const resetFabric = () => setFabric({ cotton: false, polyester: false, wool: false });
    const resetOccasion = () => setOccasion({ casual: false, formal: false, party: false });

    const toggleDropdown = (category) => {
        setDropdownOpen((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    return (
        <>
            {isMobile ? (
                <div className={`filter_modal ${hideFilter ? 'open' : ''}`}>
                    <div className="filter_modal_content">
                        <button   onClick={() => setHideFilter(false)}>Close</button>
                        <div className="filter-category">
                            <div className="filter-header" onClick={() => toggleDropdown('idealFor')}>
                                <h4>Ideal For</h4>
                                <span className="icon-end">
                                    {dropdownOpen.idealFor ? <i className="pi pi-chevron-up"></i> : <i className="pi pi-chevron-down"></i>}
                                </span>
                            </div>
                            {dropdownOpen.idealFor && (
                                <>
                                    <button onClick={resetIdealFor} className="unselect-all">Unselect all</button>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="men"
                                            name="men"
                                            checked={idealFor.men}
                                            onChange={(e) => setIdealFor({ ...idealFor, men: e.target.checked })}
                                        />
                                        <label htmlFor="men">Men</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="women"
                                            name="women"
                                            checked={idealFor.women}
                                            onChange={(e) => setIdealFor({ ...idealFor, women: e.target.checked })}
                                        />
                                        <label htmlFor="women">Women</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="babyAndKids"
                                            name="babyAndKids"
                                            checked={idealFor.babyAndKids}
                                            onChange={(e) => setIdealFor({ ...idealFor, babyAndKids: e.target.checked })}
                                        />
                                        <label htmlFor="babyAndKids">Baby & Kids</label>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="filter-category">
                            <div className="filter-header" onClick={() => toggleDropdown('fabric')}>
                                <h4>Fabric</h4>
                                <span className="icon-end">
                                    {dropdownOpen.fabric ? <i className="pi pi-chevron-up"></i> : <i className="pi pi-chevron-down"></i>}
                                </span>
                            </div>
                            {dropdownOpen.fabric && (
                                <>
                                    <button onClick={resetFabric} className="unselect-all">Unselect all</button>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="cotton"
                                            name="cotton"
                                            checked={fabric.cotton}
                                            onChange={(e) => setFabric({ ...fabric, cotton: e.target.checked })}
                                        />
                                        <label htmlFor="cotton">Cotton</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="polyester"
                                            name="polyester"
                                            checked={fabric.polyester}
                                            onChange={(e) => setFabric({ ...fabric, polyester: e.target.checked })}
                                        />
                                        <label htmlFor="polyester">Polyester</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="wool"
                                            name="wool"
                                            checked={fabric.wool}
                                            onChange={(e) => setFabric({ ...fabric, wool: e.target.checked })}
                                        />
                                        <label htmlFor="wool">Wool</label>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="filter-category">
                            <div className="filter-header" onClick={() => toggleDropdown('occasion')}>
                                <h4>Occasion</h4>
                                <span className="icon-end">
                                    {dropdownOpen.occasion ? <i className="pi pi-chevron-up"></i> : <i className="pi pi-chevron-down"></i>}
                                </span>
                            </div>
                            {dropdownOpen.occasion && (
                                <>
                                    <button onClick={resetOccasion} className="unselect-all">Unselect all</button>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="casual"
                                            name="casual"
                                            checked={occasion.casual}
                                            onChange={(e) => setOccasion({ ...occasion, casual: e.target.checked })}
                                        />
                                        <label htmlFor="casual">Casual</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="formal"
                                            name="formal"
                                            checked={occasion.formal}
                                            onChange={(e) => setOccasion({ ...occasion, formal: e.target.checked })}
                                        />
                                        <label htmlFor="formal">Formal</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="party"
                                            name="party"
                                            checked={occasion.party}
                                            onChange={(e) => setOccasion({ ...occasion, party: e.target.checked })}
                                        />
                                        <label htmlFor="party">Party</label>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="filter_section">
                    <div className="filter-category">
                        <div className="filter-header" onClick={() => toggleDropdown('idealFor')}>
                            <h4>Ideal For</h4>
                            <span className="icon-end">
                                {dropdownOpen.idealFor ? <i className="pi pi-chevron-up"></i> : <i className="pi pi-chevron-down"></i>}
                            </span>
                        </div>
                        {dropdownOpen.idealFor && (
                            <>
                                <button onClick={resetIdealFor} className="unselect-all">Unselect all</button>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="men"
                                        name="men"
                                        checked={idealFor.men}
                                        onChange={(e) => setIdealFor({ ...idealFor, men: e.target.checked })}
                                    />
                                    <label htmlFor="men">Men</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="women"
                                        name="women"
                                        checked={idealFor.women}
                                        onChange={(e) => setIdealFor({ ...idealFor, women: e.target.checked })}
                                    />
                                    <label htmlFor="women">Women</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="babyAndKids"
                                        name="babyAndKids"
                                        checked={idealFor.babyAndKids}
                                        onChange={(e) => setIdealFor({ ...idealFor, babyAndKids: e.target.checked })}
                                    />
                                    <label htmlFor="babyAndKids">Baby & Kids</label>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="filter-category">
                        <div className="filter-header" onClick={() => toggleDropdown('fabric')}>
                            <h4>Fabric</h4>
                            <span className="icon-end">
                                {dropdownOpen.fabric ? <i className="pi pi-chevron-up"></i> : <i className="pi pi-chevron-down"></i>}
                            </span>
                        </div>
                        {dropdownOpen.fabric && (
                            <>
                                <button onClick={resetFabric} className="unselect-all">Unselect all</button>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="cotton"
                                        name="cotton"
                                        checked={fabric.cotton}
                                        onChange={(e) => setFabric({ ...fabric, cotton: e.target.checked })}
                                    />
                                    <label htmlFor="cotton">Cotton</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="polyester"
                                        name="polyester"
                                        checked={fabric.polyester}
                                        onChange={(e) => setFabric({ ...fabric, polyester: e.target.checked })}
                                    />
                                    <label htmlFor="polyester">Polyester</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="wool"
                                        name="wool"
                                        checked={fabric.wool}
                                        onChange={(e) => setFabric({ ...fabric, wool: e.target.checked })}
                                    />
                                    <label htmlFor="wool">Wool</label>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="filter-category">
                        <div className="filter-header" onClick={() => toggleDropdown('occasion')}>
                            <h4>Occasion</h4>
                            <span className="icon-end">
                                {dropdownOpen.occasion ? <i className="pi pi-chevron-up"></i> : <i className="pi pi-chevron-down"></i>}
                            </span>
                        </div>
                        {dropdownOpen.occasion && (
                            <>
                                <button onClick={resetOccasion} className="unselect-all">Unselect all</button>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="casual"
                                        name="casual"
                                        checked={occasion.casual}
                                        onChange={(e) => setOccasion({ ...occasion, casual: e.target.checked })}
                                    />
                                    <label htmlFor="casual">Casual</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="formal"
                                        name="formal"
                                        checked={occasion.formal}
                                        onChange={(e) => setOccasion({ ...occasion, formal: e.target.checked })}
                                    />
                                    <label htmlFor="formal">Formal</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="party"
                                        name="party"
                                        checked={occasion.party}
                                        onChange={(e) => setOccasion({ ...occasion, party: e.target.checked })}
                                    />
                                    <label htmlFor="party">Party</label>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Filter;
