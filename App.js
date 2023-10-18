import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, KeyboardAvoidingView, ScrollView} from 'react-native';

const CadastroEPIEPC = () => {
 const [epis, setEpis] = useState([]);
  const [id, setId] = useState('');
  const [descricao, setDescricao] = useState('');
  const [ca, setCA] = useState('');
  const [validade, setValidade] = useState('');
  const [lote, setLote] = useState('');
  const [categoriaNR, setCategoriaNR] = useState('');
  const [notaFiscal, setNotaFiscal] = useState('');
  const [observacao, setObservacao] = useState('');

  const handleSaveEPI = () => {
    // Valide os campos manualmente antes de salvar:
    if (!id || !descricao || !ca || !validade) {
      alert('Preencha todos os campos obrigatórios: ID, Descrição, CA e Validade.');
      return;
    }

    const novoEPI = {
      id,
      descricao,
      ca,
      validade,
      lote,
      categoriaNR,
      observacao,
      notaFiscal,
    };
    setEpis([...epis, novoEPI]);

    // Limpe os campos após o salvamento:
    setId('');
    setDescricao('');
    setCA('');
    setValidade('');
    setLote('');
    setCategoriaNR('');
    setObservacao('');
    setNotaFiscal('');
  };
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.heading}>Cadastro de EPI e EPC</Text>
      <ScrollView>
        <TextInput
          style={styles.input}
          placeholder="ID"
          value={id}
          onChangeText={(text) => setId(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={descricao}
          onChangeText={(text) => setDescricao(text)}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputHalf}
            placeholder="CA"
            value={ca}
            onChangeText={(text) => setCA(text)}
          />
          <TextInput
            style={styles.inputHalf}
            placeholder="Validade"
            value={validade}
            onChangeText={(text) => setValidade(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputHalf}
            placeholder="Lote"
            value={lote}
            onChangeText={(text) => setLote(text)}

          />
            <TextInput
            style={styles.inputHalf}
            placeholder="Nota Fiscal"
            value={notaFiscal}
            onChangeText={(text) => setNotaFiscal(text)}

          />
          <TextInput
            style={styles.inputHalf}
            placeholder="Categoria NR"
            value={categoriaNR}
            onChangeText={(text) => setCategoriaNR(text)}

          />
        </View>
        <TextInput
          style={styles.inputObs}
          placeholder="Observação"
          value={observacao}
          onChangeText={(text) => setObservacao(text)}
        />
      </ScrollView>
      <Button style={styles.btn} title="Salvar" onPress={handleSaveEPI} />

      {/*Lista para itens cadastrados:*/}
      <FlatList
        data={epis}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.epiItem}>
            <Text style={styles.textFlatListCampos}>ID: {item.id}</Text>
            <Text style={styles.textFlatListCampos}>Descrição: {item.descricao}</Text>
            <Text style={styles.textFlatListCampos}>CA: {item.ca}</Text>
            <Text style={styles.textFlatListCampos}>Validade: {item.validade}</Text>
            <Text style={styles.textFlatListCampos}>Lote: {item.lote}</Text>
            <Text style={styles.textFlatListCampos}>Nota Fiscal: {item.notaFiscal}</Text>
            <Text style={styles.textFlatListCampos}>Categoria NR: {item.categoriaNR}</Text>
            <Text style={styles.textFlatListCampos}>Observação: {item.observacao}</Text>
          </View>
        )}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  
//Container geral:
  container: {
    flex: 1,
    padding: 20,
  },

//
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight:"bold"
  },

//  
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth:1,
    marginBottom: 10,
    padding: 5,
  },

//
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
//
  inputHalf: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth:1,
    marginBottom: 10,
    padding: 5,
    marginRight: 5,
  },

// Estilo para lista dos itens cadastrado:
  epiItem: {
    marginTop: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },

//Estilo para letras no campo FlatList:
  textFlatListCampos: {
    fontWeight:"bold",
  },

 //Formatação para campo de observação:
  inputObs: {
    height: 50,
    borderColor: 'gray',
    borderBottomWidth:1,
    marginBottom: 10,
    paddingLeft: 5,
  },

});

export default CadastroEPIEPC;