import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Modal from '@mui/material/Modal';

import classes from './LoginForm.module.scss'
import Register from '../Register/Register';

const LoginForm = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <div className={classes.formWrapper}>
            <Formik
                initialValues={{ email: '', password: '' }}
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
                    <Form className={classes.form}>
                        <div className={classes.input}>
                            <Field type="email" name="email" className={classes.emailInput} placeholder="Email address" />
                        </div>
                        <ErrorMessage name="email" component="div" className={classes.error} />
                        <div className={classes.input}>
                            <Field type="password" name="password" className={classes.emailInput} placeholder="Password" />
                        </div>
                        <ErrorMessage name="password" component="div" className={classes.error}/>
                        <div className={classes.loginBtn}>
                            <button type="submit" disabled={isSubmitting}>
                                Login
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            <div className={classes.forgetPassword}>
                <NavLink to='/login' className={classes.link}>
                    Forgotten password?
                </NavLink>
            </div>
            <div className={classes.divider}></div>
            <div className={classes.signup}>
                <button onClick={handleOpen}>Create New Account</button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <Register onClose={handleClose}/>
                </>
            </Modal>
        </div>
    )
}

export default LoginForm