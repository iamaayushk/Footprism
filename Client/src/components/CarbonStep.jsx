import React from 'react'
const steps=[
    {
        heading:'Transport',
        step1:'Walk or cycle for short distances',
        step2:'Use public transport or carpool',
        step3:'Shift to electric vehicles if possible',
    },
    {
        heading:'Electricity & Energy',
        step1:'Use LED lights and energy-efficient appliances',
        step2:'Turn off switches when not in use',
        step3:'Shift to solar energy or renewable sources',
    },
    {
        heading:'Food & Diet',
        step1:'Prefer vegetarian or plant-based meals',
        step2:' Buy local and seasonal produce',
        step3:'Avoid food waste plan meals and store properly'
    },
    {
        heading:'Consumption & Shopping',
        step1:'Buy only what you need reduce impulse buying',
        step2:'Choose sustainable fashion (organic cotton, thrift)',
        step3:'Avoid over-packaged products.'
    },
    {
        heading:' Waste Management',
        step1:'Recycle and compost whenever possible.',
        step2:'Reuse containers, bottles, and bags',
        step3:'Reduce single-use plastics'
    }

]
const CarbonStep = () => {

  return (
    <div className='min-h-screen bg-gradient-to-b p-10 from-green-300 to bg-green-400'>
        <div className='items-center justify-center  '>
            <h1 className='p-4 text-center text-5xl font-bold text-gray-700'>What is a Carbon Step?</h1>
        </div>
        <div className='m-5'>
        <p className='mt-5 p-2 text-lg'>Carbon Step refers to the impact of a single action or habit on your carbon footprint. While "carbon footprint" is the total CO₂ you emit over time, a carbon step is like one “footprint” at a time it measures how each decision <span className='text-sky-600 text-xl'>(like using a plastic bag or taking a flight)</span> contributes to climate change.</p>
        </div>
        <div className='m-5 text-center flex items-center justify-center p-2'>
        <h2 className='text-3xl font-semibold text-gray-700 mt-5'>How to improve your carbon step</h2>
        </div>
        <div className='m-5 p-5 flex flex-wrap mt-5'>
            
                {steps.map((item,index)=>(
                    <div key={index} className='mb-6 w-[450px]'>
                        <h2 className='text-[#072836] text-xl font-semibold mb-2'>{item.heading}</h2>
                        <ul className='list-disc text-lg '>
                            <li className='text-[#072836]'>{item.step1}</li>
                            <li className='text-[#072836]'>{item.step2}</li>
                            <li className='text-[#0a3a4e]'>{item.step3}</li>
                        </ul>
                        </div>
                ))}
            
        </div>
    </div>
  )
}

export default CarbonStep