import { useMemo, useState } from 'react';
import {useParams} from 'react-router-dom';
import useMessages from '../hooks/useMessages';
import useProfile from '../hooks/useProfile';
import { getArray } from '../utils/getArray';
import { getMsgTime } from '../utils/getMsgTime';

const ChatPage = (props) => {
    const {uid} = useParams()
    const {profile, profileIsLoading} = useProfile()
    const {messages, handleSendMessage} = useMessages()
    const [msgText, setMsgText] = useState('')

    const receiver = useMemo(() => messages ? messages[uid] : null, [messages, uid])
    const allMsg = useMemo(() => receiver ? getArray(receiver) : null, [receiver])

    return (profileIsLoading) ? <div>Loading</div> : (
        <div>
            <div className="container" style={{border: '1px solid grey', padding: 10, borderRadius: 10}}>
                <p>chat</p>
                <br />
                {allMsg && <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                    {allMsg.map((msg) => <div style={{alignSelf: msg.uid === profile.docId ? 'flex-end' : 'flex-start'}} key={msg.time}>
                        <p>{msg.text}</p>
                        <p>{getMsgTime(msg.time)}</p>
                    </div>)}
                    <hr /><br />
                </div>}
                <textarea type='text'
                value={msgText} onChange={(event) => setMsgText(event.target.value)}
                />
                <button onClick={() => {
                    handleSendMessage(msgText, uid)
                    setMsgText('')
                }}>send</button>
            </div>
        </div>
    )
}
export default ChatPage;