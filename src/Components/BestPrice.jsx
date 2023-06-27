import React from 'react'
import "./BestPrice.css"

const BestPrice = () => {
  return (
    <div className='p-2'>
        <h2 className='text-center p-2'>Best Price</h2>
        <div className="pricetable-cont">
        <table className="table table-hover table-striped text-center">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Type</th>
              <th>Area (Sq.Ft.)</th>
              <th>Price Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2 BHK Grand</td>
              <td>725</td>
              <td>
                <button className='btn main-btn'>
                  View Price
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>3 BHK Royal</td>
              <td>816</td>
              <td>
                <button className='btn main-btn'>
                  View Price
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>3 BHK Prime</td>
              <td>1108</td>
              <td>
                <button className='btn main-btn'>
                  View Price
                </button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>3 BHK Grand</td>
              <td>1240</td>
              <td>
                <button className='btn main-btn'>
                  View Price
                </button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>3.5 BHK Royal</td>
              <td>1440</td>
              <td>
                <button className='btn main-btn'>
                  View Price
                </button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>3 BHK Supreme</td>
              <td>1525</td>
              <td>
                <button className='btn main-btn'>
                  View Price
                </button>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>4 BHK Supreme</td>
              <td>1525</td>
              <td>
                <button className='btn main-btn'>
                  View Price
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BestPrice