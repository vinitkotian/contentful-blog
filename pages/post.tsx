import { gql, useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import client from "../apollo/client";
import { blogPost } from "../types/BlogPost";

const BlogPost: React.FC<{ blog: blogPost }> = function BlogPost({ blog }) {
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
      <Typography variant="body1">{blog.body}</Typography>
      <Link href="/">
        <a>
          <Typography variant="h5">Back To Home</Typography>
        </a>
      </Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async function (context) {
  const { blogId } = context.query;

  const { data } = await client.query({
    query: FETCH_POST_BY_ID,
    variables: { blogId: parseInt(blogId.toString()) },
  });

  const blog = data.blogPostCollection.items[0];

  return {
    props: {
      blog: blog,
    },
  };
};

const FETCH_POST_BY_ID = gql`
  query GET_BLOG_BY_ID($blogId: Int!) {
    blogPostCollection(where: { blogId: $blogId }) {
      items {
        title
        body
        blogId
        blogBackground {
          title
          url
        }
      }
    }
  }
`;

export default BlogPost;
