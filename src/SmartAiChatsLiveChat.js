import React, { useEffect } from 'react';



const SmartAiChatsLiveChat = ({ chatId, base_url = 'https://smrtaichats.com' }) => {
  useEffect(() => {
    // Function to load the script
    const loadScript = () => {
      // Check if the script is already added
      if (!document.getElementById("smartaichats-script")) {
        const script = document.createElement('script');
        script.src = `${base_url}/chat/${chatId}`;
        script.async = true;
        script.id = "smartaichats-script";
        document.body.appendChild(script);
      }
    };

    // Load the script when the component mounts
    loadScript();

  }, [chatId]); 

  return null; // This component does not render anything itself
};

export default SmartAiChatsLiveChat;