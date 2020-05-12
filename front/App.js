/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {
  Provider as PaperProvider,
  Card,
  Title,
  Paragraph,
  Button,
  Avatar,
} from 'react-native-paper';

const App = () => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <PaperProvider>
          <Card>
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={LeftContent}
            />
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button onPress={() => alert('ok')}>Ok</Button>
            </Card.Actions>
          </Card>
        </PaperProvider>
      </SafeAreaView>
    </>
  );
};

export default App;
