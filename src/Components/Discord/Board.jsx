import React from "react";
import './Discord.scss'
import User from "./User";
import Channel from "./Channel";
import Skeleton from 'react-loading-skeleton';


const Board = ({name, channels, members, id, instant_invite, presence_count}) => {

    const channelArr =[];

    return (
        <div className="Widget">
        {name ? <div className="Header"><p> {name} </p> <div className="Presence_Count"> {presence_count} </div></div> : <></>}
        <div className="MembersAndChannels">
        <div className="ChannelList">
        {!channels ? <Skeleton/> : channelArr.concat(channels)
                .sort((a, b) => a.position > b.position ? 1 : -1)
                .map((channel, i) => {
                const {id, name, position} = channel
                return <Channel key={i} channel_id={id} name={name} postion={position} members={members}/>
        })}
        </div>
            <div className="MemberList">
                <p> . </p>
            {!members ? <Skeleton/> : members.map(member => {
                const {id, username, status, avatar_url} = member
                return <User key={id} username={username} status={status} avatar_url={avatar_url} connected={false}/>
        })}
        </div>
        </div>
        </div>

    )
}
export default Board;