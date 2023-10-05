import { HeaderComponent } from 'components';
import { WorkInProgressContainer } from 'containers';
import { SafeAreaView } from 'react-native';

const ProgressScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent title={'Progreso'} subtitle={'Domingo 16, Agosto'} />
      <WorkInProgressContainer />
    </SafeAreaView>
  );
};

export default ProgressScreen;
