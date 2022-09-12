import React, { FunctionComponent} from "react";
import { BotReply } from "../types/bot";



export const HandleBotReply: FunctionComponent<BotReply> = (props: BotReply) => {
    return (
      <div className="bot-cont">
        <span className="bot-chat">
          {props.prompt === 4 && props.data
            ? props.chat.replace("{}", props.data)
            : props.prompt === 6 && props.data
            ? props.chat.replace("{}", props.data)
            : props.prompt === 7 && props.data
            ? props.chat.replace("{}", props.data)
            : props.prompt === 8 && props.data
            ? props.chat.replace("{}", props.data)
            : props.prompt === 11 && props.data
            ? props.chat.replace("{}", props.data)
            : props.chat
            
            
            }
        </span>
      </div>
    );
  };

export const HandleUserReply: FunctionComponent<BotReply> = (props: BotReply) => {
    return (
      <div className="user-cont">
        <span className="user-chat">
          {props.prompt === 3 && props.data
            ? props.chat.replace("{}", props.data)
            : props.prompt === 5 && props.data
            ? props.chat.replace("{}", props.data)
            : props.prompt === 7 && props.data
            ? props.chat.replace("{}", props.data)
            : props.prompt === 10 && props.data
            ? props.chat.replace("{}", props.data)
            : props.prompt === 12 && props.data
            ? props.chat.replace("{}", props.data)
            : props.prompt === 14 && props.data
            ? props.chat.replace("{}", props.data)
            : props.prompt === 16 && props.data
            ? props.chat.replace("{}", props.data)
            : props.chat}
        </span>
      </div>
    );
  };