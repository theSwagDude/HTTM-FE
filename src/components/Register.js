import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Register.css';

function Register() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function login() {
        navigate("/login");
    }

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/register", {
                username: username,
                email: email,
                password: password,
                name: name
            }).then((res) => {
                console.log(res.data);

                if (res.data.message == "email") {
                    alert("Duplicated email");
                }
                if (res.data.message == "username") {
                    alert("Duplicated username");
                }
                else if (res.data.message == "Registered sucess") {

                    navigate('/login');
                }
                else {
                    alert("Please fill all fields");
                }
            }, fail => {
                console.error(fail);
            });


        } catch (err) {
            alert(err);
        }

    }

    return (
        <div>

            <div>

                <h1 style={{ textAlign: 'center' }}>Registration</h1>

                <form>
                    <div class="input-group">
                        <label>Name</label>
                        <input type="text" class="form-control" id="name"

                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />

                    </div>

                    <div class="input-group">
                        <label>Email</label>
                        <input type="email" class="form-control" id="email"

                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}

                        />

                    </div>

                    <div class="input-group">
                        <label>Username</label>
                        <input type="text" class="form-control" id="username"

                            value={username}
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }}

                        />

                    </div>

                    <div class="input-group">
                        <label>Password</label>
                        <input type="password" class="form-control" id="password"

                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}

                        />
                    </div>

                    <div class="input-group">
                        <label>Confirm Password</label>
                        <input type="password" class="form-control" id="confirmPassword"

                            value={confirmPassword}
                            onChange={(event) => {
                                setConfirmPassword(event.target.value);
                            }}

                        />
                    </div>

                    <button type="submit" class="btn btn-primary mt-4" onClick={save} >Create Account</button>


                </form>
            </div>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Register;