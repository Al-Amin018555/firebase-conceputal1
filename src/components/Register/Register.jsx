const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        console.log(name, photo, email, password, confirmPassword);
    }
    return (
        <div className="max-w-1/3 mt-10 mx-auto border-2 p-4 border-red-400 rounded-lg">
            <form onSubmit={handleRegister}>
                <div>
                    <p>Name</p>
                    <input name="name" type="text" placeholder="Your Name" className="input w-full" />
                </div>
                <div>
                    <p>Photo</p>
                    <input name="photo" type="text" placeholder="Photo" className="input w-full" />
                </div>
                <div>
                    <p>Email</p>
                    <input name="email" type="email" placeholder="Your Email" className="input w-full" />
                </div>
                <div>
                    <p>Password</p>
                    <input name="password" type="password" placeholder="Password" className="input w-full" />
                </div>
                <div>
                    <p>Confirm Password</p>
                    <input name="confirmPassword" type="password" placeholder="Confirm Password" className="input w-full" />
                </div>
                
                <button className="btn btn-primary w-full mt-4">Register</button>
            </form>
        </div>
    );
};

export default Register;