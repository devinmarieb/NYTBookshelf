import React from 'react'
import { expect, assert } from 'chai'
import { shallow, mount } from 'enzyme'
import Button from '../Button/Button'
import Header from '../Header/Header'

import Main, { componentDidMount, updateList, toggleListTab } from './Main'

describe('Main', ()=> {

  it.skip('renders as a section', ()=> {
    const wrapper = shallow(<Main />)
    assert.equal(wrapper.type(), 'section')
  })

  it.skip('renders one header component', ()=> {
    const wrapper = shallow(<Main />)
    expect(wrapper.find('Header')).to.have.length(1)
  })

  it.skip('renders eight list button components', ()=> {
    const wrapper = shallow(<Main />)
    expect(wrapper.find('Button')).to.have.length(0)
  })

  it.skip('should have a function called updateList', ()=> {
    assert.isFunction(updateList)
  })

  it.skip('should have a function called componentDidMount', ()=> {
    assert.isFunction(componentDidMount)
  })

  it.skip('should have a function called toggleListTab', ()=> {
    assert.isFunction(toggleListTab)
  })

})
