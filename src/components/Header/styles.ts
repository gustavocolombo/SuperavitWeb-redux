import styled from 'styled-components'

export const Container = styled.div`
  background: var(--blue);
`

export const ContentWrapper = styled.header`
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3rem 0 8rem;

  h2{
    color: #fff;
  }

  button{
    margin-left: auto;
    padding: 0.7rem 1rem;
    border: 0;
    border-radius: 0.3rem;
    background: var(--black);
    color: var(--shape);
    transition: 0.3s;

    &:hover{
      filter: brightness(0.7);
    }
  }
` 