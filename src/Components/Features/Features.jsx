import PropTypes from 'prop-types';
import { RiCheckDoubleFill } from "react-icons/ri";

const Features = ({feature}) => {
    console.log(feature)
    return (
        <div className='text-start'>
            <p className='text-wrap flex items-center gap-3 mx-3'><RiCheckDoubleFill className='hover:text-blue-700'></RiCheckDoubleFill>{feature}</p>
        </div>
    );
};

export default Features;
Features.propTypes= {
    feature: PropTypes.string
}