// React
import {NavLink} from "react-router-dom";
// Data
import navData from './../assets/data/mainNav.json'

const MainNavigation= () => {

    return(
        <div className="sw-navigation">
            {navData &&
                navData.map(item => (
                    <NavLink key={item.id} className={`sw-nav-item ${item.title}`} to={`${item.url}`}>
                        {item.title}
                    </NavLink>
                ))
            }
        </div>
    )
}

export default MainNavigation