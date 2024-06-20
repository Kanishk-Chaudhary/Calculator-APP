import * as React from "react";
import Button from "./Button";
import { View, Text, StyleSheet } from "react-native";
import { Styles } from "./GlobalStyles";

export default function Keyboard() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<number | null>(null);

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseFloat(secondNumber) + parseFloat(firstNumber));
        break;
      case "-":
        clear();
        setResult(parseFloat(secondNumber) - parseFloat(firstNumber));
        break;
      case "*":
        clear();
        setResult(parseFloat(secondNumber) * parseFloat(firstNumber));
        break;
      case "/":
        clear();
        setResult(parseFloat(secondNumber) / parseFloat(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  return (
    <>
    <View style={styles.row}>
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button title="C" onPress={clear} />
        <Button title="*" onPress={() => handleOperationPress("*")} />
        <Button title="/" onPress={() => handleOperationPress("/")} />
      </View>
      <View style={styles.row}>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button title="+" onPress={() => handleOperationPress("+")} />
      </View>
      <View style={styles.row}>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="-" onPress={() => handleOperationPress("-")} />
      </View>
      <View style={styles.row}>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")}/>
        <Button title="=" onPress={getResult} />
        
      </View>
      
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  display: {
    fontSize: 48,
    marginBottom: 20,
    textAlign: 'right',
    width: '80%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 10,
  },
});
