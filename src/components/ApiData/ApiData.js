import { useState, useEffect } from 'react';
import loader from '../../assets/loader.svg';
import axios from 'axios';
export default function ApiData(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://rest-sandbox.coinapi.io/v1/exchanges',
      headers: { 'X-CoinAPI-Key': 'E5BB48D5-D983-426C-9F8D-30F727ED153C' },
    }).then(response => {
      if (response.status === 200) {
        setData(response.data);
      }
    });
  }, []);
  return (
    <div className="container center-load-text">
      <div className="coin-text">COINAPI.IO </div>
      {!data.length > 0 ? (
        <div className="loader-bgimg">
          <img className="loader-img" src={loader} alt="loading...." />
        </div>
      ) : (
        <table className="bitcoinTable">
          <thead>
            <tr>
              <th>NAME</th>
              <th>START_DATE</th>
              <th>END_DATE</th>
              <th>VOLUME_1HR_USED</th>
              <th>VOLUME_1DAY_USED</th>
              <th>VOLUME_1MONTH_USED</th>
              <th>WEBSITE</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length > 0 &&
              data.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td className="start">{item.data_start}</td>
                    <td className="start">{item.data_end}</td>
                    <td>{item.volume_1hrs_usd}</td>
                    <td>{item.volume_1day_usd}</td>
                    <td>{item.volume_1mth_usd}</td>
                    <td>
                      <a href={item.website} target="_blank">
                        {item.website}
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
}
