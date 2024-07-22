import { ModeToggle } from './components/mode-toggle'
import { Button } from './components/ui/button'
import WelcomeCard from './components/welcome'

function App() {

  return (
    <div>
      <ModeToggle />
      <WelcomeCard /><br />
      <Button className='w-96'>Press the button</Button>
    </div>
  )
}

export default App
