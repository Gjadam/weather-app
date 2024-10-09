import dynamic from 'next/dynamic'
 
const IndexPageWithNoSSR = dynamic(
  () => import('../components/templates/index/Index'),
  { ssr: false }
)

export default function Home() {
  return (
      <IndexPageWithNoSSR />
  );
}
