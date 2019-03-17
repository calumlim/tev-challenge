const images = {
    city1: require('../assets/city1.jpg'),
    city2: require('../assets/city2.jpg'),
    city3: require('../assets/city3.jpg'),
    waterfall: require('../assets/waterfall3.jpg'),
}

export default query => images[query]