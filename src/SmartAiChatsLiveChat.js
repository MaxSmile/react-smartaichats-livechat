import React, { useEffect } from 'react';

const SmartAiChatsLiveChat = ({ chatId }) => {
  useEffect(() => {
    // Function to load the script
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://smrtaichats.com/chat/${chatId}`;
      script.async = true;
      document.body.appendChild(script);
    };

    // Load the script when the component mounts
    loadScript();

  }, [chatId]); 

  return null; // This component does not render anything itself
};

export default SmartAiChatsLiveChat;