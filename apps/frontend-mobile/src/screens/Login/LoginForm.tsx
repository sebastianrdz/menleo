import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ButtonComponent, TextInputComponent } from 'components/ui';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from 'hooks';

const LoginForm = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text: string) => setEmail(text);
  const handlePasswordChange = (text: string) => setPassword(text);
  const handleSubmit = async () => signIn(email, password);
  const navigateToRegister = () => navigation.navigate('Register');
  const navigateToForgotPassword = () => navigation.navigate('ForgotPassword');

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>INICIAR SESION</Text>
      <TextInputComponent
        label="Correo electronico"
        placeholder="john.doe@gmail.com"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInputComponent
        label="Contraseña"
        placeholder=""
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />

      <View style={styles.flexRow}>
        <Text>No tienes cuenta?</Text>
        <ButtonComponent
          text={'Crear Cuenta'}
          onPress={navigateToRegister}
          variant={'link'}
        />
      </View>
      <View style={styles.flexRow}>
        <Text>Olvidaste tu Contraseña?</Text>
        <ButtonComponent
          text={'Recuperar'}
          onPress={navigateToForgotPassword}
          variant={'link'}
        />
      </View>

      <ButtonComponent
        text={'INICIAR SESION'}
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

export default LoginForm;
