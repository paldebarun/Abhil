import { createMachine, assign } from 'xstate';

const chatbotMachine = createMachine({
  id: 'chatbot',
  initial: 'welcome',
  context: {
    name: '',
    email: '',
    phone: '',
    message: ''
  },
  states: {
    welcome: {
      on: {
        START: 'askName'
      }
    },
    askName: {
      on: {
        NAME: {
          actions: assign({
            name: (context, event) => {
             
              return context.event.value;
            }
          }),
          target: 'askEmail'
        }
      }
    },
    askEmail: {
      on: {
        EMAIL: {
          actions: assign({
            email: (context, event) => {
           
              return context.event.value;
            }
          }),
          target: 'askPhone'
        }
      }
    },
    askPhone: {
      on: {
        PHONE: {
          actions: assign({
            phone: (context, event) => {
              
              return context.event.value;
            }
          }),
          target: 'askMessage'
        }
      }
    },
    askMessage: {
      on: {
        MESSAGE: {
          actions: assign({
            message: (context, event) => {
              console.log("Context in askMessage:", context);
              console.log("Event in askMessage:", context.event.value);
              return context.event.value;
            }
          }),
          target: 'submit'
        }
      }
    },
    submit: {
      on: {
        SUBMIT: 'submitting'
      }
    },
    submitting: {
      on: {
        SUCCESS: 'success',
        FAILURE: 'failure'
      }
    },
    success: {
      on: {
        START_OVER: {
          target: 'welcome',
          actions: assign({
            name: '',
            email: '',
            phone: '',
            message: ''
          })
        }
      }
    },
    failure: {
      on: {
        RETRY: 'askName'
      }
    }
  }
}
//  {
//   services: {
//     submitForm: (context) => {
//       console.log("this is the final context : ",context);
//       return fetch('http://localhost:5000/api/v1/book', { 
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(context)
//       }).then((response) => {
//         if (!response.ok) {
//           throw new Error('Form submission failed');
//         }
//         return { success: true };
//       });
//     }
    
//   }
// }

);

export default chatbotMachine;
