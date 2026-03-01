
import { useEffect } from 'react';

const DATA = {
  total: 12000000,
  hydro: {sqft: 8400000, towers: 150000, yield: 319000000, capex: 90000000},
  soil: {sqft: 3600000, beds: 112500, yield: 101000000, capex: 56000000}
};

export function Greenhouse7030() {
  useEffect(() => {
    if (typeof window.Plotly !== 'undefined') {
      window.Plotly.newPlot('pie', [{
        values: [DATA.hydro.sqft, DATA.soil.sqft],
        labels: ['70% Hydro Towers', '30% Soil Beds'],
        type: 'pie'
      }]);
    }
  }, []);

  return (
    <div style={{padding: '2rem'}}>
      <h1>70/30 Model: 12M sqft, 900k Students</h1>
      <div id="pie" style={{width: 500, height: 400}}></div>
      <p>Hydro: {DATA.hydro.towers.toLocaleString()} towers (${(DATA.hydro.capex/1e6).toFixed(0)}M)</p>
      <p>Soil: {DATA.soil.beds.toLocaleString()} beds (${(DATA.soil.capex/1e6).toFixed(0)}M)</p>
    </div>
  );
}
