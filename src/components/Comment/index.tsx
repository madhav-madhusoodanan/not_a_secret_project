import React from 'react';
import {StyleSheet, View} from 'react-native';
import CommentsList from './CommentsList';
import NewCommentInput from './NewCommentInput';

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

        ownerName: 'Eliz Rami',
        ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
        content:
          "But don't you think the timing is off because also many other apps have done this even earlier its a causing people to switch apps?",
        date: '13h ',
        likersIds: ['1', '2', '3'],
      },
      {
        id: '2',

        ownerName: 'Daksh Aswal',
        ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
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
            ownerAvatar: 'https://i.imgur.com/2FXmVPb.jpg',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F8F8F9',
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
});
