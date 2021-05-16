import React from "react";
import { GiShoppingBag } from 'react-icons/gi';

function LoginAndSignUp(props) {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    return (
        <section style={{ textAlign: 'center' }} >
            <div>
                <div className="Website_Trade_Mark" >
                    <GiShoppingBag size="30" />
                    <p className="Website_Name" >Order Now</p>
                </div>
                {/* <GiShoppingBag size="30" style={{ float: 'left', marginRight: "-30%", marginLeft: "20px" }} /> */}
                <h2>Welcome to Our Website</h2>
                <input
                    size="40"
                    placeholder="Email..."
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="SignIn_SignUp_Inputs"
                />
                <p>{emailError}</p>
                <input
                    size="40"
                    placeholder="Password..."
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="SignIn_SignUp_Inputs"
                />
                <p>{passwordError}</p>
                <br />
                <br />
                <div>
                    {hasAccount ? (
                        <>
                            <button className="SignUp_And_SignIn" onClick={handleLogin}>Sign in</button>
                            <p style={{ fontWeight: "bolder" }} >
                                Don't have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                            </p>
                        </>
                    ) : (
                        <>
                            <button className="SignUp_And_SignIn" onClick={handleSignup}>Sign up</button>
                            <p style={{ fontWeight: "bolder" }} >
                                Have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default LoginAndSignUp;
