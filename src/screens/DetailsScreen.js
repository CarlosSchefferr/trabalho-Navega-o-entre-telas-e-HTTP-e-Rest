import { Button, StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Button title="Voltar para home" onPress={() => navigation.goBack()} />
      <Button title="Listar filmes" onPress={() => navigation.navigate('Movies')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
});
