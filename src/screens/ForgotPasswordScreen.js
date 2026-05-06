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
import { resetUserPassword } from '../firebase/authService';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  async function handleResetPassword() {
    if (!email.trim()) {
      setErro("Informe seu email.");
      return;
    }

    try {
      await resetUserPassword(email.trim());

      Alert.alert(
        'Email enviado',
        'Enviamos as instruções de recuperação de senha para seu email.'
      );

      setErro('');
      setMensagem('Enviamos as instruções de recuperação de senha para seu email.');

      navigation.goBack();
    } catch (error) {
      setMensagem('');
      setErro("Não foi possível enviar o email. Verifique o endereço e tente novamente.");
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
        <Text style={{ fontSize: 24, marginBottom: 20 }}>
          Recuperar Senha
        </Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={{
            borderWidth: 1,
            marginBottom: 10,
            padding: 10
          }}
        />

        <Button title="Enviar" onPress={handleResetPassword} />

        {erro ? (
          <Text style={{ color: 'red', marginTop: 10 }}>{erro}</Text>
        ) : null}

        {mensagem ? (
          <Text style={{ color: 'green', marginTop: 10 }}>{mensagem}</Text>
        ) : null}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}