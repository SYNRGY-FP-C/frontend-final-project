export default function LoadingScreen({ redirect = false, page = "login" }) {
  return (
    <>
      <div className="items-center justify-center w-full h-screen bg-white">
        <div className="loading">
          <div className="balls">
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
