import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Login Please </h1>
            <form >
                   <input type="email" placeholder='Your email'/>
                    <br/>
                    <input type="password" placeholder='your password'/>
                    <br />
                    <input type="submit" value="Register"/>

            </form>
        </div>
    );
};

export default Login;