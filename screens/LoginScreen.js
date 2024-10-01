import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleLogin = async () => {
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
  
        if (response.ok) {
          // Armazenar token JWT
          console.log('Token JWT:', data.token);
          // Navegar para a tela de gráficos
          navigation.navigate('GraphScreen', { token: data.token });
        } else {
          setErrorMessage(data.message || 'Erro no login');
        }
      } catch (error) {
        setErrorMessage('Erro ao conectar-se ao servidor.');
      }
    };
  
    return (
      <View style={styles.container}>
        <Text>Usuário: fiap</Text>
        <Text>Senha: 123</Text>
        <Text>Login</Text>
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Entrar" onPress={handleLogin} />
        <Button title="Registrar" onPress={() => navigation.navigate('RegisterScreen')} />
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20,gap: 8 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingLeft: 10 },
    error: { color: 'red' },
});