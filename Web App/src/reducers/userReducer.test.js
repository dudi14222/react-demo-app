import { actionTypes } from '../actions/actions';
import userReducer from './userReducer';

const TEST_INITIAL_STATE = {
    isLogedIn: false,
    email: '',
    isLoading: false
}

describe('userReducer test', () => {
    it('should return proper initial value', () => {
        expect(userReducer(undefined, {})).toEqual(TEST_INITIAL_STATE)
    })

    it('should loading', () => {
        expect(userReducer(TEST_INITIAL_STATE, {
            type: actionTypes.LOG_IN_START
        })).toEqual(
            { ...TEST_INITIAL_STATE, isLoading: true }
            )
    })

    it('should logedIn', () => {
        expect(userReducer(TEST_INITIAL_STATE, 
            {                
                type: actionTypes.LOG_IN_SUCCESS,
                payload: { email: 'email@email.com' }    
            }
        )).toEqual(
            { ...TEST_INITIAL_STATE, email: 'email@email.com', isLogedIn: true }
            )
    })

    it('should fail to log in', () => {
        expect(userReducer(TEST_INITIAL_STATE, 
            {                
                type: actionTypes.LOG_IN_FAIL    
            }
        )).toEqual(
            TEST_INITIAL_STATE
            )
    })
})

