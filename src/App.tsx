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
import { PalosChart } from './components/palos'

function App() {
  const [calcNumber, setCalcNumber] = useState(1000);
  const [sliderNumber, setSliderNumber] = useState(0);
  const [sliderNumberIva, setSliderNumberIva] = useState(0);

  useEffect(() => {
    setCalcNumber(1000 + (sliderNumber * 1) + (sliderNumberIva * 3));
  }, [sliderNumber, sliderNumberIva])

  return (
    <>
      <div className='flex flex-wrap justify-center sm:justify-normal'>
          <div className='flex-col space-y-4 flex-grow sm:flex-none'>
            <ModeToggle />
            <WelcomeCard />
            <Button className='sm:w-96'>Press the button</Button>
          </div>
          
          <ResizableDemo />
          
          <div className='w-80 sm:w-96 flex-grow sm:flex-none'>
            <HoverCard>
              <HoverCardTrigger asChild>
                <h1 className='text-4xl sm:max-w-96 text-center'>${calcNumber.toFixed(4)}</h1>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <p>Numero exacto: ${calcNumber}</p>
              </HoverCardContent>
            </HoverCard>
            <Slider defaultValue={[sliderNumber]} max={100} step={1} onValueChange={(n) => setSliderNumber(n[0])} />{sliderNumber}
            <Slider defaultValue={[sliderNumber]} max={100} step={1} onValueChange={(n) => setSliderNumberIva(n[0])} />{sliderNumberIva}
            <Slider defaultValue={[sliderNumber]} max={100} step={1} />
          </div>
          
          <PieChartComp />

      </div>
      <PalosChart />
    </>

  )
}

export default App
