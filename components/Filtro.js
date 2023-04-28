import * as React from "react";
import { Searchbar } from "react-native-paper";
import { paleta } from "./Colores";
import { View } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  //FALTA barra de busqueda
  //https://medium.com/@betomoedano01/search-filter-react-native-search-bar-tutorial-fe3069fa55b5

  return (
    <View
      style={{
        backgroundColor: paleta.fondo,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Searchbar
        style={{
          backgroundColor: paleta.variante1,
          width: "80%",
        }}
        inputStyle={{ color: paleta.fondo }}
        placeholderTextColor={paleta.fondo}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

export default Search;
