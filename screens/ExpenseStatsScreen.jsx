import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, processColor, ActivityIndicator } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get("window").width;

const CommonStyles = require('../assets/styles/commonStyles');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chart: {
        flex: 2,
    },
});

const colors = ['#00FF00', '#008080', '#FF00FF', '#FF1493', '#FF6347', '#FFD700', '#006400', '#00BFFF', '#DEB887', '#708090'];

function ExpenseStatsScreen() {
    const [chartData, setChartData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchExpenseStats() {
        setIsLoading(true);
        const url = "https://mhws13jdg5.execute-api.eu-central-1.amazonaws.com/dev/expenses-tracker/statistics";

        const response = await fetch(url);
        const responseJson = await response.json();
        prepareChartData(responseJson);
        setIsLoading(false);
    }

    function prepareChartData(expenseData) {
        const categories = Object.keys(expenseData);

        const data = [];
        categories.forEach( (category, index) => {
            const expenseItem = {
                name: category,
                value: +expenseData[category].toFixed(2),
                color: colors[index],
                legendFontColor: "#7F7F7F",
                legendFontSize: 15,
            }
            data.push(expenseItem);
        });
        console.log(data);
        setChartData(data);
    }

    useEffect( () => {
        fetchExpenseStats();
    }, []);

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        <View>
            {isLoading && <ActivityIndicator/>}
            {!isLoading &&
                <PieChart 
                    data={chartData}
                    width={screenWidth}
                    height={300}
                    chartConfig={chartConfig}
                    accessor='value'
                    backgroundColor={"transparent"}
                    paddingLeft={"10"}
                    absolute
                />
            }
        </View>
    );
}

export default ExpenseStatsScreen;