<template>
    <div class="loading">
        <div class="loadingio-spinner-dual-ring-z27cluf8o2t">
            <div class="ldio-ob9mojiyi9i">
                <div></div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="ldio-ob9mojiyi9i">
        <div></div>
        <div>
            <div></div>
        </div>
    </div> -->
</template>

<script>
export default {
    name: 'loading',
    
}
</script>

<style>
    .loading {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100000;

        opacity: 0;
        visibility: hidden;

        transition: all 0.2s ease;
        background-color: rgba(0, 0, 0, 0.53);
    }
    .loading.show {
        opacity: 1;
        visibility: visible;
    }
    .loading .loadingio-spinner-dual-ring-z27cluf8o2t {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.3);
    }
    @keyframes ldio-ob9mojiyi9i {
        0% {
            transform: rotate(0)
        }

        100% {
            transform: rotate(360deg)
        }
    }

    .ldio-ob9mojiyi9i div {
        box-sizing: border-box !important
    }

    .ldio-ob9mojiyi9i>div {
        position: absolute;
        width: 136px;
        height: 136px;
        top: 32px;
        left: 32px;
        border-radius: 50%;
        border: 8px solid #000;
        border-color: #fe718d transparent #fe718d transparent;
        animation: ldio-ob9mojiyi9i 1s linear infinite;
    }

    .ldio-ob9mojiyi9i>div:nth-child(2) {
        border-color: transparent
    }

    .ldio-ob9mojiyi9i>div:nth-child(2) div {
        position: absolute;
        width: 100%;
        height: 100%;
        transform: rotate(45deg);
    }

    .ldio-ob9mojiyi9i>div:nth-child(2) div:before,
    .ldio-ob9mojiyi9i>div:nth-child(2) div:after {
        content: "";
        display: block;
        position: absolute;
        width: 8px;
        height: 8px;
        top: -8px;
        left: 56px;
        background: #fe718d;
        border-radius: 50%;
        box-shadow: 0 128px 0 0 #fe718d;
    }

    .ldio-ob9mojiyi9i>div:nth-child(2) div:after {
        left: -8px;
        top: 56px;
        box-shadow: 128px 0 0 0 #fe718d;
    }

    .loadingio-spinner-dual-ring-z27cluf8o2t {
        width: 200px;
        height: 200px;
        display: inline-block;
        overflow: hidden;
        background: rgba(NaN, NaN, NaN, 0);
    }

    .ldio-ob9mojiyi9i {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(1);
        backface-visibility: hidden;
        transform-origin: 0 0;
        /* see note above */
    }

    .ldio-ob9mojiyi9i div {
        box-sizing: content-box;
    }

    /* generated by https://loading.io/ */
</style>