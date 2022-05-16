import { gql, useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import Image from "next/image";
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
      <img
        src={blog.blogBackground.url}
        height={blog.blogBackground.height>500?700:blog.blogBackground.height}
        width={blog.blogBackground.width>500?800:blog.blogBackground.width}
        alt={blog.blogBackground.title}
        style={{margin:"1rem"}}
      />
      <Typography variant="body1" className={"blog-body"}>
        {blog.body}
      </Typography>
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
          width
          height
        }
      }
    }
  }
`;

export default BlogPost;
