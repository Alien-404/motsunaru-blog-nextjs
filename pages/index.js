import { GraphQLClient, gql } from 'graphql-request';
import Layout from '../components/Layout';
import Blog from '../components/Blog';

const graphcms = new GraphQLClient(
  'https://api-ap-southeast-2.graphcms.com/v2/cl3zig4wl1e1n01xjeemi0mg6/master'
);

const query = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      coverPhoto {
        url
      }
      author {
        name
      }
    }
  }
`;

export default function Home({ posts }) {
  if (!posts) return <p>Loading....</p>;
  return (
    <Layout title={'Motsunaru | Home page'}>
      <Blog posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { posts } = await graphcms.request(query);
  return {
    props: {
      posts,
    },
  };
}
