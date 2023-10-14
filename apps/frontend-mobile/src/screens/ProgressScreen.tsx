import { HeaderComponent } from 'components';
import { SafeAreaView } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

const ProgressScreen = () => {
  const user = {
    name: 'John Doe',
    age: 25,
    weight: 80,
    targetWeight: 75,
    completedWorkouts: 5,
    totalWorkouts: 10,
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent title={'Progreso'} subtitle={'Domingo 16, Agosto'} />
      <View style={styles.container}>
        <Text style={styles.title}>Fitness Progress</Text>
        <Text style={styles.subtitle}>Hello, {user.name}!</Text>
        <Text>Your age: {user.age} years</Text>
        <Text>Your weight: {user.weight} kg</Text>
        <Text>Your target weight: {user.targetWeight} kg</Text>
        <Text>Completed Workouts: {user.completedWorkouts}</Text>
        <Text>Total Workouts: {user.totalWorkouts}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 12,
  },
});

export default ProgressScreen;
