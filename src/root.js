import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import containers from './styles/containers';
import colors from './styles/colors';
import text from './styles/text';

const Root = () => {
  const VisibleSection = () => (
    <View style={containers.viewSection}>
      <Text style={text.t3}>Este conteúdo está em uma SEÇÂO VISÍVEL</Text>
      <Text style={text.t1}>Olá Dev! Isto é um Título!</Text>
      <Text style={text.t2}>Isto é um subtítulo</Text>
      <Text style={{ textAlign: 'justify' }}>
        Este texto tem um tamanho padrão e está
        sendo exibido sem qualquer formatação.
      </Text>
    </View>
  );

  const NotVisibleSection = () => (
    <View style={containers.section}>
      <Text style={text.t3}>Este conteúdo está em uma SEÇÃO NÃO VISÍVEL</Text>
      <Text style={text.t1}>Olá Dev! Isto é um Título!</Text>
      <Text style={text.t2}>Isto é um subtítulo</Text>
      <Text style={{ textAlign: 'justify' }}>
        Este texto tem um tamanho padrão e está
        sendo exibido sem qualquer formatação.
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cor Primária atual</Text>
      </View>

      <ScrollView>
        <VisibleSection />

        <NotVisibleSection />

        <NotVisibleSection />

        <VisibleSection />

        <VisibleSection />

        <NotVisibleSection />
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Cor Secundária atual
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Root;

const styles = StyleSheet.create({
  container: {
    ...containers.container,
  },
  header: {
    ...containers.section,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.primary
  },
  headerTitle: {
    ...text.t1,
    textAlign: 'center'
  },
  footer: {
    backgroundColor: colors.secondary
  },
  footerText: {
    ...text.t1,
    color: '#fff',
    textAlign: 'center'
  }
})