import { Clock, Mail, MapPin, Phone } from "lucide-react"


function Footer() {
    return (
        <footer id="contact" className=" text-white py-16 bg-[#360f34]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 hover:underline hover:cursor-pointer hover:text-fuchsia-200" onClick={() => {
                                window.open('tel:00919846853335', '_self')
                            }}>
                                <Phone className="w-5 h-5" />
                                <span>+91 9846 85 3335</span>
                            </div>
                            <div className="hover:cursor-pointer hover:underline hover:text-fuchsia-200 transition-all">
                                <a href="mailt0:miyatravel@gmail.com" className="flex items-center gap-3">
                                    <Mail className="w-5 h-5" />
                                    <span>miyatravel@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Location</h4>
                        <div className="flex items-start gap-3 hover:cursor-pointer hover:underline hover:text-fuchsia-200 transition-all" onClick={() => { window.open("https://g.co/kgs/37qcW41", '_blank')?.focus() }}>
                            <MapPin className="w-5 h-5 mt-1" />
                            <span>Miya Tours and Travels<br />Padinjarangadi, Kerala<br />India</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Hours</h4>
                        <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5" />
                            <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                        </div>
                    </div>

                </div>
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>&copy; 2025 Miya Online | Travel & Insurance Agency | All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

// 