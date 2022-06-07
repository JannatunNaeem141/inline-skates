import React, { useEffect, useState } from 'react';
import Skate from '../Skate/Skate';
import './Skates.css'

const Skates = () => {
    const [skating, setSkating] = useState([]);

    useEffect(() => {
        fetch('SkatesData.json')
            .then(res => res.json())
            .then(data => setSkating(data))
    }, []);
    console.log(skating);

    return (
        <div className='skates-container'>
            {
                skating.map(skate => <Skate
                    key={skate.id}
                    skate={skate}
                ></Skate>)
            }
        </div>
    );
};

export default Skates;