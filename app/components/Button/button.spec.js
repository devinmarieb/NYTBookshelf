import React from 'react'
import { Link } from 'react-router'
import { Provider } from 'react-redux'
import { expect, assert } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Main, { updateList } from '../Main/Main'

import Button from './Button'

describe('Button', ()=> {

  it('renders a link to surround every button', ()=> {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('Link')).to.have.length(1)
  })

  it('Link should have a passed in prop for to', ()=> {
    const wrapper = mount(<Link to='/favorites' />)
    expect(wrapper.props().to).to.equal('/favorites')
  })

  it('Link should have a passed in prop for className', ()=> {
    const wrapper = mount(<Link className='link' />)
    expect(wrapper.props().className).to.equal('link')
  })

  it('renders one button element', ()=> {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button')).to.have.length(1)
  })

  it('should have a prop passed in for className', ()=> {
    const wrapper = mount(<Button className='button' />)
    expect(wrapper.props().className).to.equal('button')
  })

  it('navbar button should have passed in prop for handleClick', () => {
    const wrapper = shallow(<Button handleClick={updateList} />)
    expect(wrapper.props().handleClick).to.equal(updateList)
  })

  it('should handle a click event', ()=> {
    const handleClick = sinon.spy()
    const wrapper = mount(<button className='button' onClick={handleClick} />)
    expect(handleClick.calledOnce).to.equal(false)
    wrapper.find('.button').simulate('click')
    expect(handleClick.calledOnce).to.equal(true)
  })



})
