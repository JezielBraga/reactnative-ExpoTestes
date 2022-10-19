import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import containers from './styles/containers';
import colors from './styles/colors';
import text from './styles/text';

const Root = () => {

  return (
    <SafeAreaView style={{ ...containers.container }}>
      <View style={{ ...containers.section, paddingTop: 30, backgroundColor: colors.primary }}>
        <Text style={{ ...text.t1, textAlign: 'center' }}>Cor Primária atual</Text>
      </View>

      <View style={{ flex: 1 }}>
        <View style={containers.viewSection}>
          <Text style={text.t3}>Este conteúdo está em uma SEÇÂO VISÍVEL</Text>
          <Text style={text.t1}>Olá Dev! Isto é um Título!</Text>
          <Text style={text.t2}>Isto é um subtítulo</Text>
          <Text>Este texto tem um tamanho padrão e está
            sendo exibido sem qualquer formatação.</Text>
        </View>

        <View style={containers.section}>
          <Text style={{ ...text.t3 }}>Este conteúdo está em uma SEÇÃO NÃO VISÍVEL</Text>
          <Text style={text.t1}>Olá Dev! Isto é um Título!</Text>
          <Text style={text.t2}>Isto é um subtítulo</Text>
          <Text>Este texto tem um tamanho padrão e está
            sendo exibido sem qualquer formatação.</Text>
        </View>
      </View>

      <View style={{ backgroundColor: colors.secondary }}>
        <Text style={{ ...text.t1, color: '#fff', textAlign: 'center' }}>
          Cor Secundária atual
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Root;