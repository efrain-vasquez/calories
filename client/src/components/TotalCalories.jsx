import React, { Component } from 'react'
import Header from './Header.jsx'
import FoodSearch from './FoodSearch.jsx'

class TotalCalories extends Component {
  constructor (props) {
    super(props)
    this.state = {
      calories_needed: '',
      calories_eaten: ''
    }
    this.getDataCaloriesNeeded = this.getDataCaloriesNeeded.bind(this)
    this.getDataCaloriesEaten = this.getDataCaloriesEaten.bind(this)
  }

  componentDidMount () {
    this.getDataCaloriesNeeded('/calneed')
    this.getDataCaloriesEaten('/caleat')
  }

  getDataCaloriesNeeded (url = '') {
    return fetch(url)
      .then(response => response.json())
      .then(dataCaloriesNeeded => {
        this.setState({
          calories_needed: dataCaloriesNeeded
        })
      })
      .catch(err => console.error(err))
  }

  getDataCaloriesEaten (url = '') {
    return fetch(url)
      .then(response => response.json())
      .then(dataCaloriesEaten => {
        console.log(dataCaloriesEaten.calories_eaten)
        this.setState({
          calories_eaten: dataCaloriesEaten[0].calories_eaten
        })
      })
      .catch(err => console.error(err))
  }

  render () {
    const { calories_needed, calories_eaten } = this.state
    var obj = calories_needed[0]
    var int
    console.log('working' + calories_needed[0])
    for (var i in obj) {
      if (i === 'calories_needed') {
        int = obj[i]
      }
    }
    return (
      <div>
        <Header />
        <h1>Calories Needed: {int}</h1>
        <h1>Calories Eaten: {calories_eaten}</h1>
        <FoodSearch postData={this.props.postData} getAllCals={this.componentDidMount} />
      </div>
    )
  }
}

export default TotalCalories
