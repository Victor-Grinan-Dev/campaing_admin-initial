import React from 'react';
import api from '../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import { useNavigate } from 'react-router-dom';

const Form = ({route, method}) => {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirm, setConfirm] = React.useState('');
    const [Loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            const res = api.post(route, {username: userName, password: password});
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate('/profile')
            }
            else{
                if(password !== confirm){
                    alert("passwords do not match")
                    return
                }
                navigate('/login')
            }
        } catch (error) {
            
        }finally{
            setLoading(false)
        }
    }

    const name = method === "login" ? "Login": "Register"

  return (
    <form  onSubmit={handleSubmit} >
        <p>{name}</p>
        <input type="text" name="username" placeholder="username" value={userName} onChange={e=>setUserName(e.target.value)}/>
        <input type="password" name="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        {
            method === "register" && <input type="password" name="confirm" placeholder="confirm password" value={confirm} onChange={e=>setConfirm(e.target.value)}/>        
        }
        <button type="submit">{name}</button>
    </form>
  )
}

export default Form;