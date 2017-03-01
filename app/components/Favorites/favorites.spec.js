import React from 'react'
import { expect, assert } from 'chai'
import { shallow, mount } from 'enzyme'
import Button from '../Button/Button'
import Header from '../Header/Header'

import Favorites, { deletedFav } from './Favorites'

describe('Favorites', ()=> {

  it('should render as a section', ()=> {
    const wrapper = shallow(<Favorites />)
    assert.equal(wrapper.type(), 'section')
  })

  it('renders one header component', ()=> {
    const wrapper = shallow(<Favorites />)
    expect(wrapper.find('Header')).to.have.length(1)
  })

  it('renders two button components', ()=> {
    const wrapper = shallow(<Favorites />)
    expect(wrapper.find('Button')).to.have.length(2)
  })

  it.skip('should have a function called deletedFav', ()=> {
    assert.isFunction(deletedFav)
  })

})
