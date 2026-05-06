import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { registerUser } from '../firebase/authService';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');

  async function handleRegister() {
    if (!name.trim() || !email.trim() || !password.trim()) {
      setErro("Preencha nome, email e senha.");
      return;
    }

    try {
      await registerUser(email.trim(), password);
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso.');
      navigation.goBack();
    } catch (error) {
      setErro("Não foi possível cadastrar. Verifique os dados e tente novamente.");
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          padding: 20,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Cadastro</Text>

        <TextInput
          placeholder="Nome"
          value={name}
          onChangeText={setName}
          style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
        />

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
        />

        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
        />

        <Button title="Cadastrar" onPress={handleRegister} />

        {erro ? (
          <Text style={{ color: 'red', marginTop: 10 }}>{erro}</Text>
        ) : null}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}