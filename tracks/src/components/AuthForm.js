import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from './Spacer'

const AuthForm = ({
  headerText, errorMessage, onSubmit, submitButtonText
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Spacer>
        <Text h3>Sign Up Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      {state.errorMessage ?
        <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
      <Spacer>
        <Button title="Sign Up" onPress={() => signup({ email, password })}/>
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({})

export default AuthForm
