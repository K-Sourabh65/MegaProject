import { useState } from "react";
import ReactMarkdown from "react-markdown";

function ChatGpt() {
    const [response, setResponse] = useState('');
    const apiKey = process.env.GPT_KEY;
    const endpoint = 'https://api.openai.com/v1/chat/completions';
  
    const handleClick = async () => {
      const prompt = "What is the meaning of life?"; // Your prompt here
  
      try {
        const data = await sendRequest(prompt);
        setResponse(data);
      } catch (error) {
        setResponse('Error occurred. Please try again later.');
      }
    };
  
    const sendRequest = async (prompt) => {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 1000,
          temperature: 0.7,
          stop: 'null'
        })
      };
  
      try {
        const response = await fetch(endpoint, requestOptions);
        if (!response.ok) {
          throw new Error('Failed to fetch response from API');
        }
        const data = await response.json();
       
          // const responseHtml = markdownToHtml(); // Convert Markdown to HTML
          // setQuestions([...questions, inputValue.trim()]);
          // setResponses([...responses, responseHtml]);
          setInputValue('');
          // console.log(responseHtml);
          const responseHTML=data.choices[0].message.content.trim()
          let reponse =responseHTML.toString()
        return <ReactMarkdown>
             {reponse}
             
        </ReactMarkdown>
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    };
  
    const [questions, setQuestions] = useState([]);
    const [responses, setResponses] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!inputValue.trim()) return;
  
      try {
        const response = await sendRequest(inputValue.trim());
        setQuestions([ inputValue.trim()]);
        setResponses([response]);
        setInputValue('');
  
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div className="App">
        <button onClick={handleClick}>Talk with AI</button>
        <div className="response">{response}</div>
        <div className="text-editor">
          <div className="conversation">
            {questions.map((question, index) => (
              <div key={index} className="question" 
                style={{
                marginTop:100,
                marginLeft:20,
                position: 'fixed',
                left: 0,
                width: 'calc(50% - 20px)',
                overflowWrap: 'break-word',
                
                
              }}>
                <span>Question: </span>
                {question}
              </div>
            ))}
            {responses.map((response, index) => (
              <div key={index} className="response"
              style={{
                position: 'fixed',
                right: 0,
                width: '50%',
                marginTop:100,
                marginLeft:20
                
              }}>
                <span>Answer from GPT: </span>
                {response}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} style={{
             bottom: 50,
             left: "37%",
             position: 'fixed',
            }}>
  
            <textarea
            
              rows="5" cols="50"
              
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your question here..."
            ></textarea><br/>
            <button type="submit">Ask</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default ChatGpt;
  