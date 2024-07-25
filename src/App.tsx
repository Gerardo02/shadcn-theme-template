import { useEffect, useState } from 'react'
import { ModeToggle } from './components/mode-toggle'
import { ResizableDemo } from './components/rezise'
import { Button } from './components/ui/button'
import WelcomeCard from './components/welcome'
import { Slider } from './components/ui/slider'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { PieChartComp } from './components/pie'

function App() {
  const [calcNumber, setCalcNumber] = useState(1000);
  const [sliderNumber, setSliderNumber] = useState(0);
  const [sliderNumberIva, setSliderNumberIva] = useState(0);

  useEffect(() => {
    setCalcNumber(1000 + (sliderNumber * 3.12354) + (sliderNumberIva * 7.3234));
  }, [sliderNumber, sliderNumberIva])

  return (
    <div>
        <ModeToggle />
        <WelcomeCard /><br />
        <Button className='w-96'>Press the button</Button><br /><br />
        <ResizableDemo /><br />
        <HoverCard>
          <HoverCardTrigger asChild>
            <h1 className='text-4xl max-w-96 text-center'>${calcNumber.toFixed(3)}</h1>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <p>Numero exacto: ${calcNumber}</p>
          </HoverCardContent>
        </HoverCard>
        
        <Slider className='max-w-96' defaultValue={[sliderNumber]} max={100} step={0.1} onValueChange={(n) => setSliderNumber(n[0])} />{sliderNumber}
        <Slider className='max-w-96' defaultValue={[sliderNumber]} max={100} step={0.1} onValueChange={(n) => setSliderNumberIva(n[0])} />{sliderNumberIva}<br /><br />
        <PieChartComp />
    </div>
  )
}

export default App
