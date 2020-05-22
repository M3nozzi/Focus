import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Followers(props) {
    
    const userTo = props.userTo;
    const contentFrom = props.contentFrom;

    const [FollowerNumber, setFollowerNumber] = useState(0);
    const [Followed, setFollowed] = useState(false);

    const onFollowed = () => {

        let followersVariables = {
            userTo: userTo,
            contentFrom:contentFrom,
        }
        if (Followed) {
            axios.post('/api/followers/unFollow', followersVariables)
                .then(response => {
                    if(response.data.success){ 
                        setFollowerNumber(FollowerNumber - 1)
                        setFollowed(!Followed)
                    } else {
                        alert('Failed to unfollow')
                    }
                })

        } else {
            // when we are not subscribed yet
            
            axios.post('/api/followers/follow', followersVariables)
                .then(response => {
                    if(response.data.success) {
                        setFollowerNumber(FollowerNumber + 1)
                        setFollowed(!Followed)
                    } else {
                        alert('Failed to subscribe')
                    }
                })
        }//closes else

    }
    
    useEffect(() => {

        const followersNumberVariable = { userTo: userTo, contentFrom: contentFrom };

        axios.post('/api/followers/followersNumber', followersNumberVariable)
            .then(response => {
                if(response.data.success) {
                    console.log('response.data.followersNumber --->',response.data.followersNumber)
                    setFollowerNumber(response.data.followersNumber)
                }else {
                    alert('Failed to gfet followers number');
                }
            })

        axios.post('api/followers/followed', followersNumberVariable)
            .then(response => {
                if(response.data.success) {
                    console.log('response.data.followed --->>',response.data.followed);
                    setFollowed(response.data.followed)
                } else{
                    alert('Failed to get Followers info');
                }
            })            
        
    }, [])

    return (
        <div>
            <button onCLick={onFollowed} style={{ backgroundColor: `${Followed ? "#03DAC6" : "#F97D7D"}`, borderRadius: '4px', color: 'white', padding: '10px 16px', fontWeight: '500', fontSize: '1rem', textTransform: 'uppercase' }}>
                
            {FollowerNumber} {Followed ? 'Followed' : 'Follow'}
            </button>
        </div>
    )
}

export default Followers;
