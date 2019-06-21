import styled from 'styled-components'
import commenTheme from '../../style/commen'
export const HomeWrapper = styled.div`
  .bread-wrapper {
    line-height: 45px;
    height: 45px;
    background: #f0f0f0;
    padding-left: 20px;
    .ant-breadcrumb {
      line-height: 45px;
    }
  }
  .sort-wrapper {
    text-align: right;
    margin-top: 60px;
    margin-bottom: 30px;
    background: #fff;
  }
  .price-list {
    width: 190px;
    dl {
      dt {
        font-weight: 700;
        border-left: 2px solid ${commenTheme.themeColor};
        padding-left: 15px;
        line-height: 1.2em;
        margin: 20px 0;
      }
      dd {
        font-size: 14px;
        cursor: pointer;
        transition: all .3s;
        line-height: 1.2em;
        margin: 20px 0;
        padding: 5px 0;
        color: #605F5F;
        &:hover {
          color: ${commenTheme.themeColor};
          border-left: 2px solid ${commenTheme.themeColor};
          padding-left: 15px;
        }
        &.active {
          color: ${commenTheme.themeColor};
          border-left: 2px solid ${commenTheme.themeColor};
          padding-left: 15px;
        }
      }
    }
  }
  .goodList {
    margin-left: 190px;
    .loading-wrapper {
      position: relative;
      // height: 50px;
      .ant-spin {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
      p {
        text-align: center;
        color: #999;
      }
    }
  }
`