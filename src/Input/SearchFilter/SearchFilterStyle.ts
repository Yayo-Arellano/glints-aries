import styled from 'styled-components';

import Button from '../../General/Button';
import { ScreenSize } from '../../Utils/StyleConfig';

import { Greyscale, SecondaryColor } from '../../Utils/Colors';

export const SearchFilterContainer = styled.div`
  position: relative;
`;

export const SearchFilterBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input {
    padding: 25px 6em 25px 30px;
    background: ${Greyscale.white};
    border: 3px solid ${Greyscale.grey};
    font-size: 1.4em;
    line-height: 1.5;
    color: ${Greyscale.grey};
    width: 100%;

    @media (max-width: ${ScreenSize.mobileL}px) {
      padding: 1em 5em 1em 1em;
      font-size: 1em;
    }

    &:focus {
      outline: none;
    }

    &:hover,
    &:focus {
      border: 3px solid ${SecondaryColor.actionblue};
    }
  }
`;

export const SearchFilterButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 1.5em;
  height: 100%;

  button {
    @media (max-width: ${ScreenSize.mobileL}px) {
      padding: 15px 20px;
    }
  }
`;

export const SearchFilterBodyWrapper = styled.div<SearchFilterBodyWrapperProps>`
  position: relative;
  display: ${({ open }) => (open ? 'block' : 'none')};
  z-index: 9999;
`;

interface SearchFilterBodyWrapperProps {
  open?: boolean;
}

export const SearchFilterResultContainer = styled.div`
  position: absolute;
  width: 100%;
  display: grid;
  font-size: 1.1em;
  grid-template-columns: repeat(3, 1fr);
  padding: 25px 30px;
  background: ${Greyscale.white};
  border: 1px solid ${Greyscale.lightgrey};

  @media (max-width: ${ScreenSize.mobileL}px) {
    grid-template-columns: auto;
    grid-gap: 2em;
  }
`;

export const SearchFilterListWrapper = styled.div`
  position: relative;

  label {
    color: ${Greyscale.grey};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.3px;
  }

  ul {
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 0.6em;
      cursor: pointer;
      list-style-type: none;

      &:first-child {
        margin-top: 0.5em;
      }

      &:last-child {
        margin-bottom: 0;
      }

      svg,
      img {
        margin-right: 1em;
      }

      img {
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
`;

export const SearchFilterItemWrapper = styled.li`
  position: relative;
`;
