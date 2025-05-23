import React from 'react';

function SingleBottomExperince({ experience }) {
  const { job, company, date, responsibilities } = experience;
  return (
    <div className="mt-10 w-full max-w-[500px] mx-auto border-2 border-dashed border-orange rounded-2xl p-5 hover:shadow-orange/50 hover:shadow-lg transition duration-300">
      <h3 className="text-2xl text-cyan font-bold">{job}</h3>
      <p className="text-orange font-bold">{company}</p>
      <p className="text-lightBrown">{date}</p>
      <ul className="list-disc list-inside mt-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-white">{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default SingleBottomExperince