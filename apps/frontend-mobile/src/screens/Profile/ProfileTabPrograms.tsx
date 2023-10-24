import { useNavigation } from '@react-navigation/native';
import { WorkoutRow } from 'components';
import { FlatList } from 'react-native';

const ProfileTabPrograms = () => {
  const navigation = useNavigation();
  const workouts = [
    {
      title: 'Workout 1',
      subtitle: '3 exercises',
      imageSource: { uri: 'https://picsum.photos/seed/1/80' },
      onPress: () => navigation.navigate('Workout', { workoutId: 1 }),
    },
    {
      title: 'Workout 2',
      subtitle: '5 exercises',
      imageSource: { uri: 'https://picsum.photos/seed/2/80' },
      onPress: () => navigation.navigate('Workout', { workoutId: 2 }),
    },
    {
      title: 'Workout 3',
      subtitle: '10 exercises',
      imageSource: { uri: 'https://picsum.photos/seed/3/80' },
      onPress: () => navigation.navigate('Workout', { workoutId: 3 }),
    },
    {
      title: 'Workout 4',
      subtitle: '3 exercises',
      imageSource: { uri: 'https://picsum.photos/seed/4/80' },
      onPress: () => navigation.navigate('Workout', { workoutId: 4 }),
    },
    {
      title: 'Workout 5',
      subtitle: '5 exercises',
      imageSource: { uri: 'https://picsum.photos/seed/5/80' },
      onPress: () => navigation.navigate('Workout', { workoutId: 5 }),
    },
    {
      title: 'Workout 6',
      subtitle: '10 exercises',
      imageSource: { uri: 'https://picsum.photos/seed/6/80' },
      onPress: () => navigation.navigate('Workout', { workoutId: 6 }),
    },
  ];
  return (
    <FlatList
      data={workouts}
      renderItem={({ item }) => (
        <WorkoutRow
          title={item.title}
          subtitle={item.subtitle}
          imageSource={item.imageSource}
          onPress={item.onPress}
        />
      )}
      keyExtractor={(item) => item.title}
    />
  );
};

export default ProfileTabPrograms;
