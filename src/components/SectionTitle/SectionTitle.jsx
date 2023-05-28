import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center w-4/12 my-10'>
            <p className='text-yellow-600 mb-3'>---{subHeading}---</p>
            <h2 className='text-4xl uppercase font-semibold border-y-4 py-4'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;