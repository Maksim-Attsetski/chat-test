import useProfile from '../hooks/useProfile'
import {Link} from 'react-router-dom'

const Messages = () => {
    const {profileIsLoading, otherProfiles} = useProfile()

    return profileIsLoading ? <div>Loading...</div> : (
        <div>
            <div className="container">
                {(otherProfiles && otherProfiles.length > 0) && <div>
                    <h4>send to...</h4>
                    <br />
                    <div>{otherProfiles.map((item) => (
                        <div key={item.uid}>
                            <div>{item.displayName}</div>
                            <Link to={item.docId}>open chat</Link>
                        </div>
                    ))}</div>
                </div>}
            </div>
        </div>
    )
}
export default Messages;