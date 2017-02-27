import React from 'react'
import { Link } from 'react-router'
import { Provider } from 'react-redux'
import { expect, assert } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

import Button from './Button'

describe('Button', ()=> {

  it('renders a link to surround every button', ()=> {
    const wrapper = shallow(<Button />)
    expect(wrapper.find(<Link />)).to.have.length(1)
  })

  it('renders one button element', ()=> {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button')).to.have.length(1)
  })

  it('should have a prop passed in for className', ()=> {
    const wrapper = mount(<Button className='button' />)
    expect(wrapper.props().className).to.equal('button')
  })

  it('should have a prop passed in for onClick', ()=> {
    const wrapper = mount(<Button onClick='handleClick' />)
    expect(wrapper.props().onClick).to.equal('handleClick')
  })

  it('should handle onClick', ()=> {
    const handleClick = sinon.spy()
    const wrapper = mount(<Button onClick={ handleClick } />)
    expect(handleClick.calledOnce).to.equal(false)
    wrapper.find('.log-in').simulate('click')
    expect(handleClick.calledOnce).to.equal(true)
  })



})
