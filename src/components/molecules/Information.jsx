import React from 'react';

const Information = ({ data }) => (
  <div className='art-table pt-5 pb-5'>
    <ul>
      <li>
        <h6>Ubicación:</h6>
        <span>{data.location}</span>
      </li>

      <li>
        <h6>Sitio Web :</h6>
        <span>{data.website}</span>
      </li>
      <li>
        <h6>GitHub:</h6>
        <span>{data.github}</span>
      </li>
    </ul>
  </div>
);

export default Information;
