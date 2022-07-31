import React from 'react';

const Information = ({ data }) => (
  <div className='art-table p-15-15'>
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
        <span>{data.email}</span>
      </li>
    </ul>
  </div>
);

export default Information;
