import React, { useState } from "react";
import { useEffect } from "react";
import './Menu.css';
import { fetchMenuItems } from '../../shared/apiConfig';

const Menu = () => {
    const [activeTab, setActiveTab] = useState('kaffe');
    const [dropdownTab, setDropdownTab] = useState('kaffe');
    const [varmDrikke, setVarmDrikke] = useState([]);
    const [kaldDrikke, setKaldDrikke] = useState([]);
    const [smoothie, setSmoothie] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //Fetch menu items for kaffevarm as default
    useEffect(() => {
        handleFetchMenuItems('KaffeVarm');
    }, []);

    const handleFetchMenuItems = async (category) => {
        setLoading(true);
        console.log(`Fetching menu items for category: ${category}`);
        setError(null);

        // Clear other category states
        setVarmDrikke([]);
        setKaldDrikke([]);
        setSmoothie([]);
        
        try {
            const data = await fetchMenuItems(category);
            console.log(`Fetched Data for ${category}:`, data);

            if (category === 'KaffeVarm') {
                setVarmDrikke(data);
            } else if (category === 'KaffeKald') {
                setKaldDrikke(data);
            } else if (category === 'Smoothie') {
                setSmoothie(data);
            } else if (category === 'MatchaVarm'){
                setVarmDrikke(data);
            } else if (category === 'MatchaKald'){
                setKaldDrikke(data);
            }
        } catch (error) {
            console.error(`Error fetching menu items for category ${category}:`, error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const dropdownContent = {
        kaffe: [
            { name: "VARME DRIKKER", action: () => handleFetchMenuItems('KaffeVarm') },
            { name: "KALDE DRIKKER", action: () => handleFetchMenuItems('KaffeKald') },
        ],
        matcha: [
            { name: "VARME DRIKKER", action: () => handleFetchMenuItems('MatchaVarm') },
            { name: "KALDE DRIKKER", action: () => handleFetchMenuItems('MatchaKald') },
        ],
        smoothie: [
            { name: "Smoothie Ingredients", action: () => handleFetchMenuItems('Smoothie') },
        ],
    };

    const handleTabClick = (tab) => {
        if (dropdownContent[tab]) {
            setActiveTab(tab);
            setDropdownTab(dropdownTab === tab ? null : tab);
        } else {
            setActiveTab(tab);
            setDropdownTab(null);
        }
    };

    return (
        <main className="menu">
            <div className="menu-box">
                <div className="menu-header">
                    {Object.keys(dropdownContent).map((tab) => (
                        <div key={tab} className="menu-tab">
                            <span
                                className={activeTab === tab ? "active" : ""}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab.toUpperCase()}
                            </span>
                            {dropdownTab === tab && (
                                <div className="dropdown-menu">
                                    {dropdownContent[tab].map((item, index) => (
                                        <span
                                            key={index}
                                            className="dropdown-item"
                                            onClick={() => {
                                                item.action && item.action(); // Perform the action for the menu item
                                                setDropdownTab(null); // Close the dropdown
                                            }}
                                        >
                                            {item.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="menu-pictures">
    {loading ? (
        <p>Loading...</p>
    ) : error ? (
        <p>Error: {error}</p>
    ) : (
        <>
            {(varmDrikke || []).length > 0 && (
                <div>
                    <h3>Varme Drikker</h3>
                    <div className="menu-items">
                        {(varmDrikke || []).map((drink, index) => (
                            <div key={index} className="menu-item">
                                <img src={drink.imageUrl} alt={drink.name} className="menu-item-image" />
                                <p>{drink.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {(kaldDrikke || []).length > 0 && (
                <div>
                    <h3>Kalde Drikker</h3>
                    <div className="menu-items">
                        {(kaldDrikke || []).map((drink, index) => (
                            <div key={index} className="menu-item">
                                <img src={drink.imageUrl} alt={drink.name} className="menu-item-image" />
                                <p>{drink.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {(smoothie || []).length > 0 && (
                <div>
                    <h3>Smoothie</h3>
                    <div className="menu-items">
                        {(smoothie || []).map((item, index) => (
                            <div key={index} className="menu-item">
                                <img src={item.imageUrl} alt={item.name} className="menu-item-image" />
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )}
</div>
        </div>
             <div className="button-group">
            <button className="btn-green">BESTILL MED FOODORA</button>
            <button className="btn-blue">BESTILL MED WOLT</button>
        </div> 
        </main>
    );
};

export default Menu;