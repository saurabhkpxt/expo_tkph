import React, { Component, useState, useEffect } from 'react';
import { Button, Image, StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './Header';
import {
  Card,
  DataTable,
  Subheading,
  Dialog,
  Paragraph,
} from 'react-native-paper';

export default (props) => {
  const [visible, setVisible] = React.useState();
  const [close, setClose] = React.useState(false);
  useEffect(() => {
    if (close === false) {
      setVisible(props.visible);
    } else {
      setVisible(false);
    }
  });

  const hideDialog = () => setClose(true);

  return (
    <Dialog visible={visible}>
      <Dialog.Title> Alert </Dialog.Title>
      <Dialog.Content>
        <Paragraph>This is simple dialog</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button title="Okay" onPress={hideDialog}>
          Done
        </Button>
      </Dialog.Actions>
    </Dialog>
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
