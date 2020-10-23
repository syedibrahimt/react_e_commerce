import React, { FunctionComponent } from 'react'
import "./homepage.styles.scss";

interface HomePageProps {

}

const HomePage: FunctionComponent<HomePageProps> = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className='title'>HATS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className='title'>HATS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className='title'>HATS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className='title'>HATS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className='title'>HATS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
