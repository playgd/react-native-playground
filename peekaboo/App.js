import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends Component {
  constructor () {
    super()
    this.see = 'https://cdn.shopify.com/s/files/1/1061/1924/products/Monkey_Face_Emoji_grande.png'
    this.dontSee = 'https://ih1.redbubble.net/image.215796661.2882/flat,800x800,075,f.u1.jpg'

    this.state = {
      text: '?',
      image: this.dontSee
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        text: this.state.image === this.see ? '?' : 'Peekaboo!',
        image: this.state.image === this.see ? this.dontSee : this.see
      })
    }, 1500)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 50, fontWeight: 'bold' }}>{this.state.text}</Text>
        <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
