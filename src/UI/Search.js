import React from 'react';
import styled from 'styled-components';
import Downshift from 'downshift';
import { withRouter } from 'react-router';

const categories = [
  { value: 'Restrants' },
  { value: 'Caffes' },
  { value: 'Pharmacies' },
  { value: 'Bars' },
  { value: 'Hotels' },
];

const companies = [
  { value: 'Progress' },
  { value: 'A-a-a-a' },
  { value: 'Neopharm' },
  { value: 'Bambule' },
  { value: 'Marriot' },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CategoryList = styled.ul`
  padding-left: 0px;
`;

const Category = styled.li`
  list-style-type: none;
`;

const CompanyList = styled.ul`
  padding-left: 0px;
`;

const Company = styled.li`
  text-color: blue;
  list-style-type: none;
`;

const SearchInput = styled.input``;

const Search = ({ history }) => (
  <Downshift
    onChange={selection => history.push(`/categories/${selection.value}`)}
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      getRootProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
      toggleMenu,
    }) => (
      <Container {...getRootProps({ refKey: 'innerRef' })}>
        <input
          {...getInputProps({
            onFocus() {
              toggleMenu();
            },
          })}
          placeholder="search"
        />
        <CategoryList {...getMenuProps()}>
          {isOpen
            ? categories
              .filter(item => !inputValue || item.value.includes(inputValue))
              .map((item, index) => (
                <Category
                  {...getItemProps({
                    key: item.value,
                    index,
                    item,
                    style: {
                      backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
                      fontWeight: selectedItem === item ? 'bold' : 'normal',
                    },
                  })}
                >
                  {item.value}
                </Category>
              ))
            : null}
          {isOpen
            ? companies
              .filter(item => !inputValue || item.value.includes(inputValue))
              .map((item, index) => {
                const adjustedIndex = index + 5; // 5 should be replaced by initial length of categories list
                return (
                  <Category
                    {...getItemProps({
                      key: item.value,
                      index: adjustedIndex,
                      item,
                      style: {
                        backgroundColor:
                            highlightedIndex === adjustedIndex ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </Category>
                );
              })
            : null}
        </CategoryList>
        <CompanyList {...getMenuProps()} />
      </Container>
    )}
  </Downshift>
);

export default withRouter(Search);
