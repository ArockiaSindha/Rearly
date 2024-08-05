import React from 'react';
import { View, Text, FlatList, ListRenderItem, Image } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { GradingSrcstyle } from './GradingSrcstyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Item {
    id: string;
    code: string;
    weight: string;
  }

const data: Item[]= [
  { id: '1', code: 'H1234', weight: '38 kgs' },
  { id: '2', code: 'H1234', weight: '38 kgs' },
  { id: '3', code: 'H1234', weight: '38 kgs' },
  { id: '4', code: 'H1234', weight: '38 kgs' },
  { id: '5', code: 'H1234', weight: '38 kgs' },
  { id: '6', code: 'H1234', weight: '38 kgs' },
];

const GradingScreen = () => {
  const renderItem: ListRenderItem<Item> = ({ item }) => (
    <View style={GradingSrcstyle.itemContainer}>
      <Avatar.Text  label="SM" style={GradingSrcstyle.avatar} />
      <View style={GradingSrcstyle.textContainer}>
        <Text style={GradingSrcstyle.codeText}>{item.code}</Text>
        <Text style={GradingSrcstyle.weightText}>
          Last known weight <Text style={GradingSrcstyle.weightValue}>{item.weight}</Text>
        </Text>
      </View>
      <Button mode="outlined" style={GradingSrcstyle.button}>
        <Text style={GradingSrcstyle.buttontext}>View</Text>
      </Button>
    </View>
  );

  return (
    <View style={GradingSrcstyle.container}>
         <View style={GradingSrcstyle.headerContainer}>
            <TouchableOpacity>
        <Image source={require('../../assets/Images/Arrow.png')}
        style={GradingSrcstyle.image}/>
        </TouchableOpacity>
      <Text style={GradingSrcstyle.header}>Grading</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default GradingScreen;
