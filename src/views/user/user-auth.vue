<template>
    <div>
        <page-header>
            Подключение к сессии №{{ sessionId }}
        </page-header>

        <page-form>
            <el-input
                v-model="name"
                placeholder="Введите имя"
            ></el-input>

            <el-select
                v-model="team"
                placeholder="Выберите команду"
                :loading="isTeamsLoading"
                loading-text="Загружаем возможные команды..."
                no-data-text="Нет доступных для выбора команд :("
            >
                <el-option
                    v-for="team in availableTeams"
                    :key="team.id"
                    :label="team.name"
                    :value="team.id"
                ></el-option>
            </el-select>

            <el-button>
                Подключиться
            </el-button>
        </page-form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            name: '',
            team: null,
        };
    },
    computed: {
        ...mapGetters('user/teams', {
            availableTeams: 'available',
            isTeamsLoading: 'isLoading',
        }),
        isLoading() {
            return this.isTeamsLoading;
        },
        sessionId() {
            return this.$route.params.sessionId;
        },
    },
    mounted() {
        if (this.checkIfAuthorized()) {
            this.redirect();
        }

        this.getTeams();
    },
    methods: {
        ...mapActions('user/teams', [
            'getTeams',
        ]),
        checkIfAuthorized() {
            // todo
        },
        redirect() {
            // todo
        },
        onSubmit() {
            // todo
        },
    },
};
</script>
