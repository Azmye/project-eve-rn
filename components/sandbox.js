import { StyleSheet, Text, View } from 'react-native';

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  boxOne: {
    flex: 2,
    textAlign: 'center',
    backgroundColor: 'violet',
    padding: 10,
  },
  boxTwo: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: 'yellow',
    padding: 20,
  },
  boxThree: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: 'coral',
    padding: 30,
  },
  boxFour: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: 'skyblue',
    padding: 40,
  },
});

export default Sandbox;
