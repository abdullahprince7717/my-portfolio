
import PropTypes from 'prop-types';

function SkillCard(props) {
    return (
        <div className='flex flex-col items-center justify-center m-2 shadow-2xl'>
            <img className="w-20 h-20" src={props.icon} alt={props.name} />
            <p className="text-md text-slate-300 my-2">{props.name}</p>
        </div>
    )
}

SkillCard.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default SkillCard