import React from 'react'
import { shallow } from 'enzyme'
import LandingPage from '../../components/LandingPage'

describe('LandingPage Component', () => {
    it('should render the Landing Page', () => {
        const component = shallow(<LandingPage />)
        expect(component.exists()).toBe(true)
        expect(component).toMatchSnapshot()
    })
})
