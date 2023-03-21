import React from 'react'

export default function Contact() {
  return (
      <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl mx-auto">
                  <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
                  <p className="mt-4 text-gray-500">
                      Have a question or concern? We're here to help! Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                  <form className="mt-8 space-y-6" action="#" method="POST">
                      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                          <div>
                              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                  First name
                              </label>
                              <div className="mt-1">
                                  <input id="first_name" name="first_name" type="text" autoComplete="given-name" required className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
                              </div>
                          </div>
                          <div>
                              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                  Last name
                              </label>
                              <div className="mt-1">
                                  <input id="last_name" name="last_name" type="text" autoComplete="family-name" required className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
                              </div>
                          </div>
                          <div className="sm:col-span-2">
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                  Email
                              </label>
                              <div className="mt-1">
                                  <input id="email" name="email" type="email" autoComplete="email" required className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
                              </div>
                          </div>
                          <div className="sm:col-span-2">
                              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                  Message
                              </label>
                              <div className="mt-1">
                                  <textarea id="message" name="message" rows={4} required className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" defaultValue={""} />
                              </div>
                          </div>
                      </div>
                      <div className="mt-6">
                          <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Send Message
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>

  
  )
}
