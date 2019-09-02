import React from "react";
import { Link } from "react-router-dom";

const MainMenu = props => {
    const mainMenuItems = [
        { route: '/dashboard', value: 'dashboard' },
        { route: '/course-builder', value: 'course builder' },
        { route: '/campaigns', value: 'campaigns' },
        { route: '/support', value: 'support' }
    ]
    return (
        <div className="main-menu">
            {
                mainMenuItems.map(mainMenuItem => (
                    props.match.path.startsWith(mainMenuItem.route) ?
                        <div className={`main-menu__item active`} key={mainMenuItem.value}>{mainMenuItem.value}</div>
                        :
                        <Link to={mainMenuItem.route} key={mainMenuItem.value}>
                            <div className={`main-menu__item`}>{mainMenuItem.value}</div>
                        </Link>
                ))
            }
        </div>
    )
}

export default MainMenu;