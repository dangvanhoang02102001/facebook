import * as React from 'react';

import { RiSettings5Fill } from 'react-icons/ri';
import { IoHelpCircle } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';

import Avatar from '~/packages/Avatar'
import Circle from '~/packages/Circle'
import Option from '~/packages/Option/Options'
import classes from './Dropdown.module.scss'

const Dropdown = () => {
    
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.profileLink}>
                    <Avatar />
                    <span>Hoàng Văn</span>
                </div>
            </div>
            <div className={classes.list}>
                <div className={classes.item}>
                    <Option content='Cài đặt & quyền riêng tư'>
                        <Circle size={36}>
                            <RiSettings5Fill size={24} />
                        </Circle>
                    </Option>
                </div>
                <div className={classes.item}>
                    <Option content='Trợ giúp & hỗ trợ'>
                        <Circle size={36}>
                            <IoHelpCircle size={24} />
                        </Circle>
                    </Option>
                </div>
                <div className={classes.item}>
                    <Option content='Đăng xuất'>
                        <Circle size={36}>
                            <MdLogout size={24} />
                        </Circle>
                    </Option>
                </div>
            </div>
        </div>
    )
}

export default Dropdown