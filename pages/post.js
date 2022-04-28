import { gql, useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import Link from "next/link";
import client from "../apollo/client";
export default function BlogPost({ blog }) {

  if (!blog) {
    return (
      <div className="page-ctn">
        <h1>Oops! Something went wrong.</h1>
      </div>
    ); 
  }

  return (
    <div className="page-ctn">
      <Typography variant="h2">{blog.title}</Typography>
      <Typography variant="body">{blog.body}</Typography>
      <Link href="/">
        <a>
          <Typography variant="h5">Back To Home</Typography>
        </a>
      </Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { blogId } = context.query;

  const { data } = await client.query({query:FETCH_POST_BY_ID,variables: { blogId: parseInt(blogId) }
  });

  const blog = data.blogPostCollection.items[0];

  return {
    props: {
      blog: blog,
    },
  };
}

const FETCH_POST_BY_ID = gql`
  query GET_BLOG_BY_ID($blogId: Int!) {
    blogPostCollection(where: { blogId: $blogId }) {
      items {
        title
        body
        blogId
      }
    }
  }
`;
