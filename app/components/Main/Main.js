import React, { Component } from 'react'
import $ from 'jquery'
import './main-styles.css'

export default class Header extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    var url = "https://api.nytimes.com/svc/books/v3/lists.json";
    url += '?' + $.param({
      'api-key': "d7d1e070d64347eda225f068e97c8d21",
      'list': "hardcover-nonfiction"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    });
  }

  render(){
    return (
      <h1>Main</h1>
    )
  }
}
