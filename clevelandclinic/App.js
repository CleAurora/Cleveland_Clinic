/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import { isTSEnumMember } from '@babel/types';


import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  constructor() {
    super();
    this.state = {
      medicos: [],
    };
  }

  componentDidMount() {
    this._carregarMedicos();
  }

  _carregarMedicos = async () => {
    await fetch('http://192.168.3.192:80/api/medicos')
      .then(resposta => resposta.json())
      .then(data => this.setState({ medicos: data }))
      .catch(erro => console.warn(erro));
  };

  render() {
    return (
      <Fragment>
        <Text>Medicos</Text>
        <FlatList
          data={this.state.medicos}
          keyExtractor={item => isTSEnumMember.IdMedico}
          renderItem={ ({item}) => (
            <View>
              <Text>{item.nome}</Text>
              <Text>{item.dataNascimento}</Text>
              <Text>{item.crm}</Text>
              <Text>{item.ativo}</Text>
            </View>
          )}
        />
      </Fragment>

    );
  }

}



const styles = StyleSheet.create({

  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

});

export default App;
