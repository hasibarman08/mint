<template>
    <v-app>
        <v-app-bar fixed app elevation="2" class="header">
            <v-container>
                <v-row align="center">
                    <div class="d-flex align-center">
                        <a href="https://pumpkitten.com" class="link">
                            <v-img :src="require('@/assets/favicon.png')" height="40px" contain width="40px"></v-img>
                        </a>
                        <span class="text-h6 font-weight-bold pl-2">Pumpkittens</span>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn text small><a href="https://pumpkitten.com" class="link">Home</a></v-btn>
                    <v-btn text small><a href="https://twitter.com/pumpkittens" class="link">Help</a></v-btn>
                </v-row>
            </v-container>
        </v-app-bar>
        <v-main>
            <v-container class="py-12">
                <notification v-if="hasMessage"/>
                <v-row>
                    <v-col lg="4" cols="12">
                        <v-card color="transparent">
                            <v-card-text>
                                <v-btn :to="{name:'home'}" exact block large color="transparent" class="my-3">MINT
                                </v-btn>
                                <v-btn :to="{name:'viewer'}" block large color="transparent" class="my-3">
                                    PUMPKITTENS VIEWER
                                </v-btn>
                                <v-btn :to="{name:'attribute'}" block large color="transparent" class="my-3">
                                    ATTRIBUTES
                                </v-btn>
                                <v-list-group
                                >
                                    <template v-slot:activator>
                                        <v-list-item-content>
                                            <v-list-item-title class="text-center">newkittens</v-list-item-title>
                                        </v-list-item-content>
                                    </template>

                                    <v-btn block large color="transparent" class="my-3" :to="{name:'newMint'}">
                                        newkittens
                                        mint
                                    </v-btn>

                                    <v-btn block large color="transparent" class="my-3" :to="{name:'newView'}">
                                        newkittens
                                        view
                                    </v-btn>

                                    <v-btn block large color="transparent" class="my-3" :to="{name:'newAttribute'}">
                                        newkittens attributes
                                    </v-btn>


                                </v-list-group>
                            </v-card-text>
                        </v-card>

                    </v-col>
                    <v-col lg="8" cols="12">
                        <v-card color="transparent" class="mb-3">
                            <v-card-text>
                                <div class="text-h6">
                                    <b>'Pumpkittens'</b> is a collection of <b>100 rare and unique Pumpkitten</b> NFTs
                                    living on the <b>Fantom blockchain.</b>
                                </div>
                                <ol class="list-box">
                                    <li class="my-1">
                                        Connect your Wallet
                                        <v-btn @click="connectWallet" v-if="isMetaMaskInstalled && !isMetaMaskConnected"
                                               color="black" outlined elevation="2" class="ml-2" small>Connect
                                        </v-btn>
                                        <v-btn @click="lockMetamask" v-if="isMetaMaskInstalled && isMetaMaskConnected"
                                               color="black" outlined elevation="2" class="ml-2" small>Connected
                                        </v-btn>
                                    </li>
                                    <li class="my-1">Mint Your Pumpkitten</li>
                                    <li class="my-1">View your Pumpkittens! (You can also send Pumpkittens to other
                                        addresses)
                                    </li>
                                    <li class="my-1">
                                        Once all Pumpkittens are minted you will be able to export them to any
                                        <b>ERC-721 Standard</b> compatible marketplace or addresses on Fantom.
                                    </li>
                                </ol>
                            </v-card-text>
                        </v-card>
                        <v-card color="transparent">
                            <v-card-text>
                                <router-view/>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

        </v-main>
        <v-footer style="z-index: 1" color="transparent" elevation="2">
            <v-container class="py-3">
                <div class="text-center font-weight-bold black--text pb-2">Our Socials</div>
                <v-row align="center" justify="center">
                    <v-btn icon class="ma-1">
                        <a href="https://twitter.com/Pumpkittens" class="link">
                            <v-icon>mdi-twitter</v-icon>
                        </a>
                    </v-btn>
                    <v-btn icon class="ma-1">
                        <a href="" class="link">
                            <v-icon>mdi-github</v-icon>
                        </a>
                    </v-btn>
                    <v-btn icon class="ma-1">
                        <a href="https://discord.gg/Gj7JqN2mXZ" class="link">
                            <v-icon>mdi-discord</v-icon>
                        </a>
                    </v-btn>
                </v-row>
                <v-row></v-row>
                <div class="text-center font-weight-bold black--text pt-5">
                    &copy; 2021 Pumpkittens
                </div>
            </v-container>
        </v-footer>
    </v-app>
</template>

<script>
    import Notification from '@/components/notification.vue';

    export default {
        name: "App",
        components: {Notification},
        data() {
            return {
                currentTab: "mint",
            };
        },
        computed: {
            isMetaMaskInstalled() {
                const {ethereum} = window;
                return Boolean(ethereum && ethereum.isMetaMask)
            },
            isMetaMaskConnected() {
                return this.$store.state.account != null;
            },
            hasMessage() {
                return this.$store.state.messageContent != null
            }
        },
        mounted() {
        },
        methods: {
            connectWallet() {
                this.$store.dispatch("connect")
            },
            lockMetamask() {
                this.$store.dispatch("disconnect")
            }
        }
    };
</script>

<style scoped>
    .link {
        color: rgb(70, 36, 70);
        margin: 5px 0;
        text-decoration: none;
    }

    .header {
        background-color: #f9e1d5c7;
        background-image: linear-gradient(0deg, #f9e1d5a8 0%, #f9e1d5b2 100%);

    }
</style>
