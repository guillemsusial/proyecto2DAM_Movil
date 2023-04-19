import * as React from "react";
import { Searchbar } from "react-native-paper";
import { paleta } from "./Colores";
import { View } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={{backgroundColor:paleta.fondo}}>
      <Searchbar

        style={{ backgroundColor: paleta.variante1}}
        inputStyle={{color:paleta.fondo}}
        placeholderTextColor={paleta.fondo}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

export default Search;
