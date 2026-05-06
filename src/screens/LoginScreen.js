import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { loginUser } from '../firebase/authService';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');

  async function handleLogin() {
    if (!email.trim() || !password.trim()) {
      setErro("Preencha email e senha.");
      return;
    }

    try {
      await loginUser(email.trim(), password);
      setErro('');
      navigation.navigate('Home');
    } catch (error) {
      setErro("E-mail ou senha inválidos. Tente novamente.");
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
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>

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

        <Button title="Entrar" onPress={handleLogin} color = "#6A5ACD"/>

        {erro ? (
          <Text style={{ color: 'red', marginTop: 10 }}>{erro}</Text>
        ) : null}

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={{ marginTop: 10 }}>Criar conta?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')}>
          <Text style={{ marginTop: 10 }}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}