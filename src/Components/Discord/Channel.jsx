import User from "./User";

const Channel = ({ channel_id, name, position, members }) => {
    let connectedMembers = [];
    (() => { members.map(member => {
        if (member.channel_id && member.channel_id === channel_id){
            connectedMembers.push(member)
        }
    })})();
    return (
		<div className="Channel">
			<p className="Name"> {name} </p>
            {connectedMembers ? 
               connectedMembers.map(member => {
                return <User connected={true} username={member.username} avatar_url={member.avatar_url} deaf={member.deaf} mute={member.mute} self_deaf={member.self_deaf} self_mute={member.self_mute} />
               }
               )
             : null}
		</div>
	);
};
export default Channel;

//const {id, username, status, avatar_url, mute, deaf, self_deaf, self_mute, channel_id} = member;
