<template>
    <div id="main-container">
        <mu-paper class="avatar-info card" :zDepth="3" :rounded="false">
            <div class="column-flex">
                <mu-paper class="avatar"
                          circle
                          :zDepth="3"></mu-paper>
            </div>
        </mu-paper>
        <mu-paper class="card post" :zDepth="3">
            <h1 class="post-title">Hello</h1>
            <p class="post-meta">05-17, 2017</p>
            <p>
                风暴英雄更新了2.0之后，同时上线的还有来自守望先锋的英雄：源氏。要知道在守望先锋里，源氏就是一个人气超高的角色，那么在风暴英雄里的源氏，和守望里有哪些不一样呢？又应该怎么玩呢？

                开局一级源氏套路是什么？是打团吗？不是。而是利用E和被动去偷敌人的水井。

                各个地图通常都会有一块区域是堡垒打不到的，利用源氏的E技能突进去之后开始用Q疯狂拆水井。
                比如花村就是下面这个点。这时候如果有人来抓你，一定不要急。如果有E的话，骚起来，可以利用W去骗堡垒的几个子弹，搞不好还可以拿个人头。如果没有E，赶紧用D翻墙跑吧。有E之后瞬间跑路。通常来说第一波都能偷掉对面的一个水井。这在前期也算是拿下了小优势！

                开局拿了水井之后，之后的团战源氏的输出一定要记得：留住E，不到收割的时候千万不要用E，没有E的源氏那就意味着死亡。当然如果周围有墙的话，D也是保命的好办法。
                下面是源氏的加点建议：

                通常来说，源氏的爆发靠近身时的3段Q，贴脸的3段Q绝对是后排的噩梦。很多时候前排也会瞬间爆炸，但是在团战的时候一定要抓准时机，因为源氏E进去之后，用了W后就是瓜皮一般的存在。所以一定要猥琐，另外还要有一颗收割的心。大招的话其实鎏金挖开雅酷烈是更帅也更爽的。不过一般来说更倾向于在优势局学。劣势或者保守的情况下还是乖乖学剑气吧。

                有心的小伙伴们可能会发现，最近风暴更新2.0之后，对局的匹配时间变短了，倒是可以证明最近的玩家变多了，但是这个2.0的风暴热度能持续多久呢？还得大家拭目以待。
            </p>
        </mu-paper>
        <mu-paper class="card footer" :zDepth="3">
            <h1>Footer</h1>
            <p>This is a footer</p>
        </mu-paper>
    </div>
</template>
<script lang="ts">
    import Vue from "vue";
    import Component from "nuxt-class-component";
    import Paper from 'muse-ui/src/paper';
    import {State, Getter} from "vuex-class";
    import 'tachyons/css/tachyons.min.css';

    @Component({
        layout: 'blog',
        components: {
            'mu-paper': Paper
        }
    })
    export default class extends Vue {
        @State selected;
        @State people;
        @Getter selectedPerson;
    }
</script>

<style lang="less">
    @import "../theme/fresh/import";

    #main-container {
        width: 800px;
        margin: 100px auto 0 auto;
        .column-flex;

    }

    .column-flex {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
    }

    .avatar-info {
        .filter-blur(#fff, @general-background, 80px);

        .avatar {
            height: 120px;
            width: 120px;
            margin: 0 auto 15px auto;
        }
    }

    .card {
        padding: 1rem 2rem;
        margin-bottom: 40px;
    }

    .post {

    }

    .footer {
        .filter-blur(#fff, @general-background, 100px);
    }
</style>