import React, { Component, useState } from 'react';
import { Button, Image, StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './Header';
import {
  Card,
  DataTable,
  Subheading,
  Dialog,
  Paragraph,
} from 'react-native-paper';

export default ({ navigation, data_sample }) => {
  const [visible, setVisible] = useState();

  const showDialog = () => navigation.navigate('TkphDetails',{data123:data_sample});

  const hideDialog = () => setVisible(false);
  console.log(Date.now());
  return (
    <Card elevation={10} style={styles.card} onPress={showDialog}>
      <View style={styles.heading}>
        <Subheading>{data_sample['mine_details']}</Subheading>
      </View>
      <DataTable.Row>
        <DataTable.Cell>date-stamp</DataTable.Cell>
        <DataTable.Cell>{data_sample['date_stamp']}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>vehicle_make</DataTable.Cell>
        <DataTable.Cell>{data_sample['vehicle_make']}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>vehicle_model</DataTable.Cell>
        <DataTable.Cell>{data_sample['vehicle_model']}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>tyre_size</DataTable.Cell>
        <DataTable.Cell>{data_sample['tyre_size']}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>added_by</DataTable.Cell>
        <DataTable.Cell>{data_sample['added_by']}</DataTable.Cell>
      </DataTable.Row>
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: StatusBar.currentHeight,
  },
  logo: {
    height: 80,
  },
  card: {
    marginBottom: 10,
  },
  heading: {
    marginBottom: 10,
    alignItems: 'center',
  },
});
