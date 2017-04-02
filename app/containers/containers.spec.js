import React from 'react'
import { expect, assert } from 'chai'
import { shallow, mount } from 'enzyme'

import mapDispatchToProps from './Main-container'
import mapStateToProps from './Main-container'

describe('mapStateToProps', ()=> {

  it('should be a function', ()=> {
    assert.isFunction(mapStateToProps)
  })
})

describe('mapDispatchToProps', ()=> {

  it('should be a function', ()=> {
    assert.isFunction(mapDispatchToProps)
  })

})
