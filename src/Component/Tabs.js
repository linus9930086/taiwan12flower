import React, { useEffect } from 'react';
import MapImg from './MapIcon';
import XIcon from '../Img/x-white-62.svg';
import { Link } from 'react-router-dom';

const Tabs = (props) => {
  const { flowerArr, flower, setFlower, setModal } = props;
  useEffect(() => {
    return () => {
      setModal(false);
    };
  }, []);
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
              <div className={`taiwan12 flower-tab ${flower === key ? 'active' : ''}`}>{item.name}</div>
            </div>
          );
        })}
      </div>
      <div className="taiwan12 map-img">
        <MapImg no={flower} />
      </div>
      <div className="taiwan12 change-page-button-container">
        <Link
          onClick={(e) => {
            e.stopPropagation();
          }}
          // className="taiwan12 change-page-button-container"
          to="/information"
        >
          <div className="taiwan12 change-page-border-button">
            <img src={XIcon} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Tabs;
