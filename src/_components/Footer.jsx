import React from "https://esm.sh/react"

export default function Footer({ title, blueprint_url,about_url,projects_url,contact_url,
    apply_url,process_url,faq_url,apply2_url,process2_url,faq2_url, facebook_url,twitter_url,youtube_url,linkedin_url}) {
    return (
        <html>
          <footer className="bg-[#0078e8]">
            {/*get background images*/}
              <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                  <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href={blueprint_url} className="flex items-center">
                            <img src="../assets/logos/logo_negative.png" className="h-8 mr-2" alt="blueprint Logo" />
                            <span className="self-center text-3xl font-semibold font-poppins whitespace-nowrap dark:text-white">blueprint</span>
                        </a>
                        <h3 className="my-5 dark:text-white font-medium font-poppins">Technology for Social Good 
                        </h3>
                        <div class="sm:flex sm:items-center sm:justify-between">
                            <div class="flex mt-6 space-x-10 sm:justify-center sm:mt-4">
                                {/*need circles around logos*/}
                                <a href={facebook_url} class="text-gray-500 hover:text-gray-300 dark:hover:text-white">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 8 19">
                                            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                                        </svg>
                                    <span class="sr-only">Facebook page</span>
                                </a>
                                <a href={twitter_url} class="text-gray-500 hover:text-gray-300 dark:hover:text-white">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                    <span class="sr-only">Twitter</span>
                                </a>
                                <a href={youtube_url} class="text-gray-500 hover:text-gray-300 dark:hover:text-white">
                                    <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                    <span class="sr-only">Youtube</span>
                                </a>
                                <a href={linkedin_url} class="text-gray-500 hover:text-gray-300 dark:hover:text-white">
                                    <svg class="w-4  h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 1 26 26">
                                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                        </svg>
                                    <span class="sr-only">Linkedin</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*find way to space grid according to figma*/}
                    <div className="grid grid-cols-2 gap-20 sm:gap-60 sm:grid-cols-3 ">
                        <div>
                            <h2 className="mb-6  text-md font-semibold font- poppins text-gray-900 uppercase dark:text-white">General</h2>
                            <ul className="text-gray-500 dark:text-gray-300 font-medium">
                                <li className="mb-4 font- poppins" >
                                    <a href={about_url} className="hover:underline">About</a>
                                </li>
                                <li className="mb-4 font- poppins">
                                    <a href={projects_url} className="hover:underline">Projects</a>
                                </li>
                                <li className="mb-4 font- poppins">
                                    <a href={contact_url} className="hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-md font-semibold font- poppins text-gray-900 uppercase dark:text-white">Students</h2>
                            <ul className="text-gray-500 dark:text-gray-300 font-medium">
                                <li className="mb-4 font- poppins">
                                    <a href={apply_url} className="hover:underline ">Apply</a>
                                </li>
                                <li className="mb-4 font- poppins">
                                    <a href={process_url} className="hover:underline">Process</a>
                                </li>
                                <li className="mb-4 font- poppins">
                                    <a href={faq_url} className="hover:underline">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-md font-semibold font- poppins text-gray-900 uppercase dark:text-white">Non-Profits</h2>
                            <ul className="text-gray-500 dark:text-gray-300 font-medium">
                                <li className="mb-4 font- poppins">
                                    <a href={apply2_url}className="hover:underline">Apply</a>
                                </li>
                                <li className="mb-4 font- poppins">
                                    <a href={process2_url} className="hover:underline">Process</a>
                                </li>
                                <li className="mb-4 font- poppins">
                                    <a href={faq2_url} className="hover:underline">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-5" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-300">© 2023 
                    <a href={blueprint_url} class="hover:underline font- poppins"> stevens blueprint</a>
                    </span>
              </div>
          </footer>
        </html>
      );
}
