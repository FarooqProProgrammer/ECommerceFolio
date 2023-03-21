import React from 'react'

export default function Footer() {
    return (
        <footer class="bg-[#e74c3c] py-8">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap justify-between">
                    <div class="w-full lg:w-1/4 mb-6 lg:mb-0">
                        <h2 class="text-xl font-semibold text-white mb-4">Company Name</h2>
                        <p class="text-gray-100 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    </div>
                    <div class="w-full lg:w-1/4 mb-6 lg:mb-0">
                        <h2 class="text-xl font-semibold text-white mb-4">Quick Links</h2>
                        <ul class="list-reset leading-loose">
                            <li><a href="#" class="text-gray-100 hover:text-white">Home</a></li>
                            <li><a href="#" class="text-gray-100 hover:text-white">About Us</a></li>
                            <li><a href="#" class="text-gray-100 hover:text-white">Services</a></li>
                            <li><a href="#" class="text-gray-100 hover:text-white">Projects</a></li>
                            <li><a href="#" class="text-gray-100 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div class="w-full lg:w-1/4 mb-6 lg:mb-0">
                        <h2 class="text-xl font-semibold text-white mb-4">Contact Us</h2>
                        <ul class="list-reset leading-loose">
                            <li class="text-gray-100"><i class="fa fa-map-marker mr-2"></i>123 Main Street<br/>City, State ZIP</li>
                            <li class="text-gray-100 mt-4"><i class="fa fa-phone mr-2"></i>(123) 456-7890</li>
                            <li class="text-gray-100 mt-4"><i class="fa fa-envelope mr-2"></i>info@company.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
