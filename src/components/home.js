import mountainBG from "./images/mountainBG.jpg";


function Home() {
  return (
    <div className="page-component home-component" style={{backgroundImage: `url(${mountainBG})`}}>
      <h1>React Router</h1>
    </div>
  );
}

export default Home;
