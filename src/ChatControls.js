import { useDispatch } from "react-redux";
import { actions } from "./store/store.js";

export function ChatControls() {
    const dispatch = useDispatch();
    const onNewConversation = () => {
        dispatch(actions.createNewConversation())
    };

    return <div className="chat-controls">
        <button className="new-conversation" onClick={onNewConversation}>New conversation</button>
    </div>;
}
