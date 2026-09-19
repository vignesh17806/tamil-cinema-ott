import ajith from "./assets/ajith.jpg";
import vijay from "./assets/vijay.jpg";
import suriya from "./assets/suriya.jpg";
import dhanush from "./assets/dhanush.jpg";
import karthi from "./assets/karthi.jpg";
import vikram from "./assets/vikram.jpg";

import mankatha from "./assets/Mankatha.jpg";
import viswasam from "./assets/viswasam.jpg";
import vidaamuyarchi from "./assets/vidaamuyarchi.jpg";

import leo from "./assets/leo.jpg";
import master from "./assets/master.jpg";
import beast from "./assets/beast.jpg";
import varisu from "./assets/varisu.jpg";
import ghilli from "./assets/ghilli.jpg";

import soorarai from "./assets/soorarai.jpg";
import jai_bhim from "./assets/jai_bhim.jpg";
import surya24 from "./assets/surya_24.jpg";

import asuran from "./assets/asuran.jpg";
import vip from "./assets/vip.jpg";
import raayan from "./assets/raayan.jpg";

import kaithi from "./assets/kaithi.jpg";
import theeran from "./assets/theeran.jpg";
import ponniyinSelvan from "./assets/ponniyin_selvan.jpg";

import anniyan from "./assets/anniyan.jpg";
import deivaThirumagal from "./assets/deiva_thirumagal.jpg";
import mahaan from "./assets/mahaan.jpg";

import { useEffect, useState } from "react";

import "./App.css";



function ActorCard({ image, name, movieSection }) {
  return (
    <div className="actor-card">

      <img src={image} alt={name} />

      <h3>{name}</h3>

      <a href={movieSection}>
        View Movies
      </a>

    </div>
  );
}


const movieDetails = {
  Mankatha: {
    director: "Venkat Prabhu",
    cast: ["Ajith Kumar", "Arjun Sarja", "Trisha Krishnan", "Andrea Jeremiah", "Vaibhav Reddy"],
  },

  Viswasam: {
    director: "Siva",
    cast: ["Ajith Kumar", "Nayanthara", "Jagapathi Babu", "Vivek", "Yogi Babu"],
  },

  Vidaamuyarchi: {
    director: "Magizh Thirumeni",
    cast: ["Ajith Kumar", "Trisha Krishnan", "Arjun Sarja", "Regina Cassandra", "Arav"],
  },

  Leo: {
    director: "Lokesh Kanagaraj",
    cast: ["Vijay", "Trisha", "Sanjay Dutt", "Arjun Sarja", "Gautham Vasudev Menon"],
  },

  Master: {
    director: "Lokesh Kanagaraj",
    cast: ["Vijay", "Vijay Sethupathi", "Malavika Mohanan", "Andrea Jeremiah", "Arjun Das"],
  },

  Beast: {
    director: "Nelson Dilipkumar",
    cast: ["Vijay", "Pooja Hegde", "Selvaraghavan", "Yogi Babu", "Shine Tom Chacko"],
  },

  Varisu: {
    director: "Vamshi Paidipally",
    cast: ["Vijay", "Rashmika Mandanna", "Shaam", "Prakash Raj", "Sarathkumar"],
  },

  Ghilli: {
    director: "Dharani",
    cast: ["Vijay", "Trisha", "Prakash Raj", "Ashish Vidyarthi", "Janaki Sabesh"],
  },

  "Soorarai Pottru": {
    director: "Sudha Kongara",
    cast: ["Suriya", "Aparna Balamurali", "Paresh Rawal", "Urvashi", "Mohan Babu"],
  },

  "Jai Bhim": {
    director: "T. J. Gnanavel",
    cast: ["Suriya", "Lijomol Jose", "Manikandan", "Rajisha Vijayan", "Prakash Raj"],
  },

  "24": {
    director: "Vikram K. Kumar",
    cast: ["Suriya", "Samantha Ruth Prabhu", "Nithya Menen", "Saranya Ponvannan", "Ajay"],
  },

  Asuran: {
    director: "Vetrimaaran",
    cast: ["Dhanush", "Manju Warrier", "Ken Karunas", "Teejay Arunasalam", "Pasupathi"],
  },

  VIP: {
    director: "Velraj",
    cast: ["Dhanush", "Amala Paul", "Samuthirakani", "Saranya Ponvannan", "Vivek"],
  },

  Raayan: {
    director: "Dhanush",
    cast: ["Dhanush", "S. J. Suryah", "Sundeep Kishan", "Kalidas Jayaram", "Dushara Vijayan"],
  },

  Kaithi: {
    director: "Lokesh Kanagaraj",
    cast: ["Karthi", "Narain", "Dheena", "George Maryan", "Arjun Das"],
  },

  Theeran: {
    director: "H. Vinoth",
    cast: ["Karthi", "Rakul Preet Singh", "Abhimanyu Singh", "Bose Venkat", "Manobala"],
  },

  "Ponniyin Selvan": {
    director: "Mani Ratnam",
    cast: ["Karthi", "Vikram", "Jayam Ravi", "Trisha", "Aishwarya Rai Bachchan"],
  },

  Anniyan: {
    director: "S. Shankar",
    cast: ["Vikram", "Sadha", "Vivek", "Prakash Raj", "Nedumudi Venu"],
  },

  "Deiva Thirumagal": {
    director: "A. L. Vijay",
    cast: ["Vikram", "Anushka Shetty", "Amala Paul", "Nassar", "Santhanam"],
  },

  Mahaan: {
    director: "Karthik Subbaraj",
    cast: ["Vikram", "Dhruv Vikram", "Bobby Simha", "Simran", "Vettai Muthukumar"],
  },
};


