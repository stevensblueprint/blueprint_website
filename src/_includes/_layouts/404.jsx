export default () => {
  const logo = "../assets/logos/logo.png";
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css" />
        <title>Stevens Blueprint</title>
      </head>
      <body>
        <div className="flex absolute p-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col">
            <h1 className="text-4xl">blueprint</h1>
            <div className="text-xl">
              <div className="flex">
                <p className="font-bold pr-2">404 Error.</p>
                <a href="/"> Click here to go to the homepage.</a>
              </div>
              <p> Unfortunately the page you tried to access does not exist.</p>
            </div>
          </div>
          <a href="/" className="flex flex-col text-xl">
            <img src={logo} alt="Logo" className="w-24 h-24" />
          </a>
        </div>
      </body>
    </html>
  );
};
