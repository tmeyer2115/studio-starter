import { SearchHeadlessProvider } from '@yext/search-headless-react'
import { provideHeadless } from '@yext/search-headless'
import { ReactNode } from 'react'

const headless = provideHeadless({
  apiKey: '2d8c550071a64ea23e263118a2b0680b',
  experienceKey: 'slanswers-hier-facets',
  locale: 'en',
  experienceVersion: 'STAGING'
})

export interface SearchProviderProps {
  children: ReactNode
}

export default function Searchprovider(props: SearchProviderProps) {
  return (
    <SearchHeadlessProvider searcher={headless}>
      {props.children}
    </SearchHeadlessProvider>
  )
}