import classes from './Option.module.scss'

const Option = (props) => {
    return (
        <div className={classes.wrapper}>
            {props.children}
            <div className={classes.content}>
                {props.content}
            </div>
        </div>
    )
}

export default Option