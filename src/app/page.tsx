import BannerSection from '@/components/banner/page'
import Campaign from '@/components/campagin/page'
import Container from '@/components/common/Container'
import Divider from '@/components/common/Divider'
import IframeAccesstrade from '@/components/iframe-accesstrade/page'

export default function Home() {
  return (
    <div>
      <Container className='bg-[#f4f4f5]'>
        <BannerSection />
      </Container>
      <Divider />
      <Container>
        <Campaign />
        <Divider />
        <IframeAccesstrade />
      </Container>
    </div>
  )
}
