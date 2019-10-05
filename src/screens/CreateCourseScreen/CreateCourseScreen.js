import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import BasicInfoCourseStageComponent from './modules/BasicInfoCourseStage.component';

import * as FileSystem from 'expo-file-system';

import {Button, Input, Icon} from 'react-native-elements';

import ScreenHeader from '../../components/ScreenHeader';

import pixbayApiService from '../../services/pixbayApiService';
import OverlayLoader from '../../common/OverlayLoader';

import shorthash from 'shorthash';
import IconButtonComponent from '../../common/IconButton.component';

class CourseImageSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageSuggestions: [],
      selectedId: 0,
      clicked: false,
      isLoading: false,
      currentImage: null
    }
    this.fetchImagesList = this.fetchImagesList.bind(this);
    this._arrowPress = this._arrowPress.bind(this);
  }

  componentDidMount() {
    this.fetchImagesList();
  }

  componentDidUpdate(previuosProps, previousState) {
    const {searchPhrase} = this.props;
    const {imageSuggestions, selectedId} = this.state;
    if(previuosProps.searchPhrase !== searchPhrase) {
      this.fetchImagesList();
    }
    if(previousState.selectedId !== selectedId) {
      this.loadImageAsync(imageSuggestions[selectedId])
    }
    if(previousState.imageSuggestions !== imageSuggestions) {
      this.loadImageAsync(imageSuggestions[selectedId])
    }
  }

  fetchImagesList() {
    const {searchPhrase} = this.props;   
    pixbayApiService.getImageBySearchPhrase('Anna')
    .then(res => {
      const results = res.hits;
      const imageSuggestions = results.map(result => (
        result.largeImageURL
      ));
      this.setState({imageSuggestions})
    })
    .catch(error => console.log(error))
  }

  loadImageAsync(url)  {
    this.setState({
      isLoading: true
    })
    FileSystem.downloadAsync(url, FileSystem.documentDirectory + shorthash.unique(url))
    .then(response => {
      console.log(response.uri);
      this.setState({
        isLoading: false,
        currentImage: response.uri
      })
    }).catch(error => {
      console.log(error);
    })
    
  }

  _arrowPress(direction) {
    const {selectedId, imageSuggestions} = this.state;
    switch(direction) {
      case 'left': 
        return (
          selectedId > 0 ? this.setState({selectedId: selectedId - 1}) : null
        )
      case 'right': 
        return (
          selectedId < imageSuggestions.length -1 ? this.setState({selectedId: selectedId + 1}) : null
        )
      default:
        return null
    }
  }

  render() {
    const {imageSuggestions, currentImage, selectedId, clicked, isLoading} = this.state;
    const {searchPhrase} = this.props;
    
    return (
      <View style={imageSelectorStyle.view}>
        {imageSuggestions.length && searchPhrase ?
          //if have found images
          <>
          
          <ImageBackground 
            source={{uri: currentImage}}
            style={imageSelectorStyle.container}
          >
          {isLoading && <OverlayLoader />}  
            <IconButtonComponent
              name="chevron-left"
              color="rgba(0,0,0,0.5)"
              containerColor="rgba(255,255,255,0.8)"
              size={40}
              onPress={() => this._arrowPress('left')}
            />
            <IconButtonComponent
              name="chevron-right"
              color="rgba(0,0,0,0.5)"
              containerColor="rgba(255,255,255,0.8)"
              size={40}
              onPress={() => this._arrowPress('right')}
            />
          </ImageBackground>
          <View style={imageSelectorStyle.submitButtonView}>
            <Button 
              title="Next"
              loading={clicked ? true : false}
              containerStyle={imageSelectorStyle.submitButton}
              onPress={this._onSubmit}
            />
          </View>
          </>
        : null}
      </View>     
    )
  }
}

const imageSelectorStyle = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    alignItems: 'center'
  },
  imageContainer: {
    width: 160,
    height: 240
  },
  image: {
    width: 100 + '%',
    height: 100 + '%'
  },
  iconButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
  }, 
  submitButtonView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitButton: {
    marginTop: 10,
    width: 90 + '%',
  },
})

class CreateCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: 1,
      name: '',
      description: '',
      language: '',
      difficultyLevel: '',
      type: '',
      image: ''
    }

    this.getBasicData = this.getBasicData.bind(this);
  }

  getBasicData(state) {    
    this.setState({
      stage: 2,
      name: state.name,
      description: state.description,
      language: state.language,
      difficultyLevel: state.difficultyLevel,
      type: state.type
    });
  }

  render() {
    const {stage, name} = this.state;
    switch(stage) {
      case 1: 
        return (
          <View style={createCourseStyle.view}>
            <ScreenHeader title="Course creator" />
            <BasicInfoCourseStageComponent getData={this.getBasicData} />
          </View>
        )
      case 2:
        return (
          <View style={createCourseStyle.view}>
            <ScreenHeader title="Course creator" />
            <CourseImageSelector searchPhrase='History' />
          </View>
        )
      default: 
        return null;
    }
  }
}

const createCourseStyle = StyleSheet.create({
  view: {
    flex: 1,
  },
})

export default CreateCourse;