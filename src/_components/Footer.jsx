export default function Footer({ title, faq_url, blueprint_url}) {
    return (
        <html>
          <footer className="bg-white dark:bg-gray-900">
              <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                  <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                    {/* change to BluePrint logo and possible link? */}
    
                        <a href={blueprint_url} className="flex items-center">
                            <img src="src/assets/logos/logo.png" className="h-8 mr-3" alt="blueprint Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">blueprint</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                          {/* #change links for the cite */}
                          {/* #use {faq_url} for urls  */}
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">General</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">About</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Projects</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Students</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Apply</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Process</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Non-Profits</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Apply</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Process</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* #possibly center this? */}
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 blueprint
                    </span>
                </div>
                {/* #add social media icons */}
              </div>
          </footer>
        </html>
      );
}
