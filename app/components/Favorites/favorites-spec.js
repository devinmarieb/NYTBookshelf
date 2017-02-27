import React from 'react'
import { expect, assert } from 'chai'
import { shallow, mount } from 'enzyme'

import Main from './Favorites'

describe('Favorites', ()=> {

  it('should render as a section', ()=> {
    const wrapper = shallow(<Favorites />)
    assert.equal(wrapper.type(), 'section')
  })

  it('renders one header buttons', ()=> {
    const wrapper = shallow(<Favorites />)
    expect(wrapper.find(<Header />)).to.have.length(1)
  })

  it('renders two buttons', ()=> {
    const wrapper = shallow(<Favorites />)
    expect(wrapper.find(<Button />)).to.have.length(2)
  })

})
