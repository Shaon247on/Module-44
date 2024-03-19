import PropTypes from 'prop-types';
const Link = ({route}) => {
    const {path, name} = route
    return (
        <li className="mr-10 hover:bg-yellow-400 px-2" ><a href={path}>{name}</a></li>
    );
};

export default Link;
Link.propTypes ={
    route: PropTypes.object.isRequired
}