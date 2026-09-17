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

import "./App.css";


/* ================= ACTOR CARD ================= */

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


/* ================= MOVIE CARD ================= */

function MovieCard({ image, title, year, genre }) {
  return (
    <div className="movie-card">

      <img src={image} alt={title} />

      <div className="movie-info">

        <h3>{title}</h3>

        <p>
          {year} • {genre}
        </p>

        <button type="button">
          ▶ Watch
        </button>

      </div>

    </div>
  );
}


/* ================= MAIN APP ================= */

function App() {
  return (
    <div>

      {/* ================= HEADER ================= */}

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


      {/* ================= HERO ================= */}

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


      {/* ================= ACTORS ================= */}

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


      {/* ================= THALA AJITH ================= */}

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


      {/* ================= THALAPATHY VIJAY ================= */}

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


      {/* ================= SURIYA ================= */}

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


      {/* ================= DHANUSH ================= */}

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


      {/* ================= KARTHI ================= */}

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


      {/* ================= VIKRAM ================= */}

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


      {/* ================= FOOTER ================= */}

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