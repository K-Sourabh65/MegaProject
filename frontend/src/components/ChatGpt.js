import { useState } from "react";
import '../styles/ChatGpt.css';

function ChatGpt() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!inputValue.trim()) return;
  
    const currentInputValue = inputValue;
  
    setInputValue('');
    setLoading(true);
  
    setMessages(prevMessages => [...prevMessages, { text: currentInputValue, sender: 'user' }]);
  
    try {
      const response = await fetchGptResponse(currentInputValue);
      setMessages(prevMessages => [...prevMessages, { text: response, sender: 'ai' }]);
    } catch (error) {
      console.error(error);
      setMessages(prevMessages => [...prevMessages, { text: 'Error occurred. Please try again later.', sender: 'ai' }]);
    } finally {
      setLoading(false);
    }
  };
  
  

  const fetchGptResponse = async (prompt) => {
    const apiKey = ''
    const endpoint = 'https://api.openai.com/v1/chat/completions';
    const systemPrompt = 'You are a chatbot who answers in the conversational format to the given queries, the given queries must contain questions about computer science concepts, if the question is irrelevant to the topics of computer science just give a message as i cant talk about it, as it is out of my expertise"';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'user', content: systemPrompt },{ role: 'user', content: prompt }],
        max_tokens: 1000,
        temperature: 0.7,
        stop: 'null'
      })
    };

    const response = await fetch(endpoint, requestOptions);
    const data = await response.json();
    
    return data.choices[0].message.content.trim();
  };

  return (
    <div className="chat-container">
      <div className="chat">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
        {loading && (
          <div className="message ai">
            <span className="loader"></span>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className="input-field"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
}

export default ChatGpt;
