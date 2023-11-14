# React Smart AI Chats Live Chat

> react-smartaichats-livechat

This package provides a React component to easily integrate the Smart AI Chats live chat widget from smartAIChats.com into your React or Next.js application.

## Installation

```bash
npm install react-smartaichats-livechat
# or
yarn add react-smartaichats-livechat
```

## Usage
To use the SmartAiChatsLiveChat component, you need a unique chat ID provided by smartAIChats.com. Pass this chat ID as a prop to the component:

```jsx

import React from 'react';
import SmartAiChatsLiveChat from 'react-smartaichats-livechat';

const App = () => (
  <div>
    <SmartAiChatsLiveChat chatId="YOUR_CHAT_ID" />
    {/* ... other components */}
  </div>
);

export default App;
```

### Next.js Dynamic Import

```jsx
import dynamic from 'next/dynamic';
import React from 'react';

const SmartAiChatsLiveChat = dynamic(
  () => import('react-smartaichats-livechat').then((mod) => mod.SmartAiChatsLiveChat),
  { ssr: false }
);

const Page = () => {
  return (
    <div>
      <SmartAiChatsLiveChat chatId="YOUR_CHAT_ID" />
      {/* Rest of your component */}
    </div>
  );
};

export default Page;
```

# Where to get YOUR_CHAT_ID

## **Getting Your Free AI-Powered LiveChat Widget from SmartAIChats.com**

To integrate the Smart AI Chats Live Chat widget into your React or Next.js application, you'll need a unique chat ID. Here's how you can obtain it:

1. **Sign Up or Log In**: Visit [SmartAIChats.com](https://SmartAIChats.com) and sign up or log in to your account.

2. **Access the Client Area**: Once logged in, navigate to the client area where you can manage your widgets.

3. **Find Your Chat ID**: Your unique chat ID will be listed in the client area. This ID is required to integrate the live chat widget into your application.

4. **Copy the Chat ID**: Copy this chat ID and use it as the `chatId` prop when implementing the `SmartAiChatsLiveChat` component in your application.

The chat ID is essential for linking your website with the Smart AI Chats system, ensuring a seamless integration of the live chat feature.

## License

This project is open-source and available under the MIT License.
