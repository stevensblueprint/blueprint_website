export default ({ comp, headline, description }) => {
	const logo = "/assets/logos/logo_banner.webp";
	return (
		<html>
			<head>
				<link rel="stylesheet" href="/styles.css" />
				<title>Stevens Blueprint</title>
			</head>
			<body className="flex flex-col">
				<comp.Navbar />
				<div className="flex absolute top-0 left-0 lg:flex-row flex-col justify-center items-center h-screen w-screen p-2">
					<div className="flex flex-col pr-2">
						<a href="/">
							<img
								src={logo}
								alt="Logo"
								className="object-cover w-72 h-18"
								loading="lazy"
								sizes="288px"
							/>
						</a>
						<div className="text-xl">
							<div className="flex">
								<p className="font-bold pr-2">{headline}</p>
								<a href="/" className="text-sky-600">
									{" "}
									Click here to go to the homepage.
								</a>
							</div>
							<p>{description}</p>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
};
