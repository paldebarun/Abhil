
import React from 'react';
import ChatBot from '../components/ChatBot/ChatBot';

const ChatBotPage = () => {
  return (
    <div className='w-full flex flex-col items-center gap-10 py-20 bg-slate-300'>
     <div className='flex sm:gap-2 gap-1 text-xl md:text-4xl font-semibold px-1'>
      <p className='text-secondary_color'>Book appointments using our </p>
      <p className='text-white'>Bot</p>
     </div>

      <ChatBot />
    </div>
  );
};

export default ChatBotPage;
