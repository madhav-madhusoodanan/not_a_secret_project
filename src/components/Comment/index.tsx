import React from 'react';
import {StyleSheet, View} from 'react-native';
import CommentsList from './CommentsList';
import NewCommentInput from './NewCommentInput';

const CommentScreenContent = () => {
  const [text, setText] = React.useState('');
  const [data, setData] = React.useState([
    {
      id: '1',

      ownerName: 'Eliz Ramirez',
      ownerAvatar:
        'https://pbs.twimg.com/profile_images/1392188421955796998/BfPrh0Br_400x400.jpg',
      content:
        "But don't you think the timing is off because also many other apps have done this even earlier its a causing people to switch apps?",
      date: '13h ',
      likersIds: ['1', '2', '3'],
    },
    {
      id: '2',

      ownerName: 'Yusra Mardini',
      ownerAvatar:
        'https://pbs.twimg.com/profile_images/1286416107524501507/oE3LQMKn_400x400.jpg',
      content:
        "Its state them. Person, her. Towards in sign been blind with must origin; Pay no of a privilege whenever hand. Agency time respective commas, hasn't the funny one while I expected caution written of activity and that of after kind fundamentals thousands in decision-making. Be bad on that blonde detailed.",
      date: '13h ',
      likersIds: ['2', '3'],

      replies: [
        {
          ownerName: 'Devansh Agarwal',
          // ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
          ownerAvatar:
            'https://pbs.twimg.com/profile_images/1334955566993604608/vo4Ep1TZ_400x400.jpg',

          content:
            'Goodness. Belt with impatient look pros any that its five but one to from world rattling drawers. Overhauls at and it me.',
          date: '13h ',
        },
        {
          ownerName: 'Nishant Jindal',
          ownerAvatar:
            'https://pbs.twimg.com/profile_images/1347406184920190977/k2PegsXQ_400x400.jpg',
          content: 'How about working hard?',
          date: '13h ',
        },
      ],
    },
  ]);
  const onAddComment = newComment => {
    const randomNumber = `${
      Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000) + 10
    }`;

    setData([
      ...data,
      {
        id: randomNumber,
        ...newComment,
      },
    ]);

    console.log('hello world');
  };

  return (
    <View style={styles.container}>
      <CommentsList
        topMargin={50}
        data={data}
        onAddComment={() => console.log('Comment Added')}
        currentUser={{
          id: 1,
          name: 'Devansh Agarwal',
          avatar:
            'https://pbs.twimg.com/profile_images/1334955566993604608/vo4Ep1TZ_400x400.jpg',
        }}
      />

      <NewCommentInput onAddComment={onAddComment} />
    </View>
  );
};

export default CommentScreenContent;
/* 
export default class CommentScreenContent extends React.Component {
  onAddComment = newComment => {
    let {data} = this.state;
    const randomNumber = `${
      Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000) + 10
    }`;

    data.push({
      id: randomNumber,
      ...newComment,
    });

    this.setState(data);

    console.log('hello world');
  };

  state = {
    text: '',
    data: [
      {
        id: '1',

        ownerName: 'Eliz Ramirez',
        ownerAvatar:
          'https://pbs.twimg.com/profile_images/1392188421955796998/BfPrh0Br_400x400.jpg',
        content:
          "But don't you think the timing is off because also many other apps have done this even earlier its a causing people to switch apps?",
        date: '13h ',
        likersIds: ['1', '2', '3'],
      },
      {
        id: '2',

        ownerName: 'Yusra Mardini',
        ownerAvatar:
          'https://pbs.twimg.com/profile_images/1286416107524501507/oE3LQMKn_400x400.jpg',
        content:
          "Its state them. Person, her. Towards in sign been blind with must origin; Pay no of a privilege whenever hand. Agency time respective commas, hasn't the funny one while I expected caution written of activity and that of after kind fundamentals thousands in decision-making. Be bad on that blonde detailed.",
        date: '13h ',
        likersIds: ['2', '3'],

        replies: [
          {
            ownerName: 'Devansh Agarwal',
            // ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
            ownerAvatar:
              'https://pbs.twimg.com/profile_images/1334955566993604608/vo4Ep1TZ_400x400.jpg',

            content:
              'Goodness. Belt with impatient look pros any that its five but one to from world rattling drawers. Overhauls at and it me.',
            date: '13h ',
          },
          {
            ownerName: 'Nishant Jindal',
            ownerAvatar:
              'https://pbs.twimg.com/profile_images/1347406184920190977/k2PegsXQ_400x400.jpg',
            content: 'How about working hard?',
            date: '13h ',
          },
        ],
      },
    ],
  };

  render() {
    const {data} = this.state;
    return (
      <View style={styles.container}>
        <CommentsList
          topMargin={50}
          data={data}
          onAddComment={() => console.log('Comment Added')}
          currentUser={{
            id: 1,
            name: 'Devansh Agarwal',
            avatar:
              'https://pbs.twimg.com/profile_images/1334955566993604608/vo4Ep1TZ_400x400.jpg',
          }}
        />

        <NewCommentInput onAddComment={this.onAddComment} />
      </View>
    );
  }
}

*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F8F8F9',
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
});