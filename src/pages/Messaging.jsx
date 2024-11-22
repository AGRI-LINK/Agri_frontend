import React, { useState, useRef } from 'react';
import { FaPaperPlane, FaMicrophone, FaStop, FaLanguage } from 'react-icons/fa';

const Messaging = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const audioRef = useRef(null);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');
      // Here you would typically send the message to the server
    }
  };

  const handleRecordToggle = () => {
    if (isRecording) {
      // Stop recording
      setIsRecording(false);
      // Here you would typically stop the recording and process the audio
    } else {
      // Start recording
      setIsRecording(true);
      // Here you would typically start the recording process
    }
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    // Here you would typically trigger a translation of the messages
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white shadow-lg">
      <div className="bg-green-600 text-white py-4 px-6">
        <h2 className="text-xl font-semibold">Chat with Farmer</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 px-4 py-4 sm:flex sm:items-center">
        <select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="mb-2 sm:mb-0 sm:mr-2 p-2 border rounded-md"
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
          <option value="tw">Twi</option>
        </select>
        <div className="flex-1 flex items-center">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-green-500 text-white p-2 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <FaPaperPlane />
          </button>
        </div>
        <button
          onClick={handleRecordToggle}
          className={`ml-2 p-2 rounded-full ${isRecording ? 'bg-red-500' : 'bg-gray-200'} text-white focus:outline-none focus:ring-2 focus:ring-green-500`}
        >
          {isRecording ? <FaStop /> : <FaMicrophone />}
        </button>
      </div>
    </div>
  );
};

export default Messaging;

