import React, { useContext, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context)

  const blogPost = state.find((
    blogPost) => blogPost.id === navigation.getParam('id')
  )

  const [title, setTile] = useState(blogPost.title)
  const [content, setContent] = useState(blogPost.content)

  return (
    <View>
      <Text>Edit Title:</Text>
      <TextInput value={title} onChangeText={(newTitle) => setTile(newTitle)}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({})

export default EditScreen
