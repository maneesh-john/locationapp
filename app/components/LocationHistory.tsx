import React from "react";
import { FlatList, View, Text } from "react-native";

import { Location } from "../types/context";
import styles from "../styles";

type Props = {
  history: Location[];
}

const LocationHistory: React.FC<Props> = ({ history }) => {

  return(
    <FlatList
      data={history}
      renderItem={({ item }) => {
        return(
          <View>
            <Text style={styles.header} numberOfLines={1}>{item.name}</Text>
            <Text style={styles.subHeader}>{item.time}</Text>
          </View>
        );
      }}
    />
  );
}

export default LocationHistory;