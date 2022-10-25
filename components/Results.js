import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'


function App({ results }) {
    return (
        <FlipMove className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 p-5">
            {results.map(result => (
                <Thumbnail
                    key={result.id}
                    result={result}
                />
            ))}
        </FlipMove>
    )
}



export default App;