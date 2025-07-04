import {useRef} from "react";

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse}) => {
    const inputRef = useRef();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value="";;

        //update chat history with the user's message
        setChatHistory((history) => [...history, {role:"user", text:userMessage}]);

        //Delay 600ms before showing "Thinking..." and generating response
        setTimeout(() => {
            //Add a "Thinking..." placeholder for the bot's response
            setChatHistory((history) => [...history, {role:"model", text:"..."}]);

            //Call the function to generate bot's response
            generateBotResponse([...chatHistory, {role:"user", text:` Keep in mind the details provided above and talk to me naturally, my message for you is : ${userMessage} `}]);
        
        }, 600);
    }
    return(
        <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" placeholder="Message..." 
            className="message-input" required/>
            <button className="material-symbols-rounded">arrow_upward</button>
        </form>
    );
}

export default ChatForm;