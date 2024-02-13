import type {Event} from '~/stores/eventsStore'

export default function eventData(): Event[] {
    return [
        {
            id: '1',
            title: 'Engineering metrics:',
            description: 'Delivering features while having fun',
            year: 2024,
            month: 10,
            day: 19,
            hour: 12,
            minute: 0,
            image: '/events/1.png',
            url: 'https://www.event1.com'
        },
        {
            id: '2',
            title: 'Engineering metrics:',
            description: 'Delivering features while having fun',
            year: 2024,
            month: 10,
            day: 18,
            hour: 12,
            minute: 0,
            image: '/events/2.png',
            url: 'https://www.event1.com'
        },
        {
            id: '3',
            title: 'Engineering metrics:',
            description: 'Delivering features while having fun',
            year: 2024,
            month: 10,
            day: 17,
            hour: 12,
            minute: 0,
            image: '/events/3.png',
            url: 'https://www.event1.com'
        },
        {
            id: '4',
            title: 'Engineering metrics:',
            description: 'Delivering features while having fun',
            year: 2024,
            month: 9,
            day: 17,
            hour: 12,
            minute: 0,
            image: '/events/4.png',
            url: 'https://www.event1.com'
        },
    ]
}
