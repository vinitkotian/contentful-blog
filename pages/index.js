import { gql } from "@apollo/client";
import client from "../apollo/client";
import { Paper, Typography } from "@mui/material";
import Link from "next/link";

function convertToLocaleDateFormat(date) {
  return new Date(date).toLocaleDateString("en-US");
}

export default function HomePage({ posts }) {
  return (
    <div className="page-ctn">
      <Typography variant="h2">All Blogs</Typography>
      <div className="blogs-ctn">
        {posts.map((post) => {
          return (
            <Paper elevation={5} className={"blog-post-item"} key={post.blogId}>
              <Link href={`/post/?blogId=${post.blogId}`}>
                <a>
                  <Typography variant="h6">{post.title}</Typography>
                </a>
              </Link>
              <div>
                Published : {convertToLocaleDateFormat(post.publishDate)}
              </div>
            </Paper>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query getAllBlogPosts {
        blogPostCollection {
          items {
            title
            publishDate
            blogId
          }
        }
      }
    `,
  });
  
  return {
    props: {
      posts: data.blogPostCollection["items"],
    },
  };
}
