<template>
    <LoginVariation1
        brand-primary="#d21d1d"
        brand-logo-url="https://cab9.app/includes/images/logo.png"
        title-text="Innovative way to manage your Private Hire &amp; Taxi Business"
        sub-title-text="Cab9 is a contemporary, comprehensive and streamlined dispatch system built to satisfy every requirement of executive hire businesses."
        text-dark="#e90000"
        text-light="#9e9e9e"
        background-image="https://images.unsplash.com/photo-1526527736852-326fd1380c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        :on-click-fn="loginButtonClicked">
    </LoginVariation1>
</template>

<script>
import {LoginVariation1} from '@e9ine/vue_components';

export default {
    name: 'Login',
    components: {
        LoginVariation1
    },
    methods: {
        loginButtonClicked(username, password) {
            console.info(`Username is :${username}`);
            console.info(`Password is :${password}`);
        }
    }
};
</script>