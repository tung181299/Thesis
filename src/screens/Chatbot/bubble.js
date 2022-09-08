import { Bubble} from 'react-native-gifted-chat';
import * as TextStyle from '../../common/text';
import React from 'react';
import * as Colors from '../../constants/colors'

export default RenderBubble = props => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: Colors.SECONDARY,
        },
        left: {
          backgroundColor: "#b3b7bf",
        },
      }}
      textStyle={{
        right: [
          {
            fontSize: 13,
          },
          TextStyle.medium,
        ],
        left: [
          {
            fontSize: 13,
          },
          TextStyle.medium,
        ],
      }}
    />
  );
};