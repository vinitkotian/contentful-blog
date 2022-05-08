export type blogPost = {
  title: string;
  body: string;
  blogId: number;
  blogBackground: blogBackground;
  publishDate: string | null;
};

export type blogBackground = {
  url: url;
};

export type url = string;
