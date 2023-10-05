import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ButtonComponent, TextInputComponent } from 'components/ui';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordForm = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');

  const handleEmailChange = (text: string) => setEmail(text);
  const navigateToLogin = () => navigation.navigate('Login');

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>RECUPERAR CONTRASENA</Text>
      <TextInputComponent
        label="Correo electronico"
        placeholder="john.doe@gmail.com"
        value={email}
        onChangeText={handleEmailChange}
      />
      <View style={styles.flexRow}>
        <Text>Ya tienes acuerdas?</Text>
        <ButtonComponent
          text={'Iniciar sesion'}
          onPress={navigateToLogin}
          variant={'link'}
        />
      </View>
      <ButtonComponent
        text={'CREAR CUENTA'}
        onPress={() => void 0}
        variant={'primary'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ForgotPasswordForm;
