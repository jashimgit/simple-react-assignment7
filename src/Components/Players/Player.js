import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {

	const { id, name, salary, picture, country, playerType } = props.player;
	const handleAddPlayer = props.addPlayerBtn;
	return (
		<div className="col-md-4 mt-3">
			<div className="card h-100">
				<img src={picture} className="card-img-top" alt={name} />
				<div className="card-body">
					<p>Player Id: <b>{id}</b></p>
					<h5 className="card-text">{name}</h5>
					<p className="card-text">Player Type:<b> {playerType}</b></p>
					<p className="card-text">Country : <b> {country} </b></p>
					<p className="card-text"> Salary: <FontAwesomeIcon icon={faRupeeSign} /> <b> {salary}</b></p>
					<button onClick={() => handleAddPlayer(props.player)} className="btn btn-primary">Add Player</button>
				</div>
			</div>
		</div>
	);
}


export default Player;