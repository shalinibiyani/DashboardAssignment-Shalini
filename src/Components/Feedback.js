import React from 'react';

const feedbacks = [
    { customer: 'Jenny Wilson', rating: 5, comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.', photo: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg' },
    { customer: 'Dianne Russell', rating: 5, comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.', photo: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg' },
    // { customer: 'Devon Lane', rating: 4.5, comment: 'Normally wings are wings, but theirs are lean, meaty, and tender...', photo: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg' },
    // Add more feedback
];

const Feedback = () => {
    return (
        <div className=" bg-gray-800 rounded-lg p-6 mt-4">
            <h2 className="text-2xl font-bold text-white mb-4">Customer's Feedback</h2>
            {feedbacks.map((feedback, index) => (
                <div key={index} className="mb-6">
                    <div className="flex items-center mb-2">
                        <img className="w-8 h-8 rounded-full mr-3" src={feedback.photo} alt="user photo" />
                        <span className="font-bold text-white">{feedback.customer}</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-gray-500 ml-1">{feedback.rating.toFixed(1)}</span>
                    </div>
                    <p className="text-white text-left">{feedback.comment}</p>
                    {index < feedbacks.length - 1 && <hr className="border-gray-600 mb-4" />}
                </div>
            ))}
        </div>
    );
};

export default Feedback;
