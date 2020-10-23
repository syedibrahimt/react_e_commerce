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
        <div className={`${size} menu-item`} style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="content">
                <h1 className='title'>{title}</h1>
                <span className="subtitle">{subtitle}</span>
            </div>
        </div>
    )
}

export default MenuItem
