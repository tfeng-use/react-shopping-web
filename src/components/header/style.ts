import styled from 'styled-components'

export const LoginWrapper = styled.div`
.header {
  height: 70px;
  line-height: 70px;
  background-color: #fff;
  .content {
    overflow: hidden;
    height: 70px;
    .img-wrapper {
      display: inline-block;
      width: 50px;
      height: 50px;
      img {
        width: 50px;
      }
    }

    .login {
      font-size: 16px;
      a {
        color: #666;
      }
      a:hover {
        color: #c00;
      }
    }
  }
}
`