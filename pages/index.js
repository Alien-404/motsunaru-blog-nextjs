import { GraphQLClient, gql } from 'graphql-request';
import Layout from '../components/Layout';
import Blog from '../components/Blog';

const graphcms = new GraphQLClient(process.env.GRAPH_CLIENT);

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
