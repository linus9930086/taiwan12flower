import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Tabs = (props) => {
  const { flowerArr, setFlower } = props;
  return (
    <div className="taiwan12 tabs-page">
      <div className="taiwan12 tabs">
        {flowerArr.map((item, key) => {
          return (
            <div
              onClick={(e) => {
                e.stopPropagation();
                setFlower(key);
              }}
              className="taiwan12 tab-toggle"
              key={key}
            >
              <div className="taiwan12 flower-tab">{item.name}</div>
            </div>
          );
        })}
      </div>
      <div className="taiwan12 change-page-button-container">
        <Link
          onClick={(e) => {
            e.stopPropagation();
          }}
          // className="taiwan12 change-page-button-container"
          to="/information"
        >
          <div className="taiwan12 change-page-border-button">X</div>
        </Link>
      </div>
    </div>
  );
};

export default Tabs;
