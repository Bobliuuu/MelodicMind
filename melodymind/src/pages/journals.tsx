import React from 'react';

const Journals = () => {
    const journalsData = [
        {
            id: 1,
            imageUrl: 'https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg',
            backgroundColor: 'bg-green-500',
            content: "I'm elated today, I went to see the sunset on Marina Beach and it was really interesting!"
        },
        {
            id: 2,
            imageUrl: 'https://tecdn.b-cdn.net/img/new/standard/nature/183.jpg',
            backgroundColor: 'bg-red-500',
            content: "I'm feeling super down, and it won't get any better from here."
        },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-6">
            {journalsData.map(journal => (
                <div key={journal.id} className={`${journal.backgroundColor} block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700`}>
                    <div className={`relative overflow-hidden bg-cover bg-no-repeat`}>
                        <img className="rounded-t-lg" src={journal.imageUrl} alt="" />
                    </div>
                    <div className={`${journal.backgroundColor} p-6`}>
                        <p className="text-base text-neutral-600 dark:text-neutral-200">
                            {journal.content}
                        </p>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                        Listen to music
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Journals;
