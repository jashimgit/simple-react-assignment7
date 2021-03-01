import React  from 'react';


const Team = (props) => {
    const teamPlayer = props.team;
    


    return (
        <div className="card">
            <div className="card-body">
                <h4>My Team</h4>
                <p>Player Added : {teamPlayer.length}</p>
                <hr></hr>
                <ul>
                    {
                        teamPlayer.map(member => <li>{member.name}</li>)
                    }
                </ul>
            </div>
        </div>

    );
}

export default Team;