import * as actions from './index.js'
import { stubBook } from './stub-data'

describe('actions', ()=> {

  it('should have an action that add books to homepage', ()=> {
    const expectedReturn = {
      type: 'ADD_BOOKS',
      books: stubBook
    }
    expect(actions.addBooks(stubBook)).toEqual(expectedReturn)
  })

  it('should have an action that lets a user add a favorite', ()=> {
    const expectedReturn = {
      type: 'ADD_FAVORITES',
      favorite: stubBook
    }
    expect(actions.saveFavorites(stubBook)).toEqual(expectedReturn)
  })

  it('should have an action that lets a user delete a favorite', ()=> {
    const expectedReturn = {
      type: 'DELETE_FAVORITE',
      deletedFav: stubBook
    }
    expect(actions.deleteFavorite(stubBook)).toEqual(expectedReturn)
  })

})
