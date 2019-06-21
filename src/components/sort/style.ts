import styled from 'styled-components'

export const SortWrapper = styled.div`
  padding: 0 20px;
  height: 55px;
  line-height: 55px;
  color: #605F5F;
  font-size: 15px;
  .default {
    margin: 0 20px 0 5px;
    color: #d1434a;
  }
  .price {
    color: #605F5F;
    &:hover {
      color: #d1434a;
    }
  }
`