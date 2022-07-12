import { GrFormClose } from 'react-icons/gr';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import classes from './Register.module.scss'

const Register = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <span className={classes.title}>Sign up</span>
                <span className={classes.description}>It's quick and easy.</span>
                <div className={classes.closeBtn} onClick={props.onClose}>
                    <GrFormClose size={28} />
                </div>
            </div>
            <div className={classes.form}>
                <Formik
                    initialValues={{ firstName: '',surName: '' ,email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                            } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className={classes.nameSection}>
                                <div className={classes.input}>
                                    <Field type="text" name="firstName" className={classes.inputTyping} placeholder="Firstname" />
                                </div>
                                <ErrorMessage name="firstName" component="div" className={classes.error} />
                                <div className={classes.input}>
                                    <Field type="text" name="surName" className={classes.inputTyping} placeholder="Surname" />
                                </div>
                            </div>
                            <ErrorMessage name="surName" component="div" className={classes.error} />
                            <div className={classes.input}>
                                <Field type="email" name="email" className={classes.inputTyping} placeholder="Email address" />
                            </div>
                            <ErrorMessage name="email" component="div" className={classes.error} />
                            <div className={classes.input}>
                                <Field type="password" name="password" className={classes.inputTyping} placeholder="Password" />
                            </div>
                            <ErrorMessage name="password" component="div" className={classes.error}/>
                            <span>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</span>
                            <div className={classes.signUpBtn}>
                                <button type="submit" disabled={isSubmitting}>
                                    Sign up
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Register