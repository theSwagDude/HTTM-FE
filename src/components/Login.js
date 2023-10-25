import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import './Login.css';


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function login(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/login", {
                email: email,
                password: password,
            }).then((res) => {
                console.log(res.data);

                if (res.data.message == "email") {
                    alert("Email doesn't exist");
                }
                else if (res.data.message == "Login Success") {
                    navigate('/scan');
                }
                else {
                    alert("Incorrect Email or Password doesn't match");
                }
            }, fail => {
                console.error(fail);
            });
        }


        catch (err) {
            alert(err);
        }

    }






    return (
        <div>
            {/* <Link
                to={{
                    pathname: `/register`,
                }}
            >
                <button>Register</button>
            </Link> */}

            <h1 style={{ textAlign: 'center' }}>Login</h1>

            {/* <div class="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}> */}
            <div>
                <form>
                    <div class="form-group">
                        <div class="input-group">
                            <label>Email</label>
                            <input type="email" class="form-control" id="email"

                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}

                            />
                        </div>

                    </div>

                    <div class="form-group">
                        <div class="input-group">
                            <label>Password</label>
                            <input type="password" class="form-control" id="password"

                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <button type="submit" onClick={login} >Login</button>
                </form>
            </div>
            <Link
                to={{
                    pathname: `/register`,
                }}
            >
                <button>Register</button>
            </Link>
        </div>


    );
}

export default Login;