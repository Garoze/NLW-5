type File = {
  url: string;
  type: string;
  duration: number;
}

type Episode = {
  id: string;
  title: string;
  members: string;
  published_at: string;
  thumbnail: string;
  description: string;
  file: File;
  // TODO: Separar o Episode base do formatado!
  // Informação extra após formatação.
  publishedAt: string,
  durationAsString: string;
  url: string,
}

export default Episode;
