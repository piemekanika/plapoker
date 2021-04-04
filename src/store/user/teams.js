import pause from '@/api/pause';

export default {
    namespaced: true,
    state: () => ({
        available: [],
        isLoading: false,
    }),
    getters: {
        isLoading: state => state.isLoading,
        available: state => state.available,
    },
    actions: {
        async getTeams({ state }) {
            state.isLoading = true;

            await pause(1200);

            state.available = [
                {
                    id: 1,
                    name: 'Фронт',
                },
                {
                    id: 4,
                    name: 'Бэк',
                },
                {
                    id: 2,
                    name: 'Шлюз',
                },
                {
                    id: 3,
                    name: 'Тестирование',
                },
                {
                    id: 5,
                    name: 'Аналитика',
                },
            ];

            state.isLoading = false;
        },
    },
};
