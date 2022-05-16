export type blogPost = {
  title: string;
  body: string;
  blogId: number;
  blogBackground: blogBackground;
  publishDate: string | null;
};

export type blogBackground = {
  title:string;
  url: url;
  height:number;
  width:number;
};

export type url = string;
