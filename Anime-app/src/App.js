import React from "react";
import Anime from "./Anime";
import ShowFact from "./ShowFact";
function App() {
  const [anime, setAnime] = React.useState();
  const [random, setRandom] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [name, setName] = React.useState("");
  const [extra, setExtra] = React.useState("");

  React.useEffect(() => {
    try {
      async function fetchData() {
        const res = await fetch(
          `https://anime-facts-rest-api.herokuapp.com/api/v1`
        );
        const data = await res.json();
        setAnime(data.data);
        setLoading(data.success ? false : true);
      }
      fetchData();
    } catch {}
  }, [anime]);

  function handleRandom() {
    setRandom(Math.floor(Math.random() * anime.length + 1));
  }

  const rand = anime && anime.at(random - 1);

  // console.log(y);

  function handleData(name1) {
    setName(name1);
    // console.log(name);
  }

  React.useEffect(() => {
    if (name) {
      const moreData = async function moreData(name) {
        const res = await fetch(
          `https://anime-facts-rest-api.herokuapp.com/api/v1/${name}`
        );
        const data = await res.json();
        console.log(data);

        setExtra(data);
      };
      moreData(name);
    }
  }, [name]);

  return (
    <div className="App" style={{ backgroundImage: ` url(${extra.img})` }}>
      <div className="box2">
        <div className="card">
          <h1>Generate Random Anime</h1>
          {loading ? (
            <h1>Loading Bro....</h1>
          ) : (
            <Anime key={rand.anime_id} {...rand} />
          )}
        </div>
        <button onClick={handleRandom} className="random">
          Random Anime
        </button>
        <button
          onClick={() => handleData(rand.anime_name)}
          className="facts random"
        >
          Show Facts
        </button>
      </div>
      {extra.success && <ShowFact {...extra} man={name} />}
    </div>
  );
}

export default App;

//

//
