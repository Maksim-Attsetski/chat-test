import {Outlet, NavLink} from 'react-router-dom' 
import './Layout.css';

const Layout = (props) => {
    return (
        <div>
            <div className="container">
                <div className='links'>
                    <NavLink className='link' to='/'>home</NavLink>
                    <NavLink className='link' to='/auth'>auth</NavLink>
                    <NavLink className='link' to='/messages'>messages</NavLink>
                </div>
            </div>
            <br /><hr /><br />
            <Outlet/>
        </div>
    )
}
export default Layout;