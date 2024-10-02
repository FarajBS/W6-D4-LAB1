import { useState, useEffect} from 'react'

import './App.css'

function App() {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        
        setProd(data)
        // console.log(data)
      });
        
  }, []);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>id</th>
              <th>title</th>
              <th>price</th>
              <th>description</th>
              <th>category</th>
              <th>img image</th>
              <th>rating</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {/* <tr className="bg-base-200"> */}
              {prod.map((item, index) => {
                return (
                  <div key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><img src={item.image}/></td>
                    <td>{item.rating}</td>


                    <td>Blue</td>
                  </div>
                )
              } )}
              {/* <th></th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr> */}
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
