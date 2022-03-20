import React, {useEffect, useState} from 'react';
// import {Button, FormControl, InputLabel, Input} from '@mui/material';
import { FormControl, InputLabel, Input} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from "@material-ui/core";


function App() {
  const [input, setInput] = useState(''); 
  const [messages, setMessages] = useState([
    // {username:'Anchal', message: 'hey guys'},
    // {username:'Naitik', message: 'hello ' } //objects

  ]);
  const [username, setUsername] = useState(''); 

  //useState = variable in REACT
  //useEffect = run code on a condition 

  useEffect(() => {
    //run once when the app component loads
    db.collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot => {      //listeners:- listening the changes in code then update it in browser
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, [] )

  useEffect(() => {
    //run code here...
    //if its blank inside [], this code runs ONCE when the app components loads
    //if we have a variable like input, it runs every time input changes
    setUsername(prompt('Enter your name'));
  }, [] ); //condition

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    //all the logic to send a message goes
    event.preventDefault();     //when we press enter it should not refresh again
    
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    // setMessages([
    //   ...messages, { username: username, message: input}  //our message is an object now
    // ]);
    setInput('');

  }

  return (
    <div className="App">
      <div class="layer_1">
        <img className="img-icon" alternative="messenger-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/1200px-Facebook_Messenger_logo_2018.svg.png?w=10&h=10" />
        <h1>Hello Everybody :)</h1>
        <h2>Welcome {username}</h2>
        

        {/* <form className="app__form">
          <FormControl className="app__formControl">
            <InputLabel>Enter a message</InputLabel>
            <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />

            <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage} >
              <SendIcon />
            </IconButton>

            {/* <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button> 
          </FormControl>
          
        </form> */}

        <FlipMove>
        {
          messages.map(({id, message}) => (
            // <Message username={message.username} text={message.text} />  //text is pass to message.js as a props
            <Message key={id} username={username} message={message} />
            // <p>{message}</p>
          ))
        }
        </FlipMove>
      </div>

      <div class="layer_2">
        <form className="app__form">
          <FormControl className="app__formControl">
            <InputLabel>Enter a message</InputLabel>
            <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />

            <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage} >
              <SendIcon />
            </IconButton>

            {/* <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button> */}
          </FormControl>
          
        </form>

      </div>

      {/* messages themselves */}
      

    </div>
  );
}

export default App;
