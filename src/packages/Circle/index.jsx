import classes from './Circle.module.scss'

const Circle = (props) => {
    return (
        <div className={classes.wrapper} style={{ width: props.size, height: props.size }}>
            {props.children}
        </div>
    )
}

export default Circle