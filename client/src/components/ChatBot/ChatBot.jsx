import React, { useState } from 'react';
import { useMachine } from '@xstate/react';
import chatbotMachine from '../../chatbotMachine';
import axios from 'axios'

const ChatBot = () => {
  const [state, send] = useMachine(chatbotMachine);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventMap = {
      welcome: 'START',
      askName: 'NAME',
      askEmail: 'EMAIL',
      askPhone: 'PHONE',
      askMessage: 'MESSAGE',
      submit: 'SUBMIT'
    };

    const currentEvent = eventMap[state.value];
    console.log("this is event: ", currentEvent);
    console.log("this is input: ", input);

    if (currentEvent && currentEvent !== 'SUBMIT') {
      send({ type: currentEvent, value: input });
    } else if (currentEvent === 'SUBMIT') {
      try {
        console.log("this is the final context : ",state.context);
       

        const response =await axios.post('http://localhost:8000/api/v1/book',state.context);

        console.log("this is response : ",response);

        if (!response.data.success) {
          throw new Error('Form submission failed');
        }

        send({ type: 'SUCCESS' });

      
          send({ type: 'START_OVER' });
   

      } catch (error) {
        console.error("this is error",error);
        send({ type: 'FAILURE' });
      }
    }

    setInput('');
  };

  const getMessage = () => {
    switch (state.value) {
      case 'welcome':
        return 'Welcome! Let\'s get started. Please type "start" to begin.';
      case 'askName':
        return 'What is your full name?';
      case 'askEmail':
        return 'What is your email?';
      case 'askPhone':
        return 'What is your phone number?';
      case 'askMessage':
        return 'Please provide the reason of appointment';
      case 'submit':
        return 'Type "submit" to submit your details';
      case 'submitting':
        return 'Booking your appointment';
      case 'success':
        return 'Your booking was successful! Type "start" to begin again.';
      case 'failure':
        return 'There was an error with your booking. Please type "retry" to try again.';
      default:
        return '';
    }
  };

  const getInputType = () => {
    switch (state.value) {
      case 'askEmail':
        return 'email';
      case 'askPhone':
        return 'tel';
      default:
        return 'text';
    }
  };

  return (
    <div className='flex justify-center px-1'>
      <div className="chat-box w-full bg-slate-300 flex flex-col gap-6 items-center">
        <p className='sm:text-lg px-2 text-center font-medium mb-[0.3rem]'>{getMessage()}</p>
        {(state.value !== 'submitting' && state.value !== 'success' && state.value !== 'failure') && (
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2">
            <input
              type={getInputType()}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
              className='p-4 rounded-2xl w-full border-[1px] outline-none border-black bg-background_color text-text_color1 '
            />
            <button type="submit" className='flex w-6/12 items-center justify-center gap-3 px-3 py-4 mt-6 font-semibold text-white bg-primary_color border-2 border-primary_color rounded-b-2xl rounded-tl-2xl hover:bg-transparent hover:text-primary_color transition-all duration-300'>Send</button>
          </form>
        )}
        {state.value === 'failure' && (
          <button onClick={() => send('RETRY')}>Retry</button>
        )}
        {state.value === 'success' && (
          <button onClick={() => send('START_OVER')}>Start Over</button>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
