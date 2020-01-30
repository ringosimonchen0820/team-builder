import React, {useState} from 'react';
import './App.css';
//import Person from './components/Person';
//import Form from './components/Form';
function App() {
  //Team will contain an array of objects as its state
  //Each will be a member
  const[team, setTeam]= useState([{
    name: 'John Doe',
    email: 'person@email.com',
    role: "Gentleman"
  }]);

  //Creating seter to add a new member
  const addTeamMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeam([...team, newMember]);
  }
  return (
    <div className="App">
      <header className="App-header">
          <h1>My Team</h1>
          <div class= 'team'>
          {
            team.map((el) => (<Person data={el}/>))
          }
        </div>
      </header>
      <div>
        <h2>Add A Team member</h2>
          <Form addTeamMember={addTeamMember}/>
      </div>
    </div>
  );
}

export default App;
© 2020 GitHub, Inc.
