import { Inter } from 'next/font/google'
import { VideoGrid } from '@/components/VideoGrid'
import { LeftBar } from '@/components/LeftBar'
import { Appbar } from '@/components/Appbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Appbar/>
      <div className="flex">
        <LeftBar />
        <VideoGrid />
      </div>
    </main>
  )
}