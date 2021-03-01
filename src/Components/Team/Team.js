import React from 'react';


const Team = (props) => {
    const teamPlayer = props.team;



    return (
        <div className="card">
            <div className="card-body">
                <h4>My Team</h4>
                <p>Player Added : {teamPlayer.length}</p>
                <p>Total Salary : {teamPlayer.salary}</p>
                <hr></hr>
                <table className="table table-bordered">
                    <tr>
                        <th>Player Name</th>
                        <th>Salary</th>
                    </tr>

                    {
                        teamPlayer.map(member =>
                            <tr>
                                <td>{member.name}</td>
                                <td>{member.salary}</td>
                            </tr>
                        )
                    }
                </table>
            </div>
        </div>

    );
}

export default Team;