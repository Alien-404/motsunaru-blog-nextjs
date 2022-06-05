import BlogItem from './partials/BlogItem';

export default function Blog({ posts }) {
  return (
    <section className='py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100 h-screen'>
      <div className='container p-6 mx-auto space-y-8'>
        <div className='space-y-2 text-center'>
          <h2 className='text-3xl font-bold'>Blog Post</h2>
          <p className='font-serif text-sm dark:text-gray-400'>
            Motsunaru-Blog post website
          </p>
        </div>
        <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4'>
          {posts &&
            posts.map((post) => {
              return <BlogItem post={post} key={post.id} />;
            })}
        </div>
      </div>
    </section>
  );
}
