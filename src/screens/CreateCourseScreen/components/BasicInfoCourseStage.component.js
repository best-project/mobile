import React, { Component } from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Button, Input} from 'react-native-elements';
import {Dropdown} from 'react-native-material-dropdown';

const dropdownSettings = {
  language: [
    {value: 'en'}, 
    {value: 'pl'}
  ],
  difficultyLevel: [
    {value: 'easy'},
    {value: 'normal'},
    {value: 'medium'},
    {value: 'hard'}
  ],
  type: [
    {value: 'public'},
    {value: 'private'}
  ]
}

class BasicInfoCourseStageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: '',
      difficultyLevel: '',
      type: '',
      clicked: false,
      errors: {
        name: '',
        description: '',
        language: '',
        difficultyLevel: '',
        type: ''
      }
    }

    this._onSubmit = this._onSubmit.bind(this);
  }

  //validation functions 
  hasMinLength(value, minLength) {
    const suspect = this.state[value].trim();
    const errors = this.state.errors;
    if(suspect === '') {
      errors[value] = 'This field is required.';
    } else if(suspect.length < minLength) {
      errors[value] = 'Minimum text length is ' + minLength + ' signs.';
    } else {
      errors[value] = '';
    }
    this.setState({
      errors
    });
  }

  isNotEmpty(value) {
    const errors = this.state.errors;
    if(this.state[value] === '') {
      errors[value] = 'This field is required.';
    } else {
      errors[value] = '';
    }
    this.setState({
      errors
    });
  }

  //events
  _onChange(e, name) { //dynamic change state // name === stateName
    this.setState({
      [name]: e.nativeEvent.text
    })
  }

  _onChangeText(value, type) {
    this.setState({
      [type]: value
    })
  }

  _onBlur(name) {
    this.hasMinLength.call(this, name, 10);
  }

  _onDropdownBlur(name) {
    this.isNotEmpty.call(this, name);
  }

  _onSubmit() {
    let valid = true;

    const fields = Object.keys(this.state);
    fields.forEach(field => {
      if(field === 'name' || field === 'description') {
        this._onBlur(field)
      } else if( field === 'language' || field === 'difficultyLevel' || field === 'type') {
        this._onDropdownBlur(field);
      }
    })
    const errors = Object.values(this.state.errors);
    errors.forEach(value => {
      value.length > 0 && (valid = false)
    })
    if(valid) {
      this.setState({
        clicked: true
      });
      this.props.getData(this.state);
    }
  }

  render() {
    const {name, description, language, difficultyLevel, type, selectedId, clicked, errors} = this.state;
    return(
      <View style={basicInfoStyle.view}>
        <View style={basicInfoStyle.formView}>
          <Input 
            label='Course Name'
            placeholder='Your course name'
            errorMessage={errors.name.length ? errors.name : null}
            containerStyle={basicInfoStyle.input}
            value={name}
            fieldType='text'
            onChange={(e) => this._onChange(e, 'name')}
            onBlur={() => this._onBlur('name')}
          />
          <Input
            label='Description'
            placeholder='What about is this course?'
            errorMessage={errors.description.length ? errors.description : null}
            containerStyle={basicInfoStyle.input}
            value={description}
            fieldType='text'
            onChange={(e) => this._onChange(e, 'description')}
            onBlur={() => this._onBlur('description')}
          />        
          <Dropdown 
            label="Questions Language"
            error={errors.language.length ? errors.language : null}
            containerStyle={basicInfoStyle.dropdown}
            data={dropdownSettings.language}
            value={language}
            fieldType='dropdown'
            onChangeText={(value) => this._onChangeText(value, 'language')}
            onBlur={() => this._onDropdownBlur('language')}
          />
          <Dropdown 
            label="Difficulty Level"
            error={errors.difficultyLevel ? errors.difficultyLevel : null}
            containerStyle={basicInfoStyle.dropdown}
            data={dropdownSettings.difficultyLevel}
            value={difficultyLevel}
            fieldType='dropdown'
            onChangeText={(value) => this._onChangeText(value, 'difficultyLevel')}
            onBlur={() => this._onDropdownBlur('difficultyLevel')}
          />  
          <Dropdown 
            label="Type"
            error={errors.type.length ? errors.type : null}
            containerStyle={basicInfoStyle.dropdown}
            data={dropdownSettings.type}
            value={type}
            fieldType='dropdown'
            onChangeText={(value) => this._onChangeText(value, 'type')}
            onBlur={() => this._onDropdownBlur('type')}
          />  
        </View>
        <View style={basicInfoStyle.submitButtonView}>
          <Button 
            title="Next"
            loading={clicked ? true : false}
            containerStyle={basicInfoStyle.submitButton}
            onPress={this._onSubmit}
          />
        </View>
      </View>
    );
  }
}

const basicInfoStyle = StyleSheet.create({
  view: {
    flex: 1,
    width: 90 + '%',
    alignSelf: 'center',
    paddingTop: 15,
  },
  formView: {
    flex: 4,
  },
  submitButtonView: {
    flex: 1
  },
  input: {
    paddingVertical: 3,
  },

  dropdown: {
    paddingHorizontal: 10,
    marginVertical: -5,
  },
  submitButton: {
    marginTop: 10,
    width: 100 + '%',
  },
})


export default BasicInfoCourseStageComponent;