const Searcher = ({ setFilter }) => (
  <input
    style={{ textAlign: 'center', fontSize: '1.3rem' }}
    placeholder='Search by country...'
    name='country'
    onChange={({ target }) => setFilter(target.value)}
  />
)

export default Searcher
