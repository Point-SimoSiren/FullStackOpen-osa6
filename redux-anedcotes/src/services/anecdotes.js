import axios from 'axios'
const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const res = await axios.get(url)
    return res.data
}

const patchVotes = async (id) => {
    const anecdote = await axios.get(`${url}/${id}`)
    const oldVotes = anecdote.data.votes
    axios.patch(`${url}/${id}`, {
        votes: oldVotes + 1
    })
}

const create = async (content) => {
    const newAnecdote = { content, votes: 0 }
    const response = await axios.post(url, newAnecdote)
    return response.data
}
export default { getAll, patchVotes, create }