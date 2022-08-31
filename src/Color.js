import React, { useState } from 'react' 

const Color = ({getColor}) => {
    
    const [activeColor, setActiveColor] = useState(null)

    const HandleChange = (e) => {
        const {value} = e.target
        setActiveColor(value)
        getColor(value)
    }

return (
    <div className='input-content' > 

        <input 
            className='input-text' 
            placeholder='Впиши цвет...' 
            type='text'
            onChange={HandleChange}
            value={activeColor}
        
        ></input>

    </div>





)

}










export default Color;