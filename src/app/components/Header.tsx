import NavBar from './NavBar'



export default function Header() {
    return(
        <div className='h-screen'>
        <NavBar />
        <div className='h-screen mb-4 mt-18 flex bg-center overflow-hidden rounded-2xl bg-[url(/hero.png)] bg-no-repeat bg-cover' id='Header'>
            <h1 className='text-white text-7xl font-extrabold mt-12 ml-8 leading-22'>Turn It Up.<br />Feel Every Beat.</h1>
        </div>
      
        <div className='absolute bottom-0 left-12 z-10'>
            <div className='pb-6'>
            <button className='text-white bg-white/10 px-4 py-2 rounded-full mr-6'>Home Theaters</button>
            <button className='text-white bg-white/10 px-4 py-2 rounded-full mr-6'>Portable Speakers</button>
            <button className='text-white bg-white/10 px-4 py-2 rounded-full mr-8'>Bluetooth Speakers</button>
            </div>
            <p className='text-gray-50 text-lg max-w-7/11'>Great music deserves speakers that don’t hold back. Discover sound that moves you.</p>
        </div>
        <div className='absolute bottom-0 right-12 z-10'>
            <button className='bg-white text-black px-4 py-2 rounded-lg'>Start Listening Better</button>
        </div>
        </div>
    )
}