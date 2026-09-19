'use client'

import Image from 'next/image'

const ExploreBtn = () => {
    const handleScroll = () => {
        const eventsSection = document.getElementById('events');
        if (eventsSection) {
            eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <button
            type="button"
            id='explore-btn'
            className='mt-7 mx-auto'
            onClick={handleScroll}
        >
            <a
                href="#events"
                onClick={(e) => {
                    e.preventDefault();
                    handleScroll();
                }}
            >
                Explore Events
                <Image src="/icons/arrow-down.svg" alt='explore icon' width={24} height={24} />
            </a>
        </button>
    )
}

export default ExploreBtn