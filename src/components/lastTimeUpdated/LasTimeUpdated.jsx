import React from 'react';
import './lasTimeUpdated.css';

function LasTimeUpdated(props) {
	return <>
    <div className="lastTimeUpdated__container">
      <span>Thời gian cập nhật lần cuối: {props.lasTimeUpdated}</span>
    </div>
  </>;
}

export default LasTimeUpdated;
