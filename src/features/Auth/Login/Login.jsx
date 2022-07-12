import Logo from '~/assets/svg/logo'
import classes from './Login.module.scss'
import LoginForm from './LoginForm'

const Login = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <div className={classes.banner}>
                    <div className={classes.logo}>
                        <Logo />
                    </div>
                    <h4>Facebook helps you connect and share with the people in your life.</h4>
                </div>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login