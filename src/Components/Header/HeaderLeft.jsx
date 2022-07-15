import { FacebookIcon } from '~/assets/svg/icon'
import classes from './HeaderLeft.module.scss'

const HeaderLeft = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.logo}>
                <FacebookIcon />
            </div>
            <div className={classes.searchBar}>
                <input type="text" placeholder='Search Facebook' />
            </div>
        </div>
    )
}

export default HeaderLeft