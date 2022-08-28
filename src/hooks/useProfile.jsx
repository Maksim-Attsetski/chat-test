import { collection, limit, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { fs } from '../firebase';
import useAuth from './useAuth';

const useProfile = () => {
    const [profile, setProfile] = useState(null)
    const [otherProfiles, setOtherProfiles] = useState([])
    const [profileIsLoading, setProfileIsLoading] = useState(false)
    const { user, isUserLoading} = useAuth()

    useEffect(() => {
        if (!user) return
        setProfileIsLoading(true);
    
        onSnapshot(query(collection(fs, 'users'), where('uid', '==', user?.uid), limit(1)), snapshot => {
          const profile = snapshot.docs.map(doc => ({
            ...doc.data(),
            docId: doc.id,
          }))[0];
          setProfile(profile);
        });
    
        onSnapshot(query(collection(fs, 'users'), where('uid', '!=', user?.uid)), snapshot => {
          const others = snapshot.docs.map(doc => ({
            ...doc.data(),
            docId: doc.id,
          }))
          setOtherProfiles(others);
        });
    
        setProfileIsLoading(false);
      }, [user, isUserLoading]);

    return {
        profileIsLoading, profile, otherProfiles, 
    }
}
export default useProfile;