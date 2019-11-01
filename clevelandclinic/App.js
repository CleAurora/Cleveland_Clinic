/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component{
  constructor(){
    super();
    this.state = {
      medicos: [],
    };
  }

  componentDidMount() {
    this._carregarMedicos();
  }

  _carregarMedicos = async () => {
    await fetch('http://localhost:5000/api/medicos')
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
          keyExtractor={item => item.IdMedico}
          renderItem={({ item }) => (
            <View>
              <Text>{item.Nome}</Text>
              <Text>{item.DataNascimento}</Text>
              <Text>{item.CRM}</Text>
              <Text>{item.Ativo}</Text>
            </View>
          )}
        />
      </Fragment>

    );
  }

}

// const App = () => {
//   return (
//     <Fragment>
//       <Text>Teste</Text>
//     </Fragment>
//   );
// };

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
