import Player from './Player';

const Players = (props) => {


	const player = props.players;



	return (
		<div className="container mt-4">
			<div className="row">
				<div className="col-md-8">
					<div className="row">
						{
							player.map(player => <Player player={player} key={player.key}></Player>)
						}
					</div>
				</div>

				<div className="col-md-4">
				</div>
			</div>
		</div>
	);
}

export default Players;