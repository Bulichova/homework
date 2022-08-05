import styled from 'styled-components'
import { Container } from './styledComponents'
import spotBR from '../images/spotBR.png'

const SectionWrapper = styled.section`
  background: black;
  display: flex;
`

const HeroTitle = styled.h1`
  font-size: 114px;
  .subTitle {
    display: block;
    margin-left: 194px;
  }
`

const HeroFooter = styled.div`
  color: white;
  position: relative;
  display: flex;
  margin-top: 40px;
  padding-top: 18;
  justify-content: space-between;
  p:not(:last-child) {
    margin-right: 20px;
  }
`
const TitleWrapper = styled.div`
  background-image: url(${spotBR});
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 178px;
  padding-bottom: 210px;
  margin-left: 130px;
  .preTitle{
    margin-left: 40px;
  }
`

export function Hero() {
  return (
    <SectionWrapper>
      <Container>
        <TitleWrapper>
          <p className="preTitle">Spin!</p>
          <HeroTitle>
            [re]designing
            <span className="subTitle">your business</span>
          </HeroTitle>
        </TitleWrapper>
        <HeroFooter>
          <p>
            Pomagamy rozwijać progresywne firmy, zespoły
            <br />i kompetencje w coraz szybciej zmieniającym się świecie.
          </p>
          <p>
            Poznajmy się! <br />
            <span>Umów się na bezpłatną konsultację</span>
          </p>
        </HeroFooter>
      </Container>
    </SectionWrapper>
  )
}
