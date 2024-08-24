import "../styles/About.css";


export default function About() {
  return (
    <div className="main-content">
    <section className="about-us">
      <h2>About Us</h2>
      <p>Welcome to Clickflicks, your destination for discovering and exploring movies. Whether you're into blockbusters, indie gems, or international films, our platform lets you effortlessly browse and find movies that match your taste.
      </p>
      <p>
        At Clickflicks, we believe in the power of cinema to connect people. Add movies to your favorites, search by categories like popular, top-rated, upcoming, and now playing, and link directly to trailers. Stay up-to-date with the latest releases and discover films that resonate with you—all at your fingertips.
      </p>
      <p>
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </p>
      <div className="img-bg">
        <img src="/bg-1.png" alt="movie clapperboard" className="bg-1" />
        <img src="/bg-2.png" alt="movie reel" className="bg-2" />
      </div>
    </section>
    </div>
  );
}
