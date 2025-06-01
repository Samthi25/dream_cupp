import React, { useState } from "react";
//import React from "react";
import "./DreamCup.css";

const coffeeOptions = {
    espresso: {
        name: "Espresso",
        description: "En intens og konsentert kaffe med fyldig smak og engyllen crema på toppen. Perfekt alene eller som base for andre kaffedrikker.",
        strength: "5/5",
        caffeine: "60mg per shot",
        recommended: "30ml per servering",
        price: 25,
        image: "https://example.com/espresso.jpg",
    },
    cappuccino: {
        name: "Cappuccino",
        description: "En espresso med steamet melk and melkeskum for en fyldig og kremet opplevelse.",
        strength: "4/5",
        caffeine: "60mg per shot",
        recommended: "150ml per servering",
        price: 30,
        image: "https://example.com/cappuccino.jpg",
    },
    americano: {
        name: "Americano",
        description: "En espresso fortrynnet med varmt vann for en mildere smak og større kopp",
        strength: "3/5",
        caffeine: "60mg per shot",
        recommended: "150ml per servering",
        price: 30,
        image: "https://example.com/americano.jpg",
    },
};

const Sidebar = () => {

    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubDropdown, setOpenSubDropdown] = useState(null);

    //State for selected coffee
    const [selectedCoffee, setSelectedCoffee] = useState(null);

    //Function to handle coffee selection
    const handleSelectCoffee = (type) => {
        setSelectedCoffee(coffeeOptions[type]);
    };

    return (
        <div className="container">
            <h1 className="header">LAG DIN DRØMMEKOPP</h1> 

            <div className="main-content">
            <aside className="sidebar">
            <h2>Ingredienser</h2>
            <ul>
                {/* Basis Ingredienser */}
                <li onClick={() => setOpenDropdown(openDropdown === "basis" ? null : "basis")} className="dropdown-toggle">
                    Basis Ingredienser
                    <ul className={`dropdown ${openDropdown ==="basis" ? "show" : ""}`}>

                        {/* Kaffe  */}
                        <li onClick={(e) => { e.stopPropagation(); setOpenSubDropdown(openSubDropdown === "kaffe" ? null : "kaffe");}} 
                        className="dropdown-toggle">
                            Kaffe
                            <ul className={`dropdown sub-dropdown ${openSubDropdown === "kaffe" ? "show" : ""}`}>
                                <li onClick={() =>handleSelectCoffee("espresso")}>Espresso</li>
                                <li onClick={() =>handleSelectCoffee("cappucinno")}>Cappuccino</li>
                                <li>Latte</li>
                                <li onClick={() =>handleSelectCoffee("americano")}>Americano</li>
                                <li>Espresso</li>

                            </ul>
                        </li>
                        <li>Te</li>

                    </ul>
                </li>

                {/* Meieri*/}
                <li onClick={() => setOpenDropdown(openDropdown === "meieri" ? null : "meieri")}
                    className="dropdown-toggle">
                    Meieri
                    <ul className={`dropdown ${openDropdown === "meieri" ? "show" : ""}`}>
                        <li>Helmelk</li>
                        <li>krem</li>
                        <li>Kremost</li>
                        <li>Iskrem</li>
                        <li>Mandelmelk</li>
                    </ul>
                </li>
                {/* Topping*/}
                <li onClick={() => setOpenDropdown(openDropdown === "topping" ? null : "topping")} className="dropdown-toggle">
                    Topping
                    <ul className={`dropdown ${openDropdown === "topping" ? "show" : ""}`}>
                        <li>Kokosflak</li>
                        <li>Oreo kjeks</li>
                        <li>Digestive</li>
                        <li>After Eight</li>
                        <li>Peanøtter-smør</li>
                        <li>Sukker</li>
                        <li>Kardemomme</li>
                        <li>Salt</li>
                    </ul>
                </li>
                {/* Sirup*/}
                <li onClick={() => setOpenDropdown(openDropdown === "sirup" ? null : "sirup")} className="dropdown-toggle">
                    SIRUP
                    <ul className={`dropdown ${openDropdown ==="sirup" ? "show" : ""}`}>
                        <li>Sjokolade saus</li>
                        <li>Vanilje</li>
                        <li>Kokos sirup</li>
                        <li>Karamell saus</li>
                        <li>Blåbærsaus</li>
                        <li>Mint sirup</li>
                        <li>Hvit sjokolade saus</li>
                        <li>Honning</li>
                        <li>Kondensert melk</li>
                    </ul>
                </li>
                {/* Frukt*/}
                <li onClick={() => setOpenDropdown(openDropdown === "frukt" ? null : "frukt")} className="dropdown-toggle">
                    Frukt
                    <ul className={`dropdown ${openDropdown ==="frukt" ? "show" : ""}`}>
                        <li>Sitron</li>
                        <li>Appelsin</li>
                        <li>Mango</li>
                        <li>Avokado</li>
                        <li>Banan</li>
                    </ul>
                </li>
                {/* Brus */}
                <li onClick={() => setOpenDropdown(openDropdown === "brus" ? null : "brus")} className="dropdown-toggle">
                    BRUS
                    <ul className={`dropdown ${openDropdown ==="brus" ? "show" : ""}`}>
                        <li>Tonic</li>
                        <li>Kokosvann</li>
                    </ul>
                </li>
                <li>Ekstra Ingredienser</li>
            </ul>
        </aside>
        {/* Content Grid */}
        <main className="content">
            {/*Info Box */}
            <div className="box info">
                <h2>Info</h2>
                {selectedCoffee ? (
                    <>
                    <h3>{selectedCoffee.name}</h3>
                    <p>{selectedCoffee.description}</p>
                    <p><strong>Stryke:</strong>{selectedCoffee.strength}</p>
                    <p><strong>Koffein:</strong>{selectedCoffee.caffeine}</p>
                    <p><strong>Anbefalt mengde:</strong>{selectedCoffee.recommended}</p>
                    <p><strong>Pris:</strong>{selectedCoffee.price}NOK</p>
                    </>
                ):(
                    <p>Velg en kaffe for å se informasjon.</p>
                )}
            </div>
            {/*Image Box */}
            <div className="box dream">
                <h2>Drømmekopp</h2>
                {selectedCoffee && (
                    <img 
                        src={selectedCoffee.image}
                        alt={selectedCoffee.name}
                        style={{ width:"100%", maxWidth: "200px", borderRadius: "10px"}}
                    />           
                    )}
            </div>

            {/*Selected choices box */}
            <div className="box valg">
                <h2>Dine valg</h2> 
                {selectedCoffee ? <p>{selectedCoffee.name}</p> : <p>Info valg</p>}
            </div>

            {/*Price Box */}
            <div className="box pris">
                <h2>Pris</h2>
                {selectedCoffee ? (
                    <>
                        <p>{selectedCoffee.name}: {selectedCoffee.price}kr</p>
                        <p><strong>Total:</strong>{selectedCoffee.Price}kr</p>
                    </>
                ) : (
                    <p>Ingen valgt</p> 
                )}
            </div>
        </main>
        </div>
        </div> 
    );
};
export default Sidebar;