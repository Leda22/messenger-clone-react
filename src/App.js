import React, { useEffect, useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from "./Message";
import db from "./firebase";
import firebase from 'firebase';
import FlipMove from 'react-flip-move';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
    });
  }, [])

  useEffect(() => {
    setUsername(prompt('Enter Your Name'));
  }, [])

  const sendMessages = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"></img>
      <h1>Messenger App</h1>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Write a Message" value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app__iconButton" type="submit" variant="outlined" color="primary" disabled={!input} onClick={sendMessages}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
