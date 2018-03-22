import React from 'react';
import { shallow } from 'enzyme';
import { BtnAdd, BtnFavorites, BtnManageRecipes,
  BtnCatalog, BtnHome, BtnCancel, BtnProfile,
  BtnEdit, BtnCurrent } from '../../components/Buttons';

describe('BtnAdd Snapshot', () => {
  test('component should fully render', () => {
    const component = shallow(<BtnAdd />);
    expect(component).toMatchSnapshot();
  });
});

describe('BtnManageRecipes Snapshot', () => {
  test('component should fully render', () => {
    const component = shallow(<BtnManageRecipes />);
    expect(component).toMatchSnapshot();
  });
});

describe('BtnFavorites Snapshot', () => {
  test('component should fully render', () => {
    const component = shallow(<BtnFavorites />);
    expect(component).toMatchSnapshot();
  });
});
describe('BtnCatalog Snapshot', () => {
  test('component should fully render', () => {
    const component = shallow(<BtnCatalog />);
    expect(component).toMatchSnapshot();
  });
});
describe('BtnHome Snapshot', () => {
  test('component should fully render', () => {
    const component = shallow(<BtnHome />);
    expect(component).toMatchSnapshot();
  });
});
describe('BtnCancel Snapshot', () => {
  test('component should fully render', () => {
    const component = shallow(<BtnCancel />);
    expect(component).toMatchSnapshot();
  });
});
describe('BtnProfile Snapshot', () => {
  test('component should fully render', () => {
    const component = shallow(<BtnProfile />);
    expect(component).toMatchSnapshot();
  });
});
describe('BtnEdit Snapshot', () => {
  test('component should fully render', () => {
    const props = {
      id: 1
    };
    const component = shallow(<BtnEdit {...props} />);
    expect(component).toMatchSnapshot();
  });
});
describe('BtnCurrent Snapshot', () => {
  test('component should fully render', () => {
    const component = shallow(<BtnCurrent />);
    expect(component).toMatchSnapshot();
  });
});
