import React from 'react';

const BenefitCard = ({ title, description, image }) => {
  return (
    <div className="card w-full shadow-md bg-white text-center rounded-2xl p-6 border hover:shadow-lg hover:bg-amber-100 transition-all duration-300">
      <div className="card-body flex flex-col sm:flex-row items-start gap-4">
        <img src={image} alt={title} className="w-16 h-16 object-contain" />
        <div className="divider divider-vertical lg:divider-vertical text-green-400 hidden sm:flex my-0" />
        <div >
          <h3 className="card-title mb-2 text-xl font-semibold  text-primary">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;