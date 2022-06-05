import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogItem({ post }) {
  const { coverPhoto, title, datePublished, author, slug } = post;
  return (
    <article className='flex flex-col dark:bg-gray-900'>
      <Link href={`/post/${slug}`}>
        <a
          rel='noopener noreferrer'
          aria-label='Te nulla oportere reprimique his dolorum'
        >
          <Image
            src={coverPhoto.url}
            height={300}
            width={400}
            alt='image'
            className='object-cover w-full h-52 dark:bg-gray-500'
          />
          <div className='flex flex-col flex-1 p-6'>
            <h3 className='flex-1 py-2 text-lg font-semibold leading-snug'>
              {title}
            </h3>
            <div className='flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400'>
              <span>{moment(datePublished).format('MMMM Do YYYY')}</span>
              <span>{author.name}</span>
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
}
