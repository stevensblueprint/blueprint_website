export default () => {
  const logo = "../assets/logos/logo.png";
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css" />
        <title>Stevens Blueprint</title>
      </head>
      <body>
        <div className="flex lg:flex-row flex-col justify-center items-center h-screen w-screen p-2">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold">blueprint</h1>
            <div className="text-xl">
              <div className="flex">
                <p className="font-bold pr-2">404 Error.</p>
                <a href="/" className="text-sky-600">
                  {" "}
                  Click here to go to the homepage.
                </a>
              </div>
              <p>
                {" "}
                Unfortunately, the page you are trying to access does not exist.
              </p>
            </div>
          </div>
          <a href="/" className="flex flex-col text-xl">
            <img src={logo} alt="Logo" className="w-24 h-24 object-cover" />
          </a>
        </div>
      </body>
    </html>
  );
};
