import React from 'react'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div >
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src='https://i.pinimg.com/564x/1a/1e/75/1a1e75b588e907899475fa79d8762a5b.jpg' alt='' />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src='https://i.pinimg.com/564x/68/e6/a1/68e6a101a546d9511de9fe35fadf3288.jpg' alt='css' />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src='https://i.pinimg.com/564x/5b/7b/24/5b7b2421eb83c312ae191d4d9e056d5d.jpg' alt='javascript' />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src='https://i.pinimg.com/564x/8c/f9/8d/8cf98d13391ce690c004acadf4af2de6.jpg' alt='ruby' />
                    <p className='my-4'>RUBY</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src='https://i.pinimg.com/564x/ab/48/ef/ab48ef6989fbc7671f27f0e64a0b59e0.jpg' alt='node js' />
                    <p className='my-4'>Node Js</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src='https://i.pinimg.com/564x/1c/44/d2/1c44d26b819ade34ddf6dcb1d5f220c3.jpg' alt='operating system' />
                    <p className='my-4'>OPERATING SYSTEM</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src='https://i.pinimg.com/564x/69/16/e2/6916e2b11f37661b5ba69a422c49460c.jpg' alt='react' />
                    <p className='my-4'>REACT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src='https://i.pinimg.com/564x/f6/26/33/f62633dd26cd76374933bc3ff815a414.jpg' alt='ruby on rails' />
                    <p className='my-4'>RUBY on RAILS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src='https://i.pinimg.com/564x/e5/37/82/e537824b0431f1f9a36696e84e64808f.jpg' alt='github' />
                    <p className='my-4'>GitHub</p>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Skills