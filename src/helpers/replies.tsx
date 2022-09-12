import React, { FunctionComponent} from "react";
import { BotReply } from "../types/bot";



export const HandleBotReply: FunctionComponent<BotReply> = (props: BotReply) => {
    return (
      <div className="chatbot-bot">
        <span className="chat">
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
            : props.prompt === 19 && props.data
            ? props.chat.replace("{}", props.data)
            : props.prompt === 21 && props.data
            ? props.chat.replace("{}", props.data)
            : props.chat
            
            
            
            }
        </span>
      </div>
    );
  };

export const HandleUserReply: FunctionComponent<BotReply> = (props: BotReply) => {
    return (
      <div className="chatbot-user">
        <span className="chat">
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
            : props.prompt === 18 && props.data
            ? props.chat.replace("{}", props.data)
            : props.prompt === 20 && props.data
            ? props.chat.replace("{}", props.data)
            : props.chat}
        </span>
      </div>
    );
  };