import {defineStore} from 'pinia'

export const useAboutStore = defineStore('aboutStore', {
        state: () => ({
            items: [
                {
                    title: 'Tech Enthusiasts', //
                    description: 'We firmly believe that techies are the driving force in our digitized economy and as such we should celebrate being enthusiastic about all things technical.',
                    icon: '/icons/hands.svg'
                }, {
                    title: 'Lifelong Learners', //
                    description: '“The more I know, the more I realize I know nothing.” This quote from Sokrates will always be relevant. We are always hungry to learn more and be a better version of ourselves.',
                    icon: '/icons/light-bulb.svg'
                }, {
                    title: 'Diversity Advocates', //
                    description: 'We strive for teams with different characters, styles, preferences, genders, and races. And yes, gender-wise this group is unfortunately not of ideal composition yet. Please help us change it!',
                    icon: '/icons/people.svg'
                }, {
                    title: 'Builders', //
                    description: 'We love to construct things, start ventures, explore new frontiers and drive innovation, sometimes by unconventional means.\n' +
                        'As such, we admire tech entrepreneurs who in their current or previous job are actively involved in steering the company’s tech strategy. A special bonus goes to those who founded their own startup.',
                    icon: '/icons/tool.svg'
                }, {
                    title: 'Leaders', //
                    description: 'We have an impact on our company and on other individuals as well. We take on responsibility. We love to share our knowledge and help others grow. In particular, our colleagues trust in our ability to steer a team, ensure the success of a product on the market and execute the company\'s tech strategy.',
                    icon: '/icons/trophy.svg'
                },
            ]
        })
    }
)
