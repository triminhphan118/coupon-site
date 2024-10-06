const Blog = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500'>
      <h1 className='text-6xl font-bold text-white mb-4 animate-pulse'>
        Coming Soon
      </h1>
      <p className='text-xl text-white mb-8'>
        Our blog is under construction. Stay tuned!
      </p>
      <div className='w-64 h-2 bg-white rounded-full'>
        <div className='w-1/2 h-full bg-yellow-300 rounded-full animate-pulse'></div>
      </div>
    </div>
  )
}

export default Blog