function MovieCard({ image, title, year, genre }) {
  return (
    <div className="movie-card">

      <img src={image} alt={title} />

      <div className="movie-info">

        <h3>{title}</h3>

        <p>
          {year} • {genre}
        </p>

        <button
        type="button"
        onClick={() => {
          window.location.hash = `movie/${encodeURIComponent(title)}`;
       }}
>
        ▶ Watch
        </button>

      </div>

    </div>
  );
}

function MovieDetails({ movie }) {
  const details = movieDetails[movie.title];

  return (
    <section className="movie-details-page">

      <button
        className="back-button"
        onClick={() => {
          window.location.hash = "";
        }}
      >
        ← Back to Movies
      </button>

      <div className="movie-details">

        <div className="movie-details-poster">
          <img src={movie.image} alt={movie.title} />
        </div>

        <div className="movie-details-info">

          <h1>{movie.title}</h1>

          <p className="movie-meta">
            {movie.year} • {movie.genre}
          </p>

          <h3>Director</h3>
          <p>{details?.director || "Director information"}</p>

          <h3>Cast</h3>

          <div className="cast-list">
            {(details?.cast || []).map((actor, index) => (
              <span key={index} className="cast-name">
                {actor}
              </span>
            ))}
          </div>

          <div className="demo-watch">
            <h3>🎬 Movie Preview</h3>
            <p>
              This is a demo movie details page.
              Full movie playback is not included.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const checkMovie = () => {
      const hash = window.location.hash;

      if (hash.startsWith("#movie/")) {
        const title = decodeURIComponent(
          hash.replace("#movie/", "")
        );

        setSelectedMovie(title);
      } else {
        setSelectedMovie(null);
      }
    };

    checkMovie();

    window.addEventListener("hashchange", checkMovie);

    return () => {
      window.removeEventListener("hashchange", checkMovie);
    };
  }, []);

  const allMovies = [
    {
      title: "Mankatha",
      year: "2011",
      genre: "Action",
      image: mankatha,
    },
    {
      title: "Viswasam",
      year: "2019",
      genre: "Action",
      image: viswasam,
    },
    {
      title: "Vidaamuyarchi",
      year: "2025",
      genre: "Action",
      image: vidaamuyarchi,
    },
    {
      title: "Leo",
      year: "2023",
      genre: "Action",
      image: leo,
    },
    {
      title: "Master",
      year: "2021",
      genre: "Action",
      image: master,
    },
    {
      title: "Beast",
      year: "2022",
      genre: "Action",
      image: beast,
    },
    {
      title: "Varisu",
      year: "2023",
      genre: "Drama",
      image: varisu,
    },
    {
      title: "Ghilli",
      year: "2004",
      genre: "Action",
      image: ghilli,
    },
    {
      title: "Soorarai Pottru",
      year: "2020",
      genre: "Drama",
      image: soorarai,
    },
    {
      title: "Jai Bhim",
      year: "2021",
      genre: "Drama",
      image: jai_bhim,
    },
    {
      title: "24",
      year: "2016",
      genre: "Sci-Fi",
      image: surya24,
    },
    {
      title: "Asuran",
      year: "2019",
      genre: "Drama",
      image: asuran,
    },
    {
      title: "VIP",
      year: "2014",
      genre: "Comedy",
      image: vip,
    },
    {
      title: "Raayan",
      year: "2024",
      genre: "Action",
      image: raayan,
    },
    {
      title: "Kaithi",
      year: "2019",
      genre: "Action",
      image: kaithi,
    },
    {
      title: "Theeran",
      year: "2017",
      genre: "Action",
      image: theeran,
    },
    {
      title: "Ponniyin Selvan",
      year: "2022",
      genre: "Historical",
      image: ponniyinSelvan,
    },
    {
      title: "Anniyan",
      year: "2005",
      genre: "Action",
      image: anniyan,
    },
    {
      title: "Deiva Thirumagal",
      year: "2011",
      genre: "Drama",
      image: deivaThirumagal,
    },
    {
      title: "Mahaan",
      year: "2022",
      genre: "Action",
      image: mahaan,
    },
  ];

  if (selectedMovie) {
    const movie = allMovies.find(
      (item) => item.title === selectedMovie
    );

    if (movie) {
      return <MovieDetails movie={movie} />;
    }
  }

  return (
    <div>

      

      <header>

        <div className="logo">
          TAMIL CINEMA OTT
        </div>

        <nav>

          <a href="#home">Home</a>

          <a href="#actors">Actors</a>

          <a href="#thala">Thala</a>

          <a href="#thalapathy">Thalapathy</a>

          <a href="#suriya">Suriya</a>

          <a href="#dhanush">Dhanush</a>

          <a href="#karthi">Karthi</a>

          <a href="#vikram">Vikram</a>

        </nav>

      </header>



      <section className="hero" id="home">

        <div className="hero-content">

          <p className="small-title">
            WELCOME TO
          </p>

          <h1>
            TAMIL CINEMA
          </h1>

          <h2>
            OTT
          </h2>

          <p>
            Explore movies from your favourite
            Tamil cinema stars.
          </p>

          <a
            href="#actors"
            className="hero-button"
          >
            Explore Movies
          </a>

        </div>

      </section>



      <section className="actors" id="actors">

        <h2>⭐ Popular Actors</h2>

        <div className="actor-container">

          <ActorCard
            image={ajith}
            name="Thala Ajith"
            movieSection="#thala"
          />

          <ActorCard
            image={vijay}
            name="Thalapathy Vijay"
            movieSection="#thalapathy"
          />

          <ActorCard
            image={suriya}
            name="Suriya"
            movieSection="#suriya"
          />

          <ActorCard
            image={dhanush}
            name="Dhanush"
            movieSection="#dhanush"
          />

          <ActorCard
            image={karthi}
            name="Karthi"
            movieSection="#karthi"
          />

          <ActorCard
            image={vikram}
            name="Chiyaan Vikram"
            movieSection="#vikram"
          />

        </div>

      </section>



      <section className="movies" id="thala">

        <h2>🔥 Thala Ajith Movies</h2>

        <div className="movie-container">

          <MovieCard
            image={mankatha}
            title="Mankatha"
            year="2011"
            genre="Action"
          />

          <MovieCard
            image={viswasam}
            title="Viswasam"
            year="2019"
            genre="Action"
          />

          <MovieCard
            image={vidaamuyarchi}
            title="Vidaamuyarchi"
            year="2025"
            genre="Action"
          />

        </div>

      </section>



      <section className="movies" id="thalapathy">

        <h2>🔥 Thalapathy Vijay Movies</h2>

        <div className="movie-container">

          <MovieCard
            image={leo}
            title="Leo"
            year="2023"
            genre="Action"
          />

          <MovieCard
            image={master}
            title="Master"
            year="2021"
            genre="Action"
          />

          <MovieCard
            image={beast}
            title="Beast"
            year="2022"
            genre="Action"
          />

          <MovieCard
            image={varisu}
            title="Varisu"
            year="2023"
            genre="Drama"
          />

          <MovieCard
            image={ghilli}
            title="Ghilli"
            year="2004"
            genre="Action"
          />

        </div>

      </section>



      <section className="movies" id="suriya">

        <h2>🔥 Suriya Movies</h2>

        <div className="movie-container">

          <MovieCard
            image={soorarai}
            title="Soorarai Pottru"
            year="2020"
            genre="Drama"
          />

          <MovieCard
            image={jai_bhim}
            title="Jai Bhim"
            year="2021"
            genre="Drama"
          />

          <MovieCard
            image={surya24}
            title="24"
            year="2016"
            genre="Sci-Fi"
          />

        </div>

      </section>



      <section className="movies" id="dhanush">

        <h2>🔥 Dhanush Movies</h2>

        <div className="movie-container">

          <MovieCard
            image={asuran}
            title="Asuran"
            year="2019"
            genre="Drama"
          />

          <MovieCard
            image={vip}
            title="VIP"
            year="2014"
            genre="Comedy"
          />

          <MovieCard
            image={raayan}
            title="Raayan"
            year="2024"
            genre="Action"
          />

        </div>

      </section>



      <section className="movies" id="karthi">

        <h2>🔥 Karthi Movies</h2>

        <div className="movie-container">

          <MovieCard
            image={kaithi}
            title="Kaithi"
            year="2019"
            genre="Action"
          />

          <MovieCard
            image={theeran}
            title="Theeran"
            year="2017"
            genre="Action"
          />

          <MovieCard
            image={ponniyinSelvan}
            title="Ponniyin Selvan"
            year="2022"
            genre="Historical"
          />

        </div>

      </section>



      <section className="movies" id="vikram">

        <h2>🔥 Chiyaan Vikram Movies</h2>

        <div className="movie-container">

          <MovieCard
            image={anniyan}
            title="Anniyan"
            year="2005"
            genre="Action"
          />

          <MovieCard
            image={deivaThirumagal}
            title="Deiva Thirumagal"
            year="2011"
            genre="Drama"
          />

          <MovieCard
            image={mahaan}
            title="Mahaan"
            year="2022"
            genre="Action"
          />

        </div>

      </section>



      <footer>

        <h2>
          TAMIL CINEMA OTT
        </h2>

        <p>
          Tamil Cinema Movie Collection
        </p>

        <p>
          © 2026 Tamil Cinema OTT
        </p>

      </footer>

    </div>
  );
}

export default App;