export const state = () => {
  const repo = localStorage.getItem('repo')
  return {
    repo,
  }
}

export const mutations = {
  initStore(state) {
  },
  setRepo(state, repo) {
    localStorage.setItem('repo', repo)
    state.repo = repo
  },
}
