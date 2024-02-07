import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CoursesView from '@/views/CoursesView.vue';
import InternshipView from '@/views/InternshipView.vue';
import RegistrationView from '@/views/RegistrationView.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/Courses',
            component: CoursesView,
        },
        {
            path: '/Internship',
            component: InternshipView,
        },
        {
            path: '/Registration',
            component: RegistrationView,
        }
    ]
});