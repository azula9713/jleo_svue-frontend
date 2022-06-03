import styled from 'styled-components'
import Image from 'next/image'
import {
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterFill,
  RiYoutubeFill,
} from 'react-icons/ri'

import FooterLocale from '../../data/lang/Footer-en.json'
import { customStyles } from '../../data/constants/customStyles'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <LogoSection>
          <Image src="/logojleo.svg" alt="J'LEO SVUE" height={72} width={180} />
        </LogoSection>
        <SiteMapSection>Site Map</SiteMapSection>
        <InfoSection>
          <AddressSection>
            <Title>{FooterLocale.infoSection.addressTitle}</Title>
            <Value>{FooterLocale.infoSection.addressValue}</Value>
          </AddressSection>
          <ContactSection>
            <Title>{FooterLocale.infoSection.contactTitle}</Title>
            <Values>
              <Value>{FooterLocale.infoSection.phoneValue}</Value>
              <Value>{FooterLocale.infoSection.emailValue} </Value>
            </Values>
          </ContactSection>
          <SocialSection>
            <Title>{FooterLocale.infoSection.socialTitle}</Title>
            <SocialIcons>
              <RiFacebookFill className={customStyles.socialMediaIcon} />
              <RiInstagramFill className={customStyles.socialMediaIcon} />
              <RiTwitterFill className={customStyles.socialMediaIcon} />
              <RiYoutubeFill className={customStyles.socialMediaIcon} />
            </SocialIcons>
          </SocialSection>
        </InfoSection>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bgPrimary};
  height: 25em;
  border-top: ${(props) => props.theme.borderPrimary};
`

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  border: none;
  height: 100%;
`

const SiteMapSection = styled(LogoSection)`
  width: 35%;
  border-left-width: 0.1rem;
  border-left-style: solid;
  border-image: linear-gradient(to bottom, #ccc, rgba(0, 0, 0, 0)) 1 100%;
`

const InfoSection = styled(LogoSection)`
  width: 35%;
  flex-direction: column;
  padding: 2.5rem;
  border-left-width: 0.1rem;
  border-left-style: solid;
  border-image: linear-gradient(to bottom, #ccc, rgba(0, 0, 0, 0)) 1 100%;
`

const AddressSection = styled.div`
  width: 100%;
  padding: 0.2rem 1.5rem;
  margin: 0.5rem 0;
`

const ContactSection = styled(AddressSection)``

const SocialSection = styled(AddressSection)``

const Values = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Title = styled.h6`
  color: ${(props) => props.theme.secondary};
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0.5rem 0;
  padding: 0;
`

const Value = styled.p`
  margin: 0;
  margin-right: 4rem;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.5rem;
`

const SocialIcons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
