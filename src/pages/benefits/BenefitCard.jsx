import React from 'react';

const BenefitCard = ({ title, description, image }) => {
  return (
    <div className="card card-body w-full shadow-md bg-white text-center rounded-2xl p-6 border hover:shadow-lg hover:bg-amber-100 transition-all duration-300">
      <div className="flex items-center gap-6">
        {/* Image */}
        <img src={image} alt={title} className="w-16 h-16 object-contain bg-transparent" />

        {/* Divider: visible vertical line */}
        <div className="w-[2px] h-16 bg-gray-300 rounded-full" />

        {/* Text */}
        <div className="text-left">
          <h3 className="card-title mb-2 text-xl font-semibold text-primary">
            {title}
          </h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
