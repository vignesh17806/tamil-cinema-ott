
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


function MovieCard({ image, title, year, genre }) {
  return (
    <div className="movie-card">

      <img src={image} alt={title} />

      <div className="movie-info">

        <h3>{title}</h3>

        <p>
          {year} • {genre}
        </p>

        <button>
          ▶ Watch
        </button>

      </div>

    </div>
  );
}


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
            image="/src/assets/ajith.jpg"
            name="Thala Ajith"
            movieSection="#thala"
          />


          <ActorCard
            image="/src/assets/vijay.jpg"
            name="Thalapathy Vijay"
            movieSection="#thalapathy"
          />


          <ActorCard
            image="/src/assets/suriya.jpg"
            name="Suriya"
            movieSection="#suriya"
          />


          <ActorCard
            image="/src/assets/dhanush.jpg"
            name="Dhanush"
            movieSection="#dhanush"
          />


          <ActorCard
            image="/src/assets/karthi.jpg"
            name="Karthi"
            movieSection="#karthi"
          />


          <ActorCard
            image="/src/assets/vikram.jpg"
            name="Chiyaan Vikram"
            movieSection="#vikram"
          />

        </div>

      </section>


      {/* ================= THALA ================= */}

      <section className="movies" id="thala">

        <h2>🔥 Thala Ajith Movies</h2>

        <div className="movie-container">

          <MovieCard
            image="/src/assets/mankatha.jpg"
            title="Mankatha"
            year="2011"
            genre="Action"
          />

          <MovieCard
            image="/src/assets/viswasam.jpg"
            title="Viswasam"
            year="2019"
            genre="Action"
          />

          <MovieCard
            image="/src/assets/vidaamuyarchi.jpg"
            title="Vidaamuyarchi"
            year="2025"
            genre="Action"
          />

        </div>

      </section>


      {/* ================= THALAPATHY ================= */}

      <section className="movies" id="thalapathy">

        <h2>🔥 Thalapathy Vijay Movies</h2>

        <div className="movie-container">

          <MovieCard
            image="/src/assets/leo.jpg"
            title="Leo"
            year="2023"
            genre="Action"
          />

          <MovieCard
            image="/src/assets/master.jpg"
            title="Master"
            year="2021"
            genre="Action"
          />

          <MovieCard
            image="/src/assets/beast.jpg"
            title="Beast"
            year="2022"
            genre="Action"
          />

          <MovieCard
            image="/src/assets/varisu.jpg"
            title="Varisu"
            year="2023"
            genre="Drama"
          />

          <MovieCard
            image="/src/assets/ghilli.jpg"
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
            image="/src/assets/soorarai.jpg"
            title="Soorarai Pottru"
            year="2020"
            genre="Drama"
          />

          <MovieCard
            image="/src/assets/jai_bhim.jpg"
            title="Jai Bhim"
            year="2021"
            genre="Drama"
          />

          <MovieCard
            image="/src/assets/surya_24.jpg"
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
            image="/src/assets/asuran.jpg"
            title="Asuran"
            year="2019"
            genre="Drama"
          />

          <MovieCard
            image="/src/assets/vip.jpg"
            title="VIP"
            year="2014"
            genre="Comedy"
          />

          <MovieCard
            image="/src/assets/raayan.jpg"
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
            image="/src/assets/kaithi.jpg"
            title="Kaithi"
            year="2019"
            genre="Action"
          />

          <MovieCard
            image="/src/assets/theeran.jpg"
            title="Theeran"
            year="2017"
            genre="Action"
          />

          <MovieCard
            image="/src/assets/ponniyin_selvan.jpg"
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
            image="/src/assets/anniyan.jpg"
            title="Anniyan"
            year="2005"
            genre="Action"
          />

          <MovieCard
            image="/src/assets/deiva_thirumagal.jpg"
            title="Deiva Thirumagal"
            year="2011"
            genre="Drama"
          />

          <MovieCard
            image="/src/assets/mahaan.jpg"
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