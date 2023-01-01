 import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {
    let [one, setx] = useState([]);
    useEffect(() => { axios.get('https://temple-787ce-default-rtdb.firebaseio.com/yug.json', one).then(q => setx(q.data)) })


    return (
        <div>

            {
                Object.keys(one).map((items, id) => <li key={id}>{items}</li>)
            }
        </div>
    )
}
export default App
