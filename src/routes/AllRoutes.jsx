import { Route, Routes } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import Messages from '../components/Messages';
import ChatPage from '../pages/ChatPage';
import HomePage from '../pages/HomePage';
import Layout from './Layout';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/chat-test/' element={<Layout/>}>
                <Route path='/chat-test/' element={<HomePage/>} />
                <Route path='/chat-test/auth' element={<AuthForm/>} />
                <Route path='/chat-test/messages' element={<Messages/>} />
                <Route path='/chat-test/messages/:uid' element={<ChatPage/>} />
            </Route>
        </Routes>
    )
}
export default AllRoutes;