import React, { useState } from 'react';

const CheckboxComponent = () => {
    const [isChecked, setIsChecked] = useState(false); 

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked); 
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked} 
                    onChange={handleCheckboxChange} 
                />
                Marcar
            </label>
            <p>{isChecked ? 'Estou marcado' : 'Não estou marcado'}</p>
        </div>
    );
};

export default CheckboxComponent;
