import Layout from "./Layout";

export default function PostSkeleton() {
  return (
    <Layout title={'Loading | Detail Pots'}>
      <div className='px-4 py-24 mx-auto max-w-7xl bg-gray-900'>
        <div className='flex w-full mx-auto mb-10 text-left md:w-3/4 lg:w-1/2'>
          <div className='flex-1 py-2 space-y-4 animate-pulse'>
            <div className='w-full h-12 rounded bg-gray-700' />
            <div className='w-5/6 h-6 rounded bg-gray-700 ' />
            <hr className='animate-none' />
            <div className='w-full h-56 rounded bg-gray-700 ' />
            <div className='w-full h-3 rounded bg-gray-700 ' />
            <div className='w-full h-3 rounded bg-gray-700 ' />
            <div className='w-full h-3 rounded bg-gray-700 ' />
          </div>
        </div>
      </div>
    </Layout>
  );
}
