import futureData from '../mockData/women';

const FutureImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="futur_pic" />
);

const FutureText = ({ uptxt, hz, SHLISHKOM_MNOGO_BYKV, downtxt }) => (
  <div className="right__container">
    <div className="text-container">
      <p className="dostup">{uptxt}</p>
      <h1 className="ozhid">{hz}</h1>
      <p className="odnako">{SHLISHKOM_MNOGO_BYKV}</p>
      <p className="hz_tozhe_dostup">{downtxt}</p>
    </div>
  </div>
);

const Women = () => {
  const { left_part, right_part } = futureData;

  return (
    <div className="future_here">
      <div className="future_here__left">
        <FutureImage src={left_part[0].src} alt={left_part[0].alt} />
      </div>
      <div className="future_here__right">
        <FutureText 
          uptxt={right_part[0].uptxt}
          hz={right_part[0].hz}
          SHLISHKOM_MNOGO_BYKV={right_part[0].SHLISHKOM_MNOGO_BYKV}
          downtxt={right_part[0].downtxt}
        />
      </div>
    </div>
  );
};

export default Women;