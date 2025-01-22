function Cover() {
    return (
        <div className="min-h-[40vh] bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',

            }}>
            <div className="py-32">
                <p className="text-2xl md:text-4xl lg:text-5xl max-w-5xl mx-auto text-white drop-shadow-lg font-bold text-center ">Contact us today to learn more about our services</p>
                <button onClick={() => {
                    window.open('tel:00919846853335', '_self')
                }} className="mx-auto mt-8 hover:bg-[#574f7c]/85 bg-fuchsia-900 text-white px-8 py-4 rounded-full text-lg font-semibold flex  items-center gap-2 transition-all">
                    Contact Us &rarr;
                </button>
            </div>

        </div >
    )
}

export default Cover


// bg-[url('/img/airlinepic.jpg')] 