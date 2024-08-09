import ProfileContainer from "../profile/profileContainer ";
import classes from "./loginPage.module.css"


const LoginPage = (props) => {

    if (props.state.auth.isAuth) return <ProfileContainer />
    return (
        <div className={classes.loginContainer}>
            <h1 className={classes.login}>LOGIN</h1>
            <form action="">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Send</button>
            </form>
        </div>
    )
}

export default LoginPage;