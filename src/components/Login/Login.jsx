const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <div className="max-w-1/3 mt-10 mx-auto border-2 p-4 border-red-400 rounded-lg">
            <form onSubmit={handleLogin}>
                <div>
                    <p>Email</p>
                    <input name="email" type="email" placeholder="Your Email" className="input w-full" />
                </div>
                <div>
                    <p>Password</p>
                    <input name="password" type="password" placeholder="Password" className="input w-full" />
                </div>
                <button className="btn btn-primary w-full mt-4">Login</button>
            </form>
        </div>
    );
};

export default Login;