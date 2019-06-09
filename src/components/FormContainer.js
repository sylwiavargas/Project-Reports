import React, { Component } from 'react';
import TextInput from './TextInput'
import PictureInput from './PictureInput'

class FormContainer extends Component {

  render() {
    return (
      <div>
        <TextInput />
        <PictureInput />
      </div>
    );
  }

}

export default FormContainer;
