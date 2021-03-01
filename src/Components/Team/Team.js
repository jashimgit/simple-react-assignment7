import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
const Team = (props) => {
    const teamPlayer = props.team;
    let totalSalary = 0;
    for (let i = 0; i < teamPlayer.length; i++) {
        const salary = teamPlayer[i].salary;
        totalSalary = salary + totalSalary;
    }

    return (
        <div className="card">
            <div className="card-body">
                <h4>My IPL Team</h4>
                <p>Player Added :<b> {teamPlayer.length}</b></p>
                <p>Total Salary :<b> <FontAwesomeIcon icon={faRupeeSign} /> {totalSalary}</b></p>
                <hr></hr>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                            teamPlayer.map(member =>

                                <tr>
                                    <td>{member.name}</td>
                                    <td>{member.salary}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default Team;