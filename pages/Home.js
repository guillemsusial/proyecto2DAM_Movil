import { View, Text, ScrollView } from "react-native";
import Boxes from "../components/Boxes";
import Header from "../components/Header";
import { Card } from "../components/cards";
export default function Home() {
  const state = {
    names: [
       {'name': 'Ben', 'id': 1},
       {'name': 'Susan', 'id': 2},
       {'name': 'Robert', 'id': 3},
       {'name': 'Mary', 'id': 4},
       {'name': 'Daniel', 'id': 5},
       {'name': 'Laura', 'id': 6},
       {'name': 'John', 'id': 7},
       {'name': 'Debra', 'id': 8},
       {'name': 'Aron', 'id': 9},
       {'name': 'Ann', 'id': 10},
       {'name': 'Steve', 'id': 11},
       {'name': 'Olivia', 'id': 12}
    ]
  }
  return (
    <>
      <Header />     
      <Boxes size={1}>
           <ScrollView>
               {
                 state.names.map((item, index) => (
                     <Card key = {item.id} size={1}>
                        <Text>{item.name}</Text>
                     </Card>
                  ))
               }
            </ScrollView>     
      </Boxes>
    </>
  );
}

