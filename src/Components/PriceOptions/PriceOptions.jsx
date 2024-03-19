// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import PriceOption from '../PriceOption/PriceOption';
const PriceOptions = () => {
    const [priceOptions, setPriceOptions] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPriceOptions(data))
    }, [])



    return (
        <div className='m-12'>
            <h2 className='text-5xl mb-8 font-bold'>Best Prices in the town</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;