import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ButtonComponent, TextInputComponent } from 'components/ui';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from 'hooks';

const RegisterForm = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleEmailChange = (text: string) => setEmail(text);
  const handleUsernameChange = (text: string) => setUsername(text);
  const handlePasswordChange = (text: string) => setPassword(text);
  const handlePasswordConfirmationChange = (text: string) =>
    setPasswordConfirmation(text);
  const navigateToLogin = () => navigation.navigate('Login');

  const handleSubmit = async () => signIn(email, password);

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>CREAR CUENTA</Text>
      <TextInputComponent
        label="Correo electronico"
        placeholder="john.doe@gmail.com"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInputComponent
        label="Nombre de usuario"
        placeholder="johndoe123"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <TextInputComponent
        label="Contraseña"
        placeholder=""
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <TextInputComponent
        label="Confirmar Contraseña"
        placeholder=""
        value={passwordConfirmation}
        onChangeText={handlePasswordConfirmationChange}
        secureTextEntry={true}
      />

      <View style={styles.flexRow}>
        <Text>Ya tienes cuenta?</Text>
        <ButtonComponent
          text={'Iniciar sesion'}
          onPress={navigateToLogin}
          variant={'link'}
        />
      </View>

      <ButtonComponent
        text={'CREAR CUENTA'}
        onPress={handleSubmit}
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

export default RegisterForm;
