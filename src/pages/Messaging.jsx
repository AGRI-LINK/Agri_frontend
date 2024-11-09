import React, { useState } from 'react';

const Messaging = () => {
  // Sample message data
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Buyer A', content: 'Hello, I am interested in your apples.' },
    { id: 2, sender: 'You', content: 'Great! How many would you like to purchase?' },
    // Add more messages as needed
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMessageObject = {
        id: messages.length + 1,
        sender: 'You',
        content: newMessage,
      };
      setMessages([...messages, newMessageObject]);
      setNewMessage('');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-[#00b207] mb-6">Messaging</h1>
      <div className="bg-white shadow-md rounded p-4 mb-6">
        <h2 className="text-2xl font-bold mb-4">Conversation</h2>
        <div className="mb-4 h-64 overflow-y-auto border p-2">
          {messages.map(message => (
            <div key={message.id} className={`mb-2 ${message.sender === 'You' ? 'text-right' : 'text-left'}`}>
              <span className="font-bold">{message.sender}:</span> {message.content}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            className="bg-[#00b207] text-white px-4 py-2 rounded hover:bg-green-700 ml-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messaging; 