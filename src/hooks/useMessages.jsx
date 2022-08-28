import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { ref, onValue, push, child, update, serverTimestamp } from 'firebase/database';
import useProfile from './useProfile';

const useMessages = () => {
  const [messages, setMessages] = useState(null);
  const [isMsgLoading, setIsMsgLoading] = useState(false);
  const { profile} = useProfile()

  useEffect(() => {
    if (!profile) return;
    setIsMsgLoading(true)

    const messageRef = ref(db, 'messages/');
    onValue(messageRef, snapshot => {
      const data = snapshot.val();
      setMessages(data[profile.docId]);
    });

    setIsMsgLoading(false)
  }, [profile]);

  const handleSendMessage = (text, receiverId) => {
      // A Msg entry.
    const msgData = {
      uid: profile.docId,
      text,
      time: serverTimestamp()
    };
  
    // Get a key for a new Msg.
    const newMsgKey = push(child(ref(db), 'messages')).key;
  
    // Write the new Msg's data simultaneously in the Msgs list and the user's Msg list.
    const updates = {};
    updates[`/messages/${profile.docId}/${receiverId}/${newMsgKey}`] = msgData;
    updates[`/messages/${receiverId}/${profile.docId}/${newMsgKey}`] = msgData;
  
    return update(ref(db), updates);
  }

  return {
    messages,
    isMsgLoading,
    handleSendMessage,
  };
};
export default useMessages;
