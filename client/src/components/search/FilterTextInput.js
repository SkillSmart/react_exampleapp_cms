/**Renders an advanced filter search input, that encapsulates all logic to
 * filter with 
 * - advanced query parameters, 
 * - boolean logic and 
 * - autocomplete
 */

import React, { Component } from 'react'

export default class FilterTextInput extends Component {
  render() {
    return (
      <input type="text" {...this.props} />
    )
  }
}
