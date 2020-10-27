import { url } from 'inspector'
import React, { FunctionComponent } from 'react'
import './menu-item.styles.scss'

interface MenuItemProps {
    title: string,
    subtitle?: string,
    imageUrl: string,
    size: string
}

const MenuItem: FunctionComponent<MenuItemProps> = ({ title, subtitle = "SHOP NOW", imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="content">
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className="subtitle">{subtitle.toUpperCase()}</span>
            </div>
        </div>
    )
}

export default MenuItem
