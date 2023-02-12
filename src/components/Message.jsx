import React from "react";
import "./Message.css"

function Message({title , desc}) {
    return (
        <>
            <div className="message">
                <div className="messageTitle">
                    <h4>{title}</h4>
                </div>
                <div className="messageContent">
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}

export default Message;