import React, { useState } from 'react'
import axios from 'axios';
const apiEndpoint = 'http://localhost:3003/api';

export default function Signup() {
    const [user, setUser] = useState();
    console.log(user);
    const handleSignup = async () => {
        try {
            const { data } = await axios.post(`${apiEndpoint}/signup`, {
                user: user
            });
            return data;
        } catch (err) {
            console.log1(err);
        }
    }

    return (
        <div className='signup'>
            <h1>Signup</h1>
            <div className='signup__input'>
                <div> </div>
                <tr><td>Employee Id: </td><td><input type="text" onChange={(e) => setUser({ ...user, employee_ID: e.target.value })} /></td></tr>
            </div>
            <div className='signup__input'>
                <div ></div>
                <tr><td>First Name: </td><td><input type="text" onChange={(e) => setUser({ ...user, firstName: e.target.value })}/> </td></tr>
            </div>
            <div className='signup__input'>
                <div></div>
                <tr><td>Last Name: </td><td><input type="text" onChange={(e) => setUser({ ...user, lastName: e.target.value })} /></td></tr>
            </div>
            <div className='signup__input'>
                <div></div>
                <tr><td>Date of Birth: </td><td><input type="date" onChange={(e) => setUser({ ...user, dob: e.target.value })} /></td></tr>
            </div>
            <div className='signup__input'>
                <div></div>
                <tr><td>Contact Number: </td><td><input type="text" onChange={(e) => setUser({ ...user, contact: e.target.value })} /> </td></tr>
            </div>
            <div className='signup__input'>
                <div></div>
                <tr><td>Password: </td><td><input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} /> </td></tr>
            </div>
            <button style={{ margin: "10px" }} onClick={handleSignup}>Signup</button>
        </div>
    )
}
