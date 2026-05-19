import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { fetchMovies } from '../services/moviesApi';

export default function MoviesScreen() {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await fetchMovies();
        setMovies(response);
      } catch (requestError) {
        console.error(requestError);
        setError('Não foi possível carregar os filmes. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>Ano: {item.releaseYear}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  list: {
    padding: 16,
    gap: 12,
  },
  item: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#f9fafb',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
  subtitle: {
    marginTop: 4,
    color: '#374151',
  },
  error: {
    color: '#b91c1c',
    fontSize: 16,
    textAlign: 'center',
  },
});
