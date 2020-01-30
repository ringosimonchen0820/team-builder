import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Form = (props) => {
    const [person, setPerson] = useState({
        name:"",
        email: "",
        role:"Unknown"
    })

    const handleChanges = el => {
        console.log([el.target.name])
        console.log(el.target)
        setPerson({
            ...person,
            [el.target.name]:el.target.value
        })
    }

    const submitForm = el => {
        el.preventDefault();
        props.addTeamMember(person);
        setPerson({name:"", email:"", role:"Unknown"})
    }


    return(
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name:</label>
            <input 
            type="text" 
            id="name" 
            name="name"
            placeholder="name" 
            onChange={handleChanges}
            required 
            minLength="2"
            maxLength="42"
            size= "10"
            value={person.name}
            />
            
            <label htmlFor="email"> Email:</label>
            <input
            name ="email"
            type="email"
            id="email"
            placeholder="email" 
            onChange={handleChanges}
            required 
            minLength="5"
            maxLength="42"
            size= "10"
            value={person.email}
            />
            
            <label htmlFor="role"> Role: </label>
            <select
            name="role" 
            id="role"
            required
            onChange={handleChanges}
            value={person.role}
            >
                <option value="Unknown">Unknown</option>
                <option value="Noobie">Noobie</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Pro">Pro</option>
            </select>
            <button type="submit">Submit</button>         
        </form>
    )

}

export default Form;