import { Block } from 'notion-types'
import { defaultMapImageUrl } from 'react-notion-x'

import { defaultPageIcon, defaultPageCover } from './config'

export const mapImageUrl = (url: string, block: Block) => {
  if (url === defaultPageCover || url === defaultPageIcon) {
    return url
  }

  //By River
  if(url.startsWith("https://www.notion.so/image/")) {
    url =  url.slice(28)
    url = decodeURIComponent(url)
    return defaultMapImageUrl(url, block)
  }

  return defaultMapImageUrl(url, block)
}
