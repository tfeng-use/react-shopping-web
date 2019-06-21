import styled from 'styled-components'
import commenTheme from '../../style/commen'
export const GoodItemWrapper = styled.li`
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
    transform: translateY(-2px);
  }
  transition: all .3s;
  display: inline-block;
  margin: 0 0 14px 14px;
  width: 234px;
  text-align: center;
  padding: 10px 0 20px 0;
  background: #fff;
  img {
    width: 160px;
  }
  .name {
    font-size: 14px;
    margin-bottom: 0;
    line-height: 1.5em;
    color: #333;
  }
  .price {
    font-size: 14px;
    margin-bottom: 0;
    line-height: 1.5em;
    font-weight: 700;
    color: ${commenTheme.themeColor};
  }
  button {
    cursor: pointer;
    border: none;
    width: 200px;
    padding: 5px 0;
    outline-style: none;
    margin-top: 10px;
    border: solid 1px #d1434a;
    color: #d1434a;
    border-radius: 3px;
    background: transparent;
    &:active {
      box-shadow: 0px 0px 2px #d1434a;
    }
  }
`