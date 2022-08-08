import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { Container } from './styledComponents'
import defaultImage from '../images/defaultImage.jpg'

const StyledSection = styled.section`
  color: black;
`

const StyledTopBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-width: 1800px;
  flex-flow: row wrap;

  .topCards {
    display: flex;
    justify-content: end;
    flex-flow: wrap-reverse;
    max-width: 900px;
    width: 100%;
    li {
      width: 100%;
      max-width: 350px;
      margin-bottom: 45px;
    }
  }
`
const StyledBottomBlock = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 1800px;
  justify-content: center;
  .bottomCards {
    display: flex;
    flex-flow: row wrap;
  }
`

const SectionTitle = styled.h2`
  font-size: 114px;
  line-height: 1.07;
  max-width: 576px;
  width: 100%;
`
const TitleWrapper = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 900px;
  width: 100%;
  .subTitle {
    max-width: 670px;
    width: 100%;
  }
`
const ListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`

const data = {
  title: 'Prawdziwe historie',
  subTitle: {
    'text-1':
      'Zapraszamy do lektury historii klientów, partnerów i przyjaciół, z którymi mamy przyjemność wędrować drogą rozwoju i przedsiębiorczości.',
    'text-2':
      'Każda historia jest inna, bo stoją za nimi unikalne organizacje tworzone przez ludzi obdarzonych wyjątkowymi pomysłami, talentami i doświadczeniami.',
  },
  thesis: '“Jesteśmy złączeni dzięki historiom” – Arystoteles, 384-322 p.n.e.',
  cards: [
    {
      id: '1',
      speaker: {
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2jaUjBRDseMTj5humwe7gv6BzPzEy9dp-8xS3uhSHCRIEeLpSuzCjfPhxklCpQzz-Qk&usqp=CAU',
        name: 'Krzysztof',
        lastName: 'Langer',
      },
      position: ' CEO i współwłaściciel',
      pitch: 'Historia transformacji zwinnej ADMIND',
    },
    {
      id: '2',
      speaker: {
        avatar: '',
        name: 'Krzysztof',
        lastName: 'Langer',
      },
      position: ' CEO i współwłaściciel',
      pitch: 'Historia transformacji zwinnej ADMIND',
    },
    {
      id: '3',
      speaker: {
        avatar: '',
        name: 'Krzysztof',
        lastName: 'Langer',
      },
      position: ' CEO i współwłaściciel',
      pitch: 'Historia transformacji zwinnej ADMIND',
    },
    {
      id: '4',
      speaker: {
        avatar: '',
        name: 'Krzysztof',
        lastName: 'Langer',
      },
      position: ' CEO i współwłaściciel',
      pitch: 'Historia transformacji zwinnej ADMIND',
    },
    {
      id: '5',
      speaker: {
        avatar: '',
        name: 'Krzysztof',
        lastName: 'Langer',
      },
      position: ' CEO i współwłaściciel',
      pitch: 'Historia transformacji zwinnej ADMIND',
    },
    {
      id: '6',
      speaker: {
        avatar: '',
        name: 'Krzysztof',
        lastName: 'Langer',
      },
      position: ' CEO i współwłaściciel',
      pitch: 'Historia transformacji zwinnej ADMIND',
    },
    {
      id: '7',
      speaker: {
        avatar: '',
        name: 'Krzysztof',
        lastName: 'Langer',
      },
      position: ' CEO i współwłaściciel',
      pitch: 'Historia transformacji zwinnej ADMIND',
    },
    {
      id: '8',
      speaker: {
        avatar: '',
        name: 'Krzysztof',
        lastName: 'Langer',
      },
      position: ' CEO i współwłaściciel',
      pitch: 'Historia transformacji zwinnej ADMIND',
    },
  ],
}

function List({ data, classes }) {
  return (
    <ul className={classes}>
      {data.map(({ speaker, position, pitch, id }) => {
        const image = speaker.avatar || defaultImage
        return (
          <li key={id}>
            <img width="300" height="300" src={image} alt={speaker.name} />
            <div>
              <h3>{pitch}</h3>
              <p>{position}</p>
              <p>
                {speaker.name} {speaker.lastName}
              </p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

function TrueStories() {
  return (
    <StyledSection>
      <Container>
        <StyledTopBlock>
          <TitleWrapper>
            <SectionTitle>{data.title}</SectionTitle>
            {Object.values(data.subTitle).map((element) => {
              return (
                <p className="subTitle" key={uuidv4()}>
                  {element}
                </p>
              )
            })}
          </TitleWrapper>
          <List classes="topCards" data={data.cards.slice(0, 3).reverse()} />
        </StyledTopBlock>

        <StyledBottomBlock>
          <List classes="bottomCards" data={data.cards.slice(3, 6)} />
          <ListWrapper>
            <List classes="bottomCards" data={data.cards.slice(6)} />
            <p>{data.thesis}</p>
          </ListWrapper>
        </StyledBottomBlock>
      </Container>
    </StyledSection>
  )
}
export default TrueStories
