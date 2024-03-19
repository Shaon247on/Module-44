import PropTypes from 'prop-types';
import Features from '../Features/Features';
const PriceOption = ({ option }) => {
    const { id, name, price, description, features } = option
    return (
        <div className='bg-blue-200 rounded-lg p-4 text-black text-center felx flex-col'>
            <h2>
                <span className='text-7xl font-bold'>{price}.00 $</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h4 className='text-3xl font-semibold'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                }
            </div>
            <button className='btn bg-slate-400 text-black w-full'>Buy Now</button>
        </div>
    );
};

export default PriceOption;

PriceOption.propTypes = {
    option: PropTypes.object
}