import axios from 'axios'
import merge from 'deepmerge'

export default (token) => {
  const client = axios.create({
    baseURL: 'https://gitlab.com/api/v4/',
    timeout: 30000,
    headers: { 'Authorization': token }
  })
  return {
    async projects({owned, page, per_page}) {
      const response = await client.get('projects', {
        params: { owned, page, per_page },
      })
      return {
        total: response.headers['x-total'],
        total_pages: response.headers['x-total-pages'],
        page: response.headers['x-page'],
        next_page: response.headers['x-next-page'] || null,
        prev_page: response.headers['x-prev-page'] || null,
        per_page: response.headers['x-per-page'],
        projects: response.data,
      }
    },
    async project(id) {
      const encoded_id = encodeURIComponent(id)
      const response = await client.get(`projects/${encoded_id}`)
      return response.data
    },
    async project_repo_tree(id) {
      const encoded_id = encodeURIComponent(id)
      const response = await client.get(
        `projects/${encoded_id}/repository/tree`,
        {params: {
          recursive: true,
          per_page: 500,
        }},
      )
      return merge.all(response.data
        .map(entry => entry.path
          .split('/')
          .reverse()
          .reduce((acc, part) => {
            if (acc.name === 'index.md') {
              return { index: acc }
            } else {
              return { sub: { [part]: acc} }
            }
          }, entry)))
        .sub
    },
    async file(project, filePath) {
      const encoded_project = encodeURIComponent(project)
      const encoded_filePath = encodeURIComponent(filePath)
      const url = `/projects/${encoded_project}/repository/files/${encoded_filePath}/raw`
      const response = await client.get(url, {params: {ref: 'master'}})
      return response.data
    },
  }
}
