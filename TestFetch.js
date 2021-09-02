import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default  TestFetch= () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getUser = async () => {
     try {
      const response = await fetch('http://localhost:3000/User');
      const json = await response.json();
      setData(json.user);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ userId }, index) => userId}
          renderItem={({ item }) => (
            <Text>{item.firstName}   {item.lastName} <br></br>
            {item.email}</Text>
          )}
        />
      )}
    </View>
  );
};