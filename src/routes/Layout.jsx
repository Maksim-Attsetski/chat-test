import {Outlet, NavLink} from 'react-router-dom' 
import './Layout.css';

const Layout = (props) => {
    return (
        <div>
            <div className="container">
                <div className='links'>
                    <NavLink className='link' to='/chat-test/'>home</NavLink>
                    <NavLink className='link' to='/chat-test/auth'>auth</NavLink>
                    <NavLink className='link' to='/chat-test/messages'>messages</NavLink>
                </div>
            </div>
            <hr /><br />
            <Outlet/>
        </div>
    )
}
export default Layout;