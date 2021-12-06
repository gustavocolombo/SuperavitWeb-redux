import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  div{
    margin-top: -3rem;
    padding: 2rem;
    border-radius: 0.3rem;
    transition: 0.3s;

    background: var(--gray-100);

    span{
      font-size: 1.5rem;
    }

    header{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:hover{
      box-shadow: 2px 8px 24px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 2px 8px 24px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 8px 24px 0px rgba(0,0,0,0.75);
    }
  }

  strong{
    display: block;
    margin-top: 2rem;
    font-size: 2rem;
    font-weight: 600;
  }
`