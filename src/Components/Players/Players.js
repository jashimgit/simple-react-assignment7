import Player from './Player';

const Players = (props) => {
	const player = props.players;
	const addPlayerBtn = (player) => {
		console.log(player);
	}
	return (
		<div className="container mt-4">
			<div className="row">
				<div className="col-md-8">
					<div className="row">
						{
							player.map(player =>
								<Player
									player={player}
									key={player.playerCode}
									addPlayerBtn={addPlayerBtn}>

								</Player>
							)
						}
					</div>
				</div>

				<div className="col-md-4 mt-3">
					<div className="card">
						<div className="card-body">
							<h4>My Team</h4>
							<p>Player Added : 0</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Players;