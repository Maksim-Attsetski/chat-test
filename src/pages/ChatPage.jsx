import { useMemo, useState } from 'react';
import {useParams} from 'react-router-dom';
import useMessages from '../hooks/useMessages';
import useProfile from '../hooks/useProfile';
import { getArray } from '../utils/getArray';
import { getMsgTime } from '../utils/getMsgTime';

const ChatPage = () => {
    const {uid} = useParams()
    const {profile, profileIsLoading} = useProfile()
    const {isMsgLoading, messages, handleSendMessage} = useMessages()
    const [msgText, setMsgText] = useState('')

    const allMsg = useMemo(() => (messages && uid) ? getArray(messages[uid]) : null, [messages, uid])

    return (profileIsLoading || isMsgLoading) ? <div>Loading</div> : (
        <div className="container">
            {allMsg ? <div style={{border: '1px solid grey', padding: 10, borderRadius: 10}}>
                <p>chat</p>
                <br />
                {allMsg && <div style={{display: 'flex', flexDirection: 'column', gap: 7}}>
                    {allMsg.map((msg) => {
                        const isUSerMsg = msg.uid === profile.docId

                        return <div style={{alignSelf: isUSerMsg ? 'flex-end' : 'flex-start', 
                        maxWidth: '65vw', overflowWrap: 'break-word', border: `1px solid ${isUSerMsg ? 'lightCoral' : 'grey'}`, padding: 10, borderRadius: 15,}} key={msg.time}>
                            <p>{msg.text}</p>
                            <p style={{textAlign: isUSerMsg ? 'end' : 'start'}}>{getMsgTime(msg.time)}</p>
                        </div>
                    })}
                </div>}
            </div>
            : <div>Нет сообщений</div>}
            <br /><hr /><br />
            <div >
                <textarea type='text' style={{width: '100%', minHeight: 100}}
                value={msgText} onChange={(event) => setMsgText(event.target.value)}
                />
            </div>
            <button style={{padding: '5px 10px', fontSize: 18, borderRadius: 10, display: 'block', marginLeft: 'auto'}} onClick={() => {
                handleSendMessage(msgText, uid)
                setMsgText('')
            }}>send</button>
        </div>
    )
}
export default ChatPage;