import axios from 'axios'

/*
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
        {params: {recursive: true}},
      )
      console.log(JSON.stringify(response.data))
      console.log(response.headers)
      return response.data
    },
  }
}
*/
const client = axios.create({
  baseURL: 'https://gitlab.com/api/v4/',
  timeout: 30000,
})

export const state = () => {
  const project = localStorage.getItem('project')
  return {
    project,
    tree: {},
  }
}

export const mutations = {
  setProject(state, project) {
    localStorage.setItem('project', project)
    state.project = project
  },
  loadTree(state, tree) {
    state.tree = tree
  }
}
