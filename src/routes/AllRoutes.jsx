import { Route, Routes } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import Messages from '../components/Messages';
import ChatPage from '../pages/ChatPage';
import HomePage from '../pages/HomePage';
import Layout from './Layout';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<HomePage/>} />
                <Route path='/auth' element={<AuthForm/>} />
                <Route path='/messages' element={<Messages/>} />
                <Route path='/messages/:uid' element={<ChatPage/>} />
            </Route>
        </Routes>
    )
}
export default AllRoutes;