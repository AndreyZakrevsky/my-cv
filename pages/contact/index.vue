<template>
    <v-container grid-list-xl contact-content>
        <no-ssr>
            <vue-particles
                    class="particles"
                    color="#b7ffe5"
                    :particleOpacity="0.9"
                    :particlesNumber="80"
                    shapeType="circle"
                    :particleSize="4"
                    linesColor="#00ccff"
                    :linesWidth="1"
                    :lineLinked="true"
                    :lineOpacity="0.4"
                    :linesDistance="150"
                    :moveSpeed="3"
                    :hoverEffect="true"
                    hoverMode="grab"
                    :clickEffect="true"
                    clickMode="push">
            </vue-particles>
        </no-ssr>
        <v-layout row justify-center align-center wrap class="mt-4 pt-2">
            <v-flex xs12 sm12 md6 lg6 xl6>
                <h2 class="pb-4 mt-2">
                    <span>Get In</span>
                    <span class="green--text">Touch</span>
                </h2>
                <div class="py-4 subheading font-weight-bold">
                    <v-icon large color="green" left>fas fa-map-marker-alt</v-icon>
                    <span>Vinnitsia,&nbsp;</span>
                    <span class="green--text">Ukraine</span>
                </div>
                <div class="py-4 subheading font-weight-bold">
                    <v-icon large color="green" left>fas fa-envelope</v-icon>
                    <span>zak111revsky</span>
                    <span class="green--text">@gmail.com</span>
                </div>
                <div class="py-4 subheading font-weight-bold">
                    <v-icon large color="green" left>fas fa-phone</v-icon>
                    <span>+380&nbsp;</span>
                    <span class="green--text">962090490</span>
                </div>

            </v-flex>

            <v-flex xs12 sm12 md6 lg6 xl6>
                <h2 class="pb-4 mb-4">
                    <span>Contact</span>
                    <span class="green--text">Form</span>
                </h2>

                <form method="POST" action="https://formspree.io/zak111revsky@gmail.com">
                    <v-text-field
                            name="name"
                            color="green"
                            background-color="transparent"
                            v-model="name"
                            :error-messages="nameErrors"
                            label="Name"
                            required
                            @blur="$v.name.$touch()"
                    ></v-text-field>
                    <v-text-field
                            type="email"
                            color="green"
                            background-color="transparent"
                            name="email"
                            v-model="email"
                            :error-messages="emailErrors"
                            label="E-mail"
                            required
                            @blur="$v.email.$touch()"
                    ></v-text-field>
                    <v-textarea
                            color="green"
                            background-color="transparent"
                            :counter="200"
                            :error-messages="bodyErrors"
                            v-model="body"
                            label="Textarea"
                            name="body"
                            @blur="$v.body.$touch()"
                    ></v-textarea>
                    <v-btn
                            @click="submit"
                            type="submit"
                            color="green"
                            class="white--text"
                            :disabled=" (body.length<=20)"
                    >SEND MESSAGE</v-btn>
                    <v-btn @click="clear">clear</v-btn>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import { validationMixin } from "vuelidate";
    import {
        required,
        maxLength,
        email,
        minLength
    } from "vuelidate/lib/validators";
    export default {
        mixins: [validationMixin],
        validations: {
            name: { required, maxLength: maxLength(20) },
            email: { required, email },
            body: { required, minLength: minLength(20) }
        },
        data() {
            return {
                name: "",
                email: "",
                body: ""
            };
        },
        methods: {
            submit() {
                this.$v.$touch();
            },
            clear() {
                this.$v.$reset();
                this.name = "";
                this.email = "";
                this.body = "";
            }
        },
        computed: {
            nameErrors() {
                const errors = [];
                if (!this.$v.name.$dirty) return errors;
                !this.$v.name.maxLength &&
                errors.push("Name must be at most 20 characters long");
                !this.$v.name.required && errors.push("Name is required.");
                return errors;
            },
            emailErrors() {
                const errors = [];
                if (!this.$v.email.$dirty) return errors;
                !this.$v.email.email && errors.push("Must be valid e-mail");
                !this.$v.email.required && errors.push("E-mail is required");
                return errors;
            },
            bodyErrors() {
                const errors = [];
                if (!this.$v.body.$dirty) return errors;
                !this.$v.body.minLength &&
                errors.push("Text must be at least 20 characters long");
                !this.$v.body.required && errors.push("Text is required");
                return errors;
            }
        }
    };
</script>

<style lang="scss" scoped>
    .contact-content{
        .particles {
            position: absolute;
            top: 100;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
</style>
