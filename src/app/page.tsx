export default function Home() {
  return (
    <main className='flex flex-col min-h-screen justify-center items-center'>
      <div className='center flex-col bg-zinc-50'>
        <h1 className='text-3xl font-bold text-indigo-600'>
          This app is created by Next.js
        </h1>
        <div className='p-2'>
          <h2 className='text-2xl font-bold text-gray-900'>Step1. Dockerize</h2>
          <p className='text-gray-900'>
            Checkout my{' '}
            <a
              className='visited:text-indigo-600'
              href='https://dev.to/brandonwie/docker-reactjs-tutorial-part-1-3110'
              referrerPolicy='no-referrer'
              target='_blank'
            >
              Docker React.js tutorial
            </a>
          </p>
        </div>
        <div className='p-2'>
          <h2 className='text-2xl font-bold text-gray-900'>
            Step2. Kubernetes
          </h2>
        </div>
      </div>
    </main>
  );
}
