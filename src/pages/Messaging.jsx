// import React, { useState, useRef } from 'react';
// import { FaPaperPlane, FaMicrophone, FaStop, FaLanguage } from 'react-icons/fa';

// const Messaging = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState('');
//   const [isRecording, setIsRecording] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState('en');
//   const audioRef = useRef(null);

//   const handleSendMessage = () => {
//     if (inputText.trim()) {
//       setMessages([...messages, { text: inputText, sender: 'user' }]);
//       setInputText('');
//       // Here you would typically send the message to the server
//     }
//   };

//   const handleRecordToggle = () => {
//     if (isRecording) {
//       // Stop recording
//       setIsRecording(false);
//       // Here you would typically stop the recording and process the audio
//     } else {
//       // Start recording
//       setIsRecording(true);
//       // Here you would typically start the recording process
//     }
//   };

//   const handleLanguageChange = (e) => {
//     setSelectedLanguage(e.target.value);
//     // Here you would typically trigger a translation of the messages
//   };

//   return (
//     <div className="flex flex-col h-screen max-w-md mx-auto bg-white shadow-lg">
//       <div className="bg-green-600 text-white py-4 px-6">
//         <h2 className="text-xl font-semibold">Chat with Farmer</h2>
//       </div>
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {messages.map((message, index) => (
//           <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//             <div className={`max-w-xs px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
//               {message.text}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="border-t border-gray-200 px-4 py-4 sm:flex sm:items-center">
//         <select
//           value={selectedLanguage}
//           onChange={handleLanguageChange}
//           className="mb-2 sm:mb-0 sm:mr-2 p-2 border rounded-md"
//         >
//           <option value="en">English</option>
//           <option value="fr">Français</option>
//           <option value="es">Español</option>
//           <option value="tw">Twi</option>
//         </select>
//         <div className="flex-1 flex items-center">
//           <input
//             type="text"
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//             placeholder="Type a message..."
//             className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <button
//             onClick={handleSendMessage}
//             className="bg-green-500 text-white p-2 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//           >
//             <FaPaperPlane />
//           </button>
//         </div>
//         <button
//           onClick={handleRecordToggle}
//           className={`ml-2 p-2 rounded-full ${isRecording ? 'bg-red-500' : 'bg-gray-200'} text-white focus:outline-none focus:ring-2 focus:ring-green-500`}
//         >
//           {isRecording ? <FaStop /> : <FaMicrophone />}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Messaging;

// import React, { useState, useEffect, useRef } from 'react';
// import { FaPaperPlane, FaMicrophone, FaStop, FaTrashAlt } from 'react-icons/fa';
// import io from 'socket.io-client';

// const socket = io('https://pusham-api-aby4.onrender.com'); // Replace with your server URL

// const Messaging = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState('');
//   const [isRecording, setIsRecording] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState('en');
//   const [audioChunks, setAudioChunks] = useState([]);
//   const mediaRecorder = useRef(null);

//   // Handle sending text message
//   const handleSendMessage = () => {
//     if (inputText.trim()) {
//       socket.emit('message', { text: inputText, language: selectedLanguage, sender: 'user' });
//       setMessages([...messages, { text: inputText, sender: 'user', language: selectedLanguage }]);
//       setInputText('');
//     }
//   };

//   // Handle message deletion
//   const handleDeleteMessage = (index) => {
//     setMessages(messages.filter((_, i) => i !== index));
//   };

//   // Handle language selection
//   const handleLanguageChange = (e) => {
//     setSelectedLanguage(e.target.value);
//     // You could add logic here to translate existing messages when language changes
//   };

//   // Start/Stop voice recording
//   const handleRecordToggle = () => {
//     if (isRecording) {
//       mediaRecorder.current.stop(); // Stop the recording
//       setIsRecording(false);
//     } else {
//       setAudioChunks([]); // Reset audio chunks
//       navigator.mediaDevices
//         .getUserMedia({ audio: true })
//         .then((stream) => {
//           mediaRecorder.current = new MediaRecorder(stream);
//           mediaRecorder.current.ondataavailable = (e) => {
//             setAudioChunks((prevChunks) => [...prevChunks, e.data]);
//           };
//           mediaRecorder.current.onstop = () => {
//             const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
//             const audioUrl = URL.createObjectURL(audioBlob);
//             socket.emit('voiceMessage', audioUrl); // Send audio to server
//             setMessages((prevMessages) => [
//               ...prevMessages,
//               { audio: audioUrl, sender: 'user' },
//             ]);
//           };
//           mediaRecorder.current.start();
//           setIsRecording(true);
//         })
//         .catch((error) => {
//           console.error('Error accessing microphone', error);
//         });
//     }
//   };

//   // Receiving messages and updating state
//   useEffect(() => {
//     socket.on('message', (msg) => {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { ...msg, sender: 'server' },
//       ]);
//     });

//     socket.on('voiceMessage', (audioUrl) => {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { audio: audioUrl, sender: 'server' },
//       ]);
//     });

//     return () => {
//       socket.off('message');
//       socket.off('voiceMessage');
//     };
//   }, [messages]);

//   return (
//     <div className="flex flex-col h-screen max-w-md mx-auto bg-white shadow-lg">
//       <div className="bg-green-600 text-white py-4 px-6">
//         <h2 className="text-xl font-semibold">Chat</h2>
//       </div>
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {/* Displaying messages */}
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//           >
//             <div
//               className={`max-w-xs px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-green-500 text-white' : 'bg-gray-200'
//                 }`}
//             >
//               {message.text && message.text}
//               {message.audio && (
//                 <audio controls src={message.audio} className="mt-2 w-full" />
//               )}
//             </div>
//             {message.sender === 'user' && (
//               <button
//                 onClick={() => handleDeleteMessage(index)}
//                 className="ml-2 text-red-500"
//               >
//                 <FaTrashAlt />
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="border-t border-gray-200 px-4 py-4 sm:flex sm:items-center">
//         <select
//           value={selectedLanguage}
//           onChange={handleLanguageChange}
//           className="mb-2 sm:mb-0 sm:mr-2 p-2 border rounded-md"
//         >
//           <option value="en">English</option>
//           <option value="fr">Français</option>
//           <option value="es">Español</option>
//           <option value="tw">Twi</option>
//         </select>
//         <div className="flex-1 flex items-center">
//           <input
//             type="text"
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//             placeholder="Type a message..."
//             className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <button
//             onClick={handleSendMessage}
//             className="bg-green-500 text-white p-2 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//           >
//             <FaPaperPlane />
//           </button>
//         </div>
//         <button
//           onClick={handleRecordToggle}
//           className={`ml-2 p-2 rounded-full ${isRecording ? 'bg-red-500' : 'bg-gray-200'} text-white focus:outline-none focus:ring-2 focus:ring-green-500`}
//         >
//           {isRecording ? <FaStop /> : <FaMicrophone />}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Messaging;

import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaMicrophone, FaStop, FaTrashAlt } from 'react-icons/fa';
import io from 'socket.io-client'; // Import socket.io-client
import { apiMessages } from '../services/messages';

const socket = io('https://pusham-api-aby4.onrender.com'); // Replace with your backend server URL

const Messaging = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [audioChunks, setAudioChunks] = useState([]);
  const [messageToDelete, setMessageToDelete] = useState(null);
  const mediaRecorder = useRef(null);

  // Handle sending text message and API integration
  const handleSendMessage = async () => {
    if (inputText.trim()) {
      const messageData = {
        content: inputText,
        receiverId: 'receiverId_here', // Replace with the actual receiver ID
      };

      try {
        // Make a POST request to the backend API to send the message
        const response = await apiMessages('/api/messages/send',
          messageData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        // Check if the message was sent successfully
        if (response.status === 201) {
          socket.emit('sendMessage', { text: inputText, language: selectedLanguage }); // Emit message
          setMessages([...messages, { text: inputText, sender: 'user', language: selectedLanguage }]);
          setInputText('');
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  // Handle message deletion
  const handleDeleteMessage = (index) => {
    setMessages(messages.filter((_, i) => i !== index));
    setMessageToDelete(null);
  };

  // Toggle delete button visibility
  const handleMessageTap = (index) => {
    if (messageToDelete === index) {
      setMessageToDelete(null); // Hide delete button if it's already selected
    } else {
      setMessageToDelete(index); // Show delete button for the selected message
    }
  };

  // Start/Stop voice recording
  const handleRecordToggle = () => {
    if (isRecording) {
      mediaRecorder.current.stop();
      setIsRecording(false);
    } else {
      setAudioChunks([]);
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          mediaRecorder.current = new MediaRecorder(stream);
          mediaRecorder.current.ondataavailable = (e) => {
            setAudioChunks((prevChunks) => [...prevChunks, e.data]);
          };
          mediaRecorder.current.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            socket.emit('sendVoiceMessage', { audioUrl }); // Emit voice message to server
            setMessages((prevMessages) => [
              ...prevMessages,
              { audio: audioUrl, sender: 'user' },
            ]);
          };
          mediaRecorder.current.start();
          setIsRecording(true);
        })
        .catch((error) => {
          console.error('Error accessing microphone', error);
        });
    }
  };

  // Receiving real-time messages
  useEffect(() => {
    // Listen for incoming text messages
    socket.on('newMessage', (message) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { ...message, sender: 'server' },
      ]);
    });

    // Listen for incoming voice messages
    socket.on('newVoiceMessage', (audioUrl) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { audio: audioUrl, sender: 'server' },
      ]);
    });

    return () => {
      socket.off('newMessage');
      socket.off('newVoiceMessage');
    };
  }, []);

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white shadow-lg">
      <div className="bg-green-600 text-white py-4 px-6">
        <h2 className="text-xl font-semibold">Chat</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            onClick={() => handleMessageTap(index)}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-green-500 text-white' : 'bg-gray-200'
                }`}
            >
              {message.text && message.text}
              {message.audio && (
                <audio controls src={message.audio} className="mt-2 w-full" />
              )}
            </div>

            {messageToDelete === index && (
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering message tap
                  handleDeleteMessage(index);
                }}
                className="ml-2 text-red-500"
              >
                <FaTrashAlt />
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 px-4 py-4 sm:flex sm:items-center">
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
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
