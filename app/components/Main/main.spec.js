import React from 'react'
import { expect, assert } from 'chai'
import { shallow, mount } from 'enzyme'

import Main from './Main'

describe('Main', ()=> {

  it('renders as a section', ()=> {
    const wrapper = shallow(<Main />)
    assert.equal(wrapper.type(), 'section')
  })

  it('renders one header buttons', ()=> {
    const wrapper = shallow(<Main />)
    expect(wrapper.find(<Header />)).to.have.length(1)
  })

  it('renders eight list buttons', ()=> {
    const wrapper = shallow(<Main />)
    expect(wrapper.find(<Button />)).to.have.length(8)
  })

})
