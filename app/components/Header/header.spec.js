import React from 'react'
import { expect, assert } from 'chai'
import { shallow, mount } from 'enzyme'

import Header from './Header'

describe('Header', ()=> {

  it.skip('renders as a section', ()=> {
    const wrapper = shallow(<Header />)
    assert.equal(wrapper.type(), 'section')
  })

  it.skip('renders one h1 tag', ()=> {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('h1')).to.have.length(1)
  })

  it.skip('renders one img tag', ()=> {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('img')).to.have.length(1)
  })

})
