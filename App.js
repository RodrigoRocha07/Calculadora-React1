import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Calculator() {
  const [result, setResult] = useState('0');
  const [expression, setExpression] = useState('');

  const handlePress = (value) => {
    switch (value) {
      case '=':
        const res = eval(expression);
        setResult(res.toString());
        setExpression(res.toString());
        break;
      case 'AC':
        setResult('0');
        setExpression('');
        break;
      case 'C':
        const newExp = expression.slice(0, -1);
        setExpression(newExp);
        setResult(newExp || '0');
        break;
      default:
        const newExpression = expression + value;
        setExpression(newExpression);
        setResult(newExpression);
        break;
    }
  };

  const renderButton = (value, style) => (
    <TouchableOpacity
      style={style}
      onPress={() => handlePress(value)}
    >
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
     
      <Text style={styles.resultText}>{result}</Text>
      <View style={styles.row}>
        {renderButton('AC', [styles.button, styles.grayButton])}
        {renderButton('C', [styles.button, styles.grayButton])}
        {renderButton('/', styles.button)}
      </View>
      <View style={styles.row}>
        {renderButton('7', styles.button)}
        {renderButton('8', styles.button)}
        {renderButton('9', styles.button)}
        {renderButton('*', styles.button)}
      </View>
      <View style={styles.row}>
        {renderButton('4', styles.button)}
        {renderButton('5', styles.button)}
        {renderButton('6', styles.button)}
        {renderButton('-', styles.button)}
      </View>
      <View style={styles.row}>
        {renderButton('1', styles.button)}
        {renderButton('2', styles.button)}
        {renderButton('3', styles.button)}
        {renderButton('+', styles.button)}
      </View>
      <View style={styles.row}>
        {renderButton('0', [styles.button, styles.zeroButton])}
        {renderButton('.', styles.button)}
        {renderButton('=', styles.button)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  resultText: {
    color: 'white',
    fontSize: 80,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'white',
  },
  grayButton: {
    backgroundColor: '#A6A6A6',
  },
  zeroButton: {
    flex: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
});