import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { GiftedChat } from 'react-native-gifted-chat';
import { dialogflowConfig } from '../../../env';
import RenderBubble from './bubble';
import { BOT_USER, data } from './data';
import styles from './styles';
import React from 'react';

export default function ChatBotScreen() {
  const [messages, setMessages] = useState(data);

  // Configuration chatbot
  useEffect(() => {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id,
    );
  });

  const handleGoogleResponse = (result, updatedMessages) => {
    // console.log('handleGoogleResponse: ', result);
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    // console.log('handleGoogleResponse return: ', text);
    sendBotResponse(text, updatedMessages);
  };

  const sendBotResponse = (text, updatedMessages) => {
    let msg = {
      _id: messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER,
    };
    let updateMs = GiftedChat.append(updatedMessages, [msg]);
    // console.log('sendBotRes after Update: ', updateMs);
    setMessages(updateMs);
  };

  const onSend = (ms = []) => {
    let updateMs = GiftedChat.append(messages, ms);
    // console.log('onsend updateMs: ', updateMs);
    setMessages(updateMs);
    let message = ms[0].text;
    // console.log('onsend question: ', message);
    Dialogflow_V2.requestQuery(
      message,
      result => handleGoogleResponse(result, updateMs),
      error => console.log(error),
    );
  };

 

  return (
    <View style={styles.main}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={props => RenderBubble(props)}
      />
    </View>
  );
}
