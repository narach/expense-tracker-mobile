import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';
import {CategoryData} from '../types/CategoryData';
import {fetchExpensesSpread} from '../helpers/httpHelper';
import {ActivityIndicator} from 'react-native';

const CommonStyles = require('../assets/styles/commonStyles');

function ExpenseChartScreen() {
  const [chartData, setChartData] = useState<CategoryData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getExpensesSpread() {
    setIsLoading(true);
    const responseData = await fetchExpensesSpread();
    setChartData(responseData);
    setIsLoading(false);
  }

  useEffect(() => {
    getExpensesSpread();
  }, []);

  const renderLegendItem = (text: string, color: string) => {
    return (
      <View style={{flexDirection: 'row', marginBottom: 12}}>
        <View
          style={{
            height: 18,
            width: 18,
            marginRight: 10,
            borderRadius: 4,
            backgroundColor: color || 'black',
          }}
        />
        <Text style={{color: 'black', fontSize: 16}}>{text || ''}</Text>
      </View>
    );
  };

  return (
    <View style={CommonStyles.chartContainer}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <PieChart
            data={chartData}
            showText
            textColor="black"
            textSize={16}
            fontWeight="800"
            textBackgroundRadius={30}
            radius={180}
            shadow
            showGradient
            isThreeD
            tiltAngle="40deg"
          />
          {/* Legend */}
          <View
            style={{
              width: '100%',

              justifyContent: 'space-evenly',
              marginTop: 20,
            }}>
            {chartData.map(item => renderLegendItem(item.label, item.color))}
          </View>
        </View>
      )}
    </View>
  );
}

export default ExpenseChartScreen;
