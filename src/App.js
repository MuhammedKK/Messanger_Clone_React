import React, {useState, useEffect} from 'react';
import {Button, Input, InputLabel, FormControl} from '@material-ui/core';
import './App.css';
import Message from './components/Message/Message';
import FlipMove from 'react-flip-move';
import db from './firebase';
import {onSnapshot, collection, addDoc, orderBy, serverTimestamp, query} from '@firebase/firestore';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';

function App() {

  // Hook To Deal With The Input
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('');
  console.log(messages);
  // Handle Messages

  const handleMessages = (e) => {
    e.preventDefault();

    // Handle Adding Messages To The DB
    addDoc(collection(db, 'messages'), {username: username, message: input, timestamp: serverTimestamp('timestamp')})

    // setMessages([...messages, {username: username, message: input}]);
    // Clear Input Field
    setInput('');
  }
  
  // Hook to Get The Name Just When The Component Excuted
  useEffect(() => {
    const name = prompt("Enter Your Name");
    setUsername(name);
  }, [])

  // Hook To Get The Messages Of The Firebase Database
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'))
    onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})));
    })

  }, [])

  return (
    <div className="App">
        <img style={{margin: '20px 0'}} src="https://scontent.fcai20-4.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=1-5&_nc_sid=6825c5&_nc_ohc=WOJTFAFYSPYAX_go52Z&_nc_ht=scontent.fcai20-4.fna&oh=939ac573d0eb40d0ebb88be2c0292f18&oe=617C713D" />
        <h1>Hi From Messanger Clone</h1>
        <h2>نورت يا {username} يا قمر</h2>
        {/* Form Control */}
        <form className="app__form" onSubmit={(e) => handleMessages(e)}>
          <FormControl className="app__formcontrol">
            <Input className="app__input" placeholder="سيب رسالتك هنا يولااا" value={input} onChange={(e) => setInput(e.target.value)}/>

            <IconButton className='app__button' type="submit" disabled={!input} variant="contained" color="primary" style={{margin: '20px 0'}}>
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>
        <FlipMove>
          {
            messages.map(({id, message}) => (
              <Message key={id} message={message} username={username} />
            ))
          }
        </FlipMove>
         
    </div>
  );
}

export default App;
