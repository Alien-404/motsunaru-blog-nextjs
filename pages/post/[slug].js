import { RichText } from '@graphcms/rich-text-react-renderer';
import { GraphQLClient, gql } from 'graphql-request';
import Image from 'next/image';
import Layout from '../../components/Layout';
import moment from 'moment';

const graphcms = new GraphQLClient(
  'https://api-ap-southeast-2.graphcms.com/v2/cl3zig4wl1e1n01xjeemi0mg6/master'
);

const query = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      datePublished
      coverPhoto {
        url
      }
      author {
        id
        name
      }
      content {
        html
        raw
      }
    }
  }
`;

const slugList = gql`
  {
    posts {
      slug
    }
  }
`;

export default function PostDetail({ post }) {
  const { title, author, datePublished, content, coverPhoto } = post;
  return (
    <Layout title={`Motsunaru | ${title}`}>
      <article
        className='px-4 py-24 mx-auto max-w-7xl bg-gray-800 text-slate-300'
        itemID='#'
        itemScope
        itemType='http://schema.org/BlogPosting'
      >
        <div className='w-full mx-auto mb-10 text-left md:w-3/4 lg:w-1/2'>
          <div className='pb-6 mb-6 border-b border-gray-200'>
            <h1
              className='mb-3 text-3xl font-bold md:leading-tight md:text-4xl'
              itemProp='headline'
              title={title}
            >
              {title}
            </h1>
            <p className='text-base text-gray-500'>
              {moment(datePublished).format('dddd, MMMM Do YYYY')} — Written by{' '}
              {author.name}
            </p>
          </div>
          <Image
            src={coverPhoto.url}
            height={250}
            width={600}
            alt={'cover-photo'}
            className='object-cover w-full h-64 bg-center rounded'
          />
        </div>
        <div className='w-full mx-auto prose md:w-3/4 lg:w-1/2 text-justify space-y-4'>
          <RichText
            content={content.raw.children}
            renderers={{
              h2: ({ children }) => <h2 className='text-3xl'>{children}</h2>,
              a: ({ children, href }) => (
                <a href={href} className='underline'>
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(query, { slug });
  const post = data.post;

  return {
    props: {
      post,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(slugList);

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}
