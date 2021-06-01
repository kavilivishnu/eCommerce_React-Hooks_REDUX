import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { showContents } from '../Actions/Actions';
// import CheckBox1 from "../MAINLOGIC/CheckBox1";
import LoginAndSignUp from "./LoginAndSignUp";
import fire from "../config/fire";
// import LandingPage from "../CARDS_ON_MAINPAGE/LandingPage";
// import Navigate from "../MAINLOGIC/Navigate";
import Navigate1 from "../MAINLOGIC/Navigate1";
import MainPageCarousel from '../CAROUSEL/MainPageCarousel';
import SideDrawer from "../SIDEDRAWER/SideDrawer";

function LoginLogic() {

    const dispatch = useDispatch();

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);
    const [showCaroursel, setShowCaroursel] = useState(false);

    const showTheContents = true;
    const dontShowTheContents = false;

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    };

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    };

    const handleLogin = (e) => {
        dispatch(showContents(showTheContents));
        e.preventDefault(e);
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log(u);
            })
            .catch((err) => {
                dispatch(showContents(dontShowTheContents));
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                    default:
                        break;
                }
            });
    };

    const handleSignup = () => {
        dispatch(showContents(showTheContents));
        clearInputs();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((u) => {
                console.log(u);
            })
            .catch((err) => {
                dispatch(showContents(dontShowTheContents));
                switch (err.code) {
                    case "auth/email-already-exists":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                    default:
                        break;
                }
            });
    };

    const handleLogout = () => {
        fire.auth().signOut();
        console.log("working");
        dispatch(showContents(dontShowTheContents));
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

    // useEffect(() => {
    //     authListener();
    // }, []);

    useEffect(() => {
        authListener();
        if (user === user) {
            dispatch(showContents(showTheContents));
        }
    }, [showTheContents]);

    return (
        <div>
            {user ? (
                <div>
                    <Navigate1 setShowCaroursel={setShowCaroursel} handleLogout={handleLogout} />
                    <SideDrawer setShowCaroursel={setShowCaroursel} handleLogout={handleLogout} />
                    {showCaroursel ? " " : <MainPageCarousel />}
                    {/* <MainPageCarousel /> */}
                </div>
            ) : (
                <LoginAndSignUp
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                />
            )}
        </div>
    );
}

export default LoginLogic;
