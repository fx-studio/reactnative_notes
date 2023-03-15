import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  FlatList,
  ActivityIndicator,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { searchMovies } from '../redux/actions/movieAction';

const MoviesScreen = () => {

  // properties
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movie.moviesSearch || []);
  const isLoading = useSelector(store => store.movie.isLoading);

  // data functions
  const [keyword, setKeyword] = useState("");

  const search = () => {
    console.log("send action with keyword: " + keyword);
    dispatch(searchMovies(keyword));
  };

  const renderMovieItem = (item) => {
    return (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.Poster}} style={styles.poster} />
      <View style={{marginHorizontal: 10}}>
        <Text style={styles.movieName}>{item.Title}</Text>
        <Text>Năm phát hành: {item.Year}</Text>
      </View>
    </View>
    )
  }

  // View
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', backgroundColor: "#cc3333", padding: 10 }}>
        <Text style={styles.textHeader}>Movies List</Text>
      </View>
      {/* Giao diện thanh tìm kiếm */}
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Nhập từ khóa tìm kiếm"
          value={keyword}
          onChangeText={setKeyword}
        />
        <TouchableOpacity
          onPress={search}
          style={{ ...styles.btn, backgroundColor: '#3d85c6' }}>
          <Text style={styles.btnText}> Tìm kiếm </Text>
        </TouchableOpacity>
        {/* Giao diện danh sách phim được tìm thấy */}
        <FlatList
          data={movies}
          renderItem={({item}) => renderMovieItem(item)}
          ListHeaderComponent={() => (!movies.length ? 
            <Text>Không tìm thấy kêt quả phù hợp</Text>  
            : null)}
        />
      </View>
      {/** Loading UI */}
      {isLoading && (
      <View style={styles.loading}>
        <ActivityIndicator size='large' color="#cc3333" />
      </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    paddingVertical: 20,
  },
  itemContainer: {
    height: 100, 
    flexDirection:'row', 
    alignItems: 'center',
    marginVertical: 10,
    padding: 10
  },
  poster: {
    width: 100, 
    height: 100,
  },
  movieName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    width: "80%"
  },
  searchInput: {
    width: '90%',
    borderWidth: 2, 
    borderColor:"#3d85c6",
    borderRadius: 15,
  },
  btn: {
    backgroundColor: '#086972',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 50,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.7,
    backgroundColor: 'black',
  justifyContent: 'center',
  alignItems: 'center' },
})

export default MoviesScreen;