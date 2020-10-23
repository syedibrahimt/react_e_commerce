import React, { FunctionComponent } from 'react'
import Directory from '../../directory/directory.component';
import "./homepage.styles.scss";

interface HomePageProps {

}

const HomePage: FunctionComponent<HomePageProps> = () => {
    return (
        <div className="homepage">
            <Directory />
        </div>
    )
}

export default HomePage;
