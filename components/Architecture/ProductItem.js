import styled from 'styled-components'

const ProductItem = ({ product }) => {
  return (
    <Container>
      <DetailSection>
        <DataWrapper>
          <Title>{product.name}</Title>
          <Desc>{product.desc}</Desc>
          <ViewButton>
            View Our Work
            {/* add long arrow  */}
          </ViewButton>
        </DataWrapper>
        <SideImageContainer>
          <SideImage src={product.sideImage} alt={product.name} />
        </SideImageContainer>
      </DetailSection>
      <Banner>
        <BannerImage src={product.bannerImage} alt={product.name} />
      </Banner>
    </Container>
  )
}

export default ProductItem

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1rem 0;
`

const DetailSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const DataWrapper = styled.div`
  width: 60%;
  padding: 2rem;
`

const SideImageContainer = styled.div`
  width: 40%;
  height: 100%;
`

const SideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const BannerImage = styled(SideImage)``

const Banner = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;

  &:last-child {
    margin-bottom: 3rem;
  }
`

const Title = styled.h3`
  margin: 0;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 2rem;
`

const Desc = styled.p`
  margin: 0;
  width: 80%;
  font-size: 0.85rem;
  text-align: justify;
  color: ${({ theme }) => theme.textTertiary};
`

const ViewButton = styled.button`
  text-transform: uppercase;
  margin-top: 3rem;
  padding: 0.5rem 1rem;
  width: 30%;
  color: ${({ theme }) => theme.primary};
  border: none;
  background: ${({ theme }) => theme.white};
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: ${({ theme }) => theme.borderPrimary};

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    border: ${({ theme }) => theme.borderTertiary};
  }
`
