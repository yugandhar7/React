       import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setdata] = useState({
        name: "",
        age: "",
        gender: "",

    });
    const { name, age, gender } = data;
    const onchange = (e) => {
        setdata({ ...data, [e.target.name]: [e.target.value] })
    }
    const onsubmit = (e) => {
        e.preventDefault();
        e.target.reset()


        axios.post("https://temple-787ce-default-rtdb.firebaseio.com/yug.json", data)



    }

    return (
        <div className="container" style={{ border: "2px solid black", width: "auto" }}>
            <center>
                <form onSubmit={onsubmit} autoComplete="off" >
                    <input style={{ border: "2px solid blue", flexBasis: "400px", display: "flex" }} type="text" value={name} name="name" onChange={onchange} placeholder="name" /><br />
                    <input style={{ border: "2px solid blue", flexBasis: "400px", display: "flex" }} type="text" value={age} name="age" onChange={onchange} placeholder="age" /><br />
                    <input style={{ border: "2px solid blue", flexBasis: "400px", display: "flex" }} type="text" value={gender} name="gender" onChange={onchange} placeholder="gendrer" /><br />
                    <button className="btn btn-success" type="submit" value="submit" >submit</button>
                </form>
            </center>
        </div>
    )

}
export default App
