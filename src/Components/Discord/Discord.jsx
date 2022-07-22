import { useState, useEffect } from "react";
import './Discord.scss'
import '../ContactUs.scss'
import Board from './Board'


const Discord = () => {
    const callDiscord = async (callback) => {
        const init ={
            method: 'GET',
            mode: 'cors',
            cache: 'reload'
        }
            const discordData = await fetch('https://discord.com/api/guilds/354989172055867404/widget.json', init);
            let discordDataJson = await discordData.json();
            return discordDataJson;
        }
    
        let DC = class {
            constructor(name, channels, members, id, instant_invite, presence_count){
                this.members = members;
                this.channels = channels;
                this.name = name;
                this.id = id;
                this.instant_invite = instant_invite;
                this.presence_count = presence_count;
            }
        }

    const [data, setData] = useState();

    useEffect(() => {
        setData(callDiscord().then(result => {
            const {name, channels, members, id, instant_invite, presence_count} = result;
            setData(new DC(name, channels, members, id, instant_invite, presence_count));
        }));
    }, [])
    return(
        <div className="PreBoard">
            {data ? ( <> <Board name={data.name} presence_count={data.presence_count} members={data.members} channels={data.channels}/> </>) : null}

        </div>

        ) 
}
export default Discord;