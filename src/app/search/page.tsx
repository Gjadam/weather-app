import dynamic from 'next/dynamic'
 
const SearchTemplateWithNoSSR = dynamic(
  () => import('../../components/templates/search/Search'),
  { ssr: false }
)
export default function page() {
    return (
          <SearchTemplateWithNoSSR />
      )
}
