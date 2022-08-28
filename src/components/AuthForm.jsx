import { useState, useMemo } from 'react';
import useAuth from '../hooks/useAuth';

const AuthForm = () => {
    const [formItems, setFormItems] = useState({
        email: '', pass: '' 
    })
    const [isLogin, setIsLogin] = useState(true)
    const formName = useMemo(() => isLogin ? 'login' : 'signup', [isLogin])
    const {handleLogin, handleRegister, handleLogout, user, isUserLoading} = useAuth()

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const {email, pass} = formItems

        if(isLogin)  handleLogin(email, pass) 
        else handleRegister(email, pass)
    }

    if (isUserLoading) return <div>Loading...</div>

    return (
        <>
            <div className="container">
                {!user ? <div>
                    <form style={{display: 'flex',gap: '1rem', margin: '3rem'}} onSubmit={(e) => handleFormSubmit(e)}>
                    <input type="text" value={formItems.email} onChange={(event) => setFormItems({
                        ...formItems, email: event.target.value
                    })} 
                    placeholder={'Email'}
                    />
                    <input type="text" value={formItems.pass} onChange={(event) => setFormItems({
                        ...formItems, pass: event.target.value
                    })} 
                    placeholder={'Pass'}
                    />
                    <button>{formName}</button>
                </form>
                <button onClick={() => setIsLogin(prev => !prev)}>now: {formName}</button>
                </div> : <div>
                    <div>{user.displayName}</div>
                    <div>{user.email}</div>
                    <br /><br /><br />
                    <button onClick={handleLogout}>Logout</button>
                </div>}
            </div>
        </>
    )
}
export default AuthForm;