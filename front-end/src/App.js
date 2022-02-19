import './App.css';
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js'
import axios from './axios'


function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {

    axios.get('/message/show')
      .then(response => {
        setMessages(response.data)
      })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('f42a10312aabfbace532', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {

      setMessages([...messages, newMessage]);
    });
    //unsubscribe messages:
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages])

  console.log('messages', messages)

  return (
    <div className="App">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
