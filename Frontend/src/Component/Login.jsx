import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login_loading, login_success, login_failure } from '../Redux/Login/action'
import { useNavigate } from 'react-router-dom';

//awk that dispatch takes action object and dispatch the store
//so for the action object we are using the action creator that we are already defined in the action.js file
//so we remember that action creator always return the object so that why we are using the dispatch(action_creator)

export const Login = () => {
    const [username, setUser] = useState('');
    const [password, setPass] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log(username, password);
        const useDetails = {
            username,
            password
        }
        dispatch(login_loading());
        fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
            method: "POST",
            body: JSON.stringify(useDetails),
            headers: {
                "Content-type": "Application/json"
            }
        }).then((res) => res.json())
            .then((res) => {
                console.log("The res is", res);
                dispatch(login_success(res.token))
                navigate('/');
            })
            .catch(err => dispatch(login_failure()))

    }
    return (
        <>
            <input type="text" placeholder="Enter the useraname..." onChange={(e) => setUser(e.target.value)} value={username} /> <br />
            <input type="text" placeholder="Enter the password" onChange={(e) => setPass(e.target.value)} value={password} /> <br />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}