import processIconOne from '../assets/icons/locate.svg';
import processIconTwo from '../assets/icons/scooter.svg';
import processIconThree from '../assets/icons/ride.svg';

import bigListHomeOne from '../assets/images/telemetry.jpg';
import bigListHomeTwo from '../assets/images/near-you.jpg';
import bigListHomeThree from '../assets/images/payments.jpg';
import bigListAboutOne from '../assets/images/digital-era.jpg';
import bigListAboutTwo from '../assets/images/better-living.jpg';
import bigListCareersOne from '../assets/images/join-us.jpg';

import ArrowDownLeft from '../assets/patterns/left-downward-arrow.svg?react';
import ArrowDownRight from '../assets/patterns/right-arrow.svg?react';
import ArrowUpLeft from '../assets/patterns/left-upward-arrow.svg?react';

import smallListOne from '../assets/images/our-tech.jpg';
import smallListTwo from '../assets/images/our-integrity.jpg';
import smallListThree from '../assets/images/our-community.jpg';

export type IProcessItem = {
    icon: string
    title: string
    text: string
}

export type IBigImageListItem = {
    image: string
    title: string
    text: string
    Arrow: React.FC<React.SVGProps<SVGSVGElement>>
    arrowLocation: 'bottom right' | 'top left' | 'top right'
    buttonText?: string
}

export type ISmallImageListItem = {
    index: string
    image: string
    title: string
    text: string
}

export type IJob = {
    title: string
    location: string
}

export type IFaqItem = {
    question: string
    answer: string
}

export type IFaqDataSet = {
    title: string
    items: IFaqItem[]
}

export const processData: IProcessItem[] = [
    {
        icon: processIconOne,
        title: 'Locate with app',
        text: 'Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.'
    },
    {
        icon: processIconTwo,
        title: 'Pick your scooter',
        text: 'We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.'
    },
    {
        icon: processIconThree,
        title: 'Enjoy the ride',
        text: 'Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.'
    },
];

export const bigListHomeData: IBigImageListItem[] = [
    {
        image: bigListHomeOne,
        title: 'Easy to use riding telemetry',
        text: 'The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you’ve been using the scooter, your traveling distance, and many more things all in an easy to use app.',
        Arrow: ArrowDownLeft,
        arrowLocation: 'bottom right',
        buttonText: 'Learn More'
    },
    {
        image: bigListHomeTwo,
        title: 'Coming to a city near you',
        text: 'Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.',
        Arrow: ArrowDownRight,
        arrowLocation: 'top left',
        buttonText: 'Learn More'
    },
    {
        image: bigListHomeThree,
        title: 'Zero hassle payments',
        text: 'Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.',
        Arrow: ArrowDownLeft,
        arrowLocation: 'top right',
        buttonText: 'Learn More'
    }
];

export const bigListAboutData: IBigImageListItem[] = [
    {
        image: bigListAboutOne,
        title: 'Mobility for the digital era',
        text: 'Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.',
        Arrow: ArrowUpLeft,
        arrowLocation: 'bottom right'
    },
    {
        image: bigListAboutTwo,
        title: 'Better urban living',
        text: 'We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.',
        Arrow: ArrowDownRight,
        arrowLocation: 'top left'
    }
];

export const bigListCareersData: IBigImageListItem[] = [
    {
        image: bigListCareersOne,
        title: 'Care to join our mission?',
        text: 'We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!',
        Arrow: ArrowDownLeft,
        arrowLocation: 'bottom right',
        buttonText: 'Say Hello'
    }
];

export const smallListData: ISmallImageListItem[] = [
    {
        index: '01',
        image: smallListOne,
        title: 'Our tech',
        text: 'We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!',
    },
    {
        index: '02',
        image: smallListTwo,
        title: 'Our integrity',
        text: 'We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.',
    },
    {
        index: '03',
        image: smallListThree,
        title: 'Our community',
        text: 'We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.',
    }
];

export const jobs: IJob[] = [
    {
        title: 'General Manager',
        location: 'Jakarta, Indonesia'
    },
    {
        title: 'UI/UX Designer',
        location: 'Yokohama, Japan'
    },
    {
        title: 'Blog Content Copywriter',
        location: 'New York, United States'
    },
    {
        title: 'Graphic Designer',
        location: 'New York, United States'
    },
    {
        title: 'Fleet Supervisor',
        location: 'Jakarta, Indonesia'
    },
    {
        title: 'UX Analyst',
        location: 'London, United Kingdom'
    }
];


export const faqData: IFaqDataSet[] = [
    {
        title: 'How it works',
        items: [
            {
                question: 'How do I download the app?',
                answer: 'To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.'
            },
            {
                question: 'Can I find a nearby Scoots?',
                answer: 'To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.'
            },
            {
                question: 'Do I need a license to ride?',
                answer: 'To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.'
            }
        ]
    },
    {
        title: 'Safe driving',
        items: [
            {
                question: 'Should I wear a helmet?',
                answer: 'Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.'
            },
            {
                question: 'How about the rules & regulations?',
                answer: 'Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.'
            },
            {
                question: 'What if I damage my Scoot?',
                answer: 'Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.'
            }
        ]
    }
]





