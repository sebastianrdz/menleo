import { HeaderComponent, SettingsRow } from 'components';
import { useNavigation, StackActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from 'hooks';

const SettingsScreen = () => {
  const { signOut } = useAuth();

  const navigation = useNavigation();
  const [height, setHeight] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const _settings = [
    {
      icon: <Ionicons name="body-outline" size={24} color="black" />,
      title: 'Altura',
      inputField: {
        placeholder: '182',
        value: height,
        onChangeText: (text: string) => setHeight(text),
      },
    },
    {
      icon: <Ionicons name="calendar-outline" size={24} color="black" />,
      title: 'Fecha de Nacimiento',
      inputField: {
        placeholder: 'dd/mm/yyyy',
        value: birthDate,
        onChangeText: (text: string) => setBirthDate(text),
      },
    },
    {
      icon: <Ionicons name="book-outline" size={24} color="black" />,
      title: 'Programas Guardados',
      onPress: () => navigation.navigate('SettingsSavedPrograms'),
    },
    {
      icon: <Ionicons name="sunny-outline" size={24} color="black" />,
      title: 'Tematica',
      onPress: () => navigation.navigate('SettingsTheme'),
    },
    {
      icon: <Ionicons name="help-circle-outline" size={24} color="black" />,
      title: 'Ayuda',
      onPress: () => navigation.navigate('SettingsHelp'),
    },
    {
      icon: <Ionicons name="notifications-outline" size={24} color="black" />,
      title: 'Notificaciones',
      onPress: () => navigation.navigate('SettingsNotifications'),
    },
    {
      icon: <Ionicons name="document-outline" size={24} color="black" />,
      title: 'Aviso de Privacidad',
      onPress: () => navigation.navigate('SettingsPrivacyPolicy'),
    },
    {
      icon: <Ionicons name="log-out-outline" size={24} color="black" />,
      title: 'Cerrar Sesion',
      onPress: signOut,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent
        title={'Ajustes'}
        onBackPress={() => navigation.dispatch(StackActions.pop(1))}
      />

      {_settings.map((setting, index) => (
        <SettingsRow
          key={index}
          icon={setting.icon}
          title={setting.title}
          inputField={setting.inputField}
          onPress={setting.onPress}
        />
      ))}
    </SafeAreaView>
  );
};

export default SettingsScreen;
