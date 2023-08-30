import React from "react";

const Display = ({ data }) => {
  return (
    <div className="row">
      {data.map((image) => (
        <div key={image.id} className="col-md-4 mb-4">
          <img
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
            alt={image.title}
            className="img-fluid"
            style={{ width: '80%', height: '150px' }} 
          />
        </div>
      ))}
    </div>
  );
};

export default Display;
