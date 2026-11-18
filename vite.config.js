import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { STATIC_PAGES } from './src/constants/routes.js'

/**
 * GitHub Pages only serves real files, so a pasted deep link such as
 * /resume/project/credit-risk-ai would 404. After each build, write a copy of
 * index.html at every permanent address (with its own tab title), plus 404.html
 * as a catch-all, so every link opens the app directly.
 */
const staticPages = () => ({
  name: 'static-pages',
  apply: 'build',
  closeBundle() {
    const dist = path.resolve('dist')
    const html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
    for (const { path: route, title } of STATIC_PAGES) {
      const dir = path.join(dist, route)
      fs.mkdirSync(dir, { recursive: true })
      fs.writeFileSync(
        path.join(dir, 'index.html'),
        html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
      )
    }
    fs.writeFileSync(path.join(dist, '404.html'), html)
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), staticPages()],
  base: '/resume/',
})
