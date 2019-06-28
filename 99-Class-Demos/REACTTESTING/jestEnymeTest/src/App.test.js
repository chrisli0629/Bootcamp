import React from 'react';
import App, { randNum, colors, randColor } from './App';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('App component mounts and renders', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find("[data-test='component-app']");
    expect(appComponent.length).toBe(1);
  });
})

describe('Testing state of background color', () => {
  it('should return "purple" as initial state', () => {
    const wrapper = shallow(<App  />); 
    const initialBackgroundColorState = wrapper.state('backgroundColor');
    expect(initialBackgroundColorState).toBe('purple');
  })
})

describe('Color array', () => {
  it('contains an array of at least 3 colors', () => {
    expect(colors.length).toBeGreaterThanOrEqual(3);
  });
  
  it('contains an array with at least red, blue, and green as values', () => {
    const values = ['red', 'blue', 'green']
    expect(colors).toEqual(expect.arrayContaining(values));
  });
})

describe('Button', () => {
  it('contains a <button> element', () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('button');
    expect(button.length).toBe(1)
  });

  it('runs the function when button is clicked', () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('button');
    button.simulate('click');
    wrapper.update();
    const updatedBackgroundColorState = wrapper.state('backgroundColor');
    expect(updatedBackgroundColorState).not.toEqual('purple');
  });

  it('runs the function and changes state when button is clicked', () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('button');
    expect(button.simulate('click')).toBeTruthy();
  });
 
})

describe('Random generator function', () => {
  it('random number generator function exists', ()=> {
    expect(randColor).toBeTruthy();
  });
  
  it('picks a number that is greater than zero AND less than the length of colors array', () => {
    expect(randNum()).toBeGreaterThanOrEqual(0);
    expect(randNum()).toBeLessThan(colors.length);
  });
})
