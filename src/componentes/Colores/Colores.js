import { useState } from 'react';
import './Colores.css';

function Colores() {
    const [highlighted, setHighlighted] = useState({});
    const [selected, setSelected] = useState(null);

    function handleClick(event) {
        const id = event.target.id;

        setSelected(id);
        setHighlighted((prevHighlighted) => {
            const newHighlighted = {};
            Object.keys(prevHighlighted).forEach((key) => {
                if (key === id) {
                    newHighlighted[key] = true;
                } else {
                    newHighlighted[key] = false;
                }
            });
            return newHighlighted;
        });
    }

    return (
        <section className="item_Color">
            <div className={`div-1 ${selected === 'div-1' || highlighted['div-1'] ? 'highlighted' : ''}`} id="div-1" onClick={handleClick}></div>
            <div className={`div-2 ${selected === 'div-2' || highlighted['div-2'] ? 'highlighted' : ''}`} id="div-2" onClick={handleClick}></div>
            <div className={`div-3 ${selected === 'div-3' || highlighted['div-3'] ? 'highlighted' : ''}`} id="div-3" onClick={handleClick}></div>
        </section>
    );
}

export default Colores;
