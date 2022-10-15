import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const PizzaTranslator = () => {
  const [value, setValue] = useState('');

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        defaultValue={value}
        onChangeText={(input) => setValue(input)}
        placeholder={'Type here to translate!'}
        style={{
          borderColor: '#000',
          borderStyle: 'solid',
          borderWidth: 1,
          height: 40,
          padding: 10,
        }}
      />
      <Text>
        {value.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </View>
  );
};

export default PizzaTranslator;