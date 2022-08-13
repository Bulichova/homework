// import InputText from '../components/Input'
import Button from '../components/Button'

export default function Kontakt() {
  const handleButtonClick = (e) => {
    console.log('click on button')
  }
  return (
    <h2>
      Kontakt
      <Button label="Ready" handleClick={handleButtonClick} />
    </h2>
    //   <>
    //     <InputText />
    //   </>
  )
}
