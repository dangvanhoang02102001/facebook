import defaultAvatar from '~/assets/img/defaultAvatar.png'
import classes from './Avatar.module.scss'

const Avatar = (props) => {
    let wrapper;
    if(props.size === 'large') {
        wrapper = [classes.wrapper, classes.large].join(' ')
    }else {
        wrapper = classes.wrapper
    }

    return (
        <div className={wrapper}>
            <img src={props.src ? props.src : defaultAvatar} alt="#" />
        </div>
    )
}

export default Avatar