import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface Params {
  params: { id: string };
}
export async function generateMetadata({ params: { id } }: Params) {
  const movie = await getMovie(id)
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: Params) {
  return (
    <>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
