import styled from 'styled-components'

export const customStyles = {
  socialMediaIcon: 'ri-social-icon',
}

export const modalBasicStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

export const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  margin-bottom: 0;
  max-width: 2000px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin: 1rem;
  }
`

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`

export const ItemsContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const dayPickerCustomStyles = `
 .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 0.1rem solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: #485879;
    color: #485879;
  }
`
