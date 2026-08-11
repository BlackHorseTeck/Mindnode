import prisma from '@/lib/db'

const Page = async () => {
  const users = await prisma.user.findMany()

  return (
    <div className='min-h-csreen min-win-screen flex items-center justify-center'>
      {JSON.stringify(users)} 
    </div>
  )
}

export default Page