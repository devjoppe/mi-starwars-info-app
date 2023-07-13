// Assets
import swlogo from './../assets/images/swlogo.svg';
// React
import {Link} from "react-router-dom";

const MainHeader = () => {
    return(
        <div className='sw-header'>
            <Link to={`/`} >
                <img src={swlogo} alt="Star Wars" />
            </Link>
        </div>
    )
}

export default MainHeader