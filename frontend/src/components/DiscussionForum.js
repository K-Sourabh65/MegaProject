import React, { useState, useEffect } from "react";
import '../styles/DiscussionForum.css';

function DiscussionForum() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const userEmail = localStorage.getItem('email');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:8000/messages?forumId=111');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const currentInputValue = inputValue;
    setInputValue('');
    setLoading(true);
    try {
      await addMessageToForum(currentInputValue);
      fetchMessages();
    } catch (error) {
      console.error(error);
      setMessages(prevMessages => [...prevMessages, { text: 'Error occurred. Please try again later.', sender: 'participant', userDP: '', userName: 'System' }]);
    } finally {
      setLoading(false);
    }
  };

  const addMessageToForum = async (messageText) => {
    const response = await fetch('http://localhost:8000/addmessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        forumId: '111',
        sender: userEmail,
        text: messageText,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to add message');
    }
    return data;
  };

  return (
    <div className="chat-container">
      <div className="chat">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === userEmail ? 'user' : 'participant'}`}>
            <img src={message.userDP || 'default-dp.png'} alt="User DP" className="user-dp" />
            <div className="message-content">
              <div className="user-name">{message.userName || 'Unknown'}</div>
              <div className="message-text">{message.text}</div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="message participant">
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

export default DiscussionForum;
