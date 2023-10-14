import { PostComponent } from 'components';
import { FlatList } from 'react-native';

const ProfileTabPosts = () => {
  const posts = [
    {
      id: '1',
      author: 'John Doe',
      profilePicture:
        'https://cdn.pixabay.com/photo/2023/08/21/23/11/woman-8205187_1280.jpg',
      content:
        'Hello world! Today is a good day to code! I love React Native! I hpoe you are having a good day!',
      timestamp: 'now',
    },
    {
      id: '2',
      author: 'John Doe Smith',
      profilePicture:
        'https://cdn.pixabay.com/photo/2023/08/21/23/11/woman-8205187_1280.jpg',
      content:
        'I have had a bussy day today! I keep learning React Native! I love it! Feel like the more I code the more I learn add it is really goin to help me in the future!',
      timestamp: '30 minutes ago',
    },
    {
      id: '3',
      author: 'John Doe',
      profilePicture:
        'https://cdn.pixabay.com/photo/2023/08/21/23/11/woman-8205187_1280.jpg',
      content: 'Hello world!',
      timestamp: '1 hour ago',
    },
    {
      id: '4',
      author: 'John Doe',
      profilePicture:
        'https://cdn.pixabay.com/photo/2023/08/21/23/11/woman-8205187_1280.jpg',
      content: 'Hello world!',
      timestamp: '1h',
    },
    {
      id: '5',
      author: 'John Doe',
      profilePicture:
        'https://cdn.pixabay.com/photo/2023/08/21/23/11/woman-8205187_1280.jpg',
      content: 'Hello world!',
      timestamp: '1d',
    },
    {
      id: '6',
      author: 'John Doe',
      profilePicture:
        'https://cdn.pixabay.com/photo/2023/08/21/23/11/woman-8205187_1280.jpg',
      content: 'Hello world!',
      timestamp: '1d',
    },
    {
      id: '7',
      author: 'John Doe',
      profilePicture:
        'https://cdn.pixabay.com/photo/2023/08/21/23/11/woman-8205187_1280.jpg',
      content: 'Hello world!',
      timestamp: '1d',
    },
    {
      id: '8',
      author: 'John Doe',
      profilePicture:
        'https://cdn.pixabay.com/photo/2023/08/21/23/11/woman-8205187_1280.jpg',
      content: 'Hello world!',
      timestamp: '2d',
    },
    {
      id: '9',
      author: 'John Doe',
      profilePicture:
        'https://cdn.pixabay.com/photo/2023/08/21/23/11/woman-8205187_1280.jpg',
      content: 'Hello world!',
      timestamp: '2d',
    },
    {
      id: '10',
      author: 'John Doe',
      profilePicture:
        'https://cdn.pixabay.com/photo/2023/08/21/23/11/woman-8205187_1280.jpg',
      content: 'Hello world!',
      timestamp: '2d',
    },
  ];
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PostComponent
          author={item.author}
          content={item.content}
          timestamp={item.timestamp}
        />
      )}
    />
  );
};

export default ProfileTabPosts;
