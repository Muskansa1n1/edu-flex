<template>
    <navigation-comp/>
     <router-view></router-view>
    <footer-comp/>
       

</template>
<script>
import NavigationComp from './components/NavigationComp.vue'
import FooterComp from './components/FooterComp.vue'
export default {
    components: {
        NavigationComp,
        FooterComp,
    }
}
</script>
