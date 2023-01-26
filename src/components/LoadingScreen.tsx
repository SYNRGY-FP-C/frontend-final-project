import Head from "next/head";

export default function LoadingScreen({ redirect = false, page = "login" }) {
  return (
    <>
      <Head>
        <title>Loading...</title>
      </Head>
      <div className="items-center justify-center w-full h-screen bg-base-9">
        <div className="loading">
          <h1 className="py-4 text-4xl font-bold text-center text-gray-700">
            KostHub
          </h1>
          <div className="space-y-2 balls">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
            <div className="five"></div>
          </div>
          {redirect && (
            <p className="font-medium text-center text-gray-700">
              {`You are being redirected to ${page} page...`}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
