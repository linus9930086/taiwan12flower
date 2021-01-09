import React from 'react';
// import Icon01 from '../Img/icon-01.svg';
import Icon02 from '../Img/icon-02.svg';
// import Icon03 from '../Img/icon-03.svg';
// import Icon04 from '../Img/icon-04.svg';
// import Icon05 from '../Img/icon-05.svg';
// import Icon06 from '../Img/icon-06.svg';
// import Icon07 from '../Img/icon-07.svg';
// import Icon08 from '../Img/icon-08.svg';
// import Icon09 from '../Img/icon-09.svg';
// import Icon10 from '../Img/icon-10.svg';
// import Icon11 from '../Img/icon-11.svg';
// import Icon12 from '../Img/icon-12.svg';

const FIcon = (props) => {
  const { no } = props;
  let img;
  switch (no) {
    // case 0:
    //   img = <img src={Icon01} alt="main-img" />;
    //   break;
    case 1:
      img = <img src={Icon02} alt="main-img" />;
      break;
    // case 2:
    //   img = <img src={Icon03} alt="main-img" />;
    //   break;
    // case 3:
    //   img = <img src={Icon04} alt="main-img" />;
    //   break;
    // case 4:
    //   img = <img src={Icon05} alt="main-img" />;
    //   break;
    // case 5:
    //   img = <img src={Icon06} alt="main-img" />;
    //   break;
    // case 6:
    //   img = <img src={Icon07} alt="main-img" />;
    //   break;
    // case 7:
    //   img = <img src={Icon08} alt="main-img" />;
    //   break;
    // case 8:
    //   img = <img src={Icon09} alt="main-img" />;
    //   break;
    // case 9:
    //   img = <img src={Icon10} alt="main-img" />;
    //   break;
    // case 10:
    //   img = <img src={Icon11} alt="main-img" />;
    //   break;
    // case 11:
    //   img = <img src={Icon12} alt="main-img" />;
    //   break;
    default:
      img = <img src={Icon02} alt="main-img" />;
      break;
  }
  return img;
};

export default FIcon;
