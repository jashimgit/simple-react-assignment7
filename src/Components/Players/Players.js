import React, {useState} from 'react';

import Player from './Player';
import Team from '../Team/Team';

const Players = (props) => {
	const player = props.players;
	const [team, setTeam] = useState([]);
	

	const addPlayerBtn = (player) => {
		// console.log(player);
		const myTeam = [...team, player];
		setTeam(myTeam);
		// console.log(team);
		
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
					<Team team={team}></Team>
				</div>
			</div>
		</div>
	);
}

export default Players;