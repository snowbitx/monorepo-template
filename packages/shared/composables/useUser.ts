import { ref } from 'vue'
import type { User } from '../types/user'

const user = ref<User | null>(null)

export function useUser() {
    function setUser(u: User) {
        user.value = u
    }

    return { user, setUser }
}
