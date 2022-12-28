import { useState } from "react";
const App = () => {
    const [data, setdata] = useState([])
    const items = [data].filter((v) => (v > 5))
    const onchange = (e) => {
        setdata(e.target.value)

    }
    return (
        <div>
            <input type="text" value={data} name="data" onChange={onchange} placeholder="enter the value" />

            {
                items.map(
                    (ele, id) => <li key={id}>{ele}</li>
                )
            }

        </div>

    )
}
export default App;
