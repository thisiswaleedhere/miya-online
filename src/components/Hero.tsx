import travelIcon from "../assets/img/travel.svg";

function Hero() {
    return (
        <div
            id="home" className="relative md:min-h-[90vh] flex items-center bg-[url('/img/herobg.svg')] bg-cover" >
            <div className='md:absolute z-20 w-full h-full backdrop-filter backdrop-blur-md  bg-opacity-10 pt-32 pb-6 lg:pt-640 lg:pb-48'>
                <div className="container flex flex-col lg:flex-row justify-end mx-auto mt-6 lg:mt-24 xl:mt-32 px-6 md:px-12 ">
                    <div className="mb-8 lg:mb-0 max-w-lg mx-auto">
                        <img src={travelIcon} alt="Hero Image" className="" />
                    </div>
                    <div className="max-w-3xl text-[#360f34] xl:text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Your Journey, Our Priority</h1>
                        <p className="text-xl mb-8">Expert travel planning and comprehensive insurance solutions all in one place. Let us take care of the details while you focus on the experience.</p>
                        <button onClick={() => { window.open('tel:00919846853335', '_self') }} className="ml-auto hover:bg-[#574f7c]/85 bg-fuchsia-900 text-white px-4 py-2 md:px-8 md:py-4 rounded-full text-lg font-semibold flex  items-center gap-2 transition-all">
                            Contact Us &rarr;
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero

// ,

// style={{
//     backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
// }}

// #652060

// #574f7c