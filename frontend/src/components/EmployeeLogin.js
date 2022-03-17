import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
const apiEndpoint = 'http://localhost:3003/api';

export default function Login() {
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const history = useHistory();

    const handleLogin = async () => {
        try {
            const { data } = await axios.post(`${apiEndpoint}/login`, {
                user: user
            });

            if (data) {
                history.push({
                    pathname: "/report",
                    state: {
                        employee_ID: user.employee_ID
                    }
                });
            }
            else {
                setError(data)
            }
        } catch (err) {
            console.log1(err);
        }
    }
    return (
        <div className='login'>
            <h1>Login</h1>
            <div>
                <div className='signup__input'>
                    <div></div>
                    <tr><td>Employee Id: </td><td><input type="text" onChange={(e) => setUser({ ...user, employee_ID: e.target.value })} /></td></tr>
                </div>
                <div className='signup__input'>
                    <div> </div>
                    <tr><td>Password: </td><td><input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} /></td></tr>
                </div>
            </div>
            {/* <input type="text" name="employee_ID" onChange={(e) => setUser({ ...user, employee_ID: e.target.value })} />
            <input type="password" name="password" onChange={(e) => setUser({ ...user, password: e.target.value })} /> */}
            <button style={{ margin: "10px" }} onClick={handleLogin}>Login</button>
        </div>
    )
}
