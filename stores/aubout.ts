import {defineStore} from 'pinia'
import {IconHands} from "#components";

export const useAboutStore = defineStore('aboutStore', {
        state: () => ({
            items: [
                {
                    title: 'sadasd', //
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi dolorum fuga necessitatibus nisi pariatur perferendis similique sint tempora ullam veniam, voluptatem. Assumenda autem eum ex quasi recusandae repudiandae, temporibus. sadasds',
                    icon: 'icons/hands.svg'
                }
            ]
        })
    }
)
