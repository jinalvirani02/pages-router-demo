import Image from "next/image";
import styles from "../styles/home.module.css";

export default function StaticImageComponent({ movies }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>Page Router Demo 1</h1>

      <div className={styles.section}>
        <h1 className={styles.subHeading}>Tom and Jerry</h1>
        <Image
          src="/cartoon.jpeg"
          alt="Static Example"
          width={500}
          height={300}
          priority
          className={styles.staticImage}
        />
      </div>

      <div className={styles.moviesContainer}>
        {movies.map((movie, index) => (
          <div key={`${index}-${movie.Title}`} className={styles.movieCard}>
            <h2 className={styles.movieTitle}>{movie.Title}</h2>
            {movie.Poster && (
              <Image
                src={movie.Poster ? movie.Poster : 'cartoon.jpeg'}
                alt={movie.Title}
                width={100}
                height={150}
                className={styles.moviePoster}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies`
  );
  const movies = await res.json();
  return { props: { movies } };
}
