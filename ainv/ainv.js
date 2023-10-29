const window_frame = document.getElementsByClassName("window-frame")[0];
const banner = document.getElementsByClassName("banner")[0];
const flower_wrapper = document.getElementsByClassName("flower-wrapper");
const left_petal = document.getElementsByClassName("petal-left");
const center_petal = document.getElementsByClassName("petal-center");
const right_petal = document.getElementsByClassName("petal-right");
const leaf1 = document.getElementsByClassName("leaf1");
const leaf2 = document.getElementsByClassName("leaf2");

const flower_rise_dur = 2000;
const flower_grow_dur = 1000;
const flower_bloom_dur = 1000;
const banner_slide_dur = 5000

const petal_grow = new Animation()

function toggle_sun(ele) {
    if (ele.classList.contains("active") == false) {
        ele.classList.add("active");
        window_frame.classList.add("active");
        trigger_flower_rise();
    }

}

function trigger_flower_rise() {
    for (var i = 0; i < flower_wrapper.length; i++) {
        flower_wrapper[i].animate([
            { time: 0, top: '100%' },
            { time: 1, top: '0' },
        ], {
            duration: flower_rise_dur,
            easing: 'linear',
            fill: 'forwards',
        });
    }

    trigger_flower_grow_bloom()
}

function trigger_flower_grow_bloom() {

    for (var i = 0; i < flower_wrapper.length; i++) {
        // grow
        center_petal[i].animate([
            // { time: 0, width: '40px', height: '40px' },
            // { time: 1, width: '100px', height: '100px' },
            { time: 0, scale: .5 },
            { time: 1, scale: 1 },
        ], {
            duration: flower_grow_dur,
            easing: 'linear',
            fill: 'forwards',
            delay: flower_rise_dur,
        });

        // bloom
        center_petal[i].animate([
            { time: 0, borderRadius: '100% 0% 100% 100% / 0% 0% 100% 100%' },
            { time: 1, translate: '0 -10px', borderRadius: '100% 0% 90% 45% / 90% 0% 100% 45%', rotate: '-45deg' },
        ], {
            duration: flower_bloom_dur,
            easing: 'linear',
            fill: 'forwards',
            delay: flower_rise_dur + flower_grow_dur,
        });


        // grow
        left_petal[i].animate([
            { time: 0, scale: .5 },
            { time: 1, scale: 1 },
        ], {
            duration: flower_grow_dur,
            easing: 'linear',
            fill: 'forwards',
            delay: flower_rise_dur,
        });

        // bloom
        left_petal[i].animate([
            { time: 0, borderRadius: '100% 0% 100% 100% / 0% 0% 100% 100%' },
            { time: 1, translate: '-14px 0', borderRadius: '0% 100% 40% 60% / 0% 60% 40% 45%' },
        ], {
            duration: flower_bloom_dur,
            easing: 'linear',
            fill: 'forwards',
            delay: flower_rise_dur + flower_grow_dur,
        });

        // grow
        right_petal[i].animate([
            { time: 0, scale: .5 },
            { time: 1, scale: 1 },
        ], {
            duration: flower_grow_dur,
            easing: 'linear',
            fill: 'forwards',
            delay: flower_rise_dur,
        });

        // bloom
        right_petal[i].animate([
            { time: 0, borderRadius: '100% 0% 100% 100% / 0% 0% 100% 100%' },
            { time: 1, rotateY: '180deg', translate: '14px 0', borderRadius: '0% 100% 40% 60% / 0% 60% 40% 45%' },
        ], {
            duration: flower_bloom_dur,
            easing: 'linear',
            fill: 'forwards',
            delay: flower_rise_dur + flower_grow_dur,
        });

        // bloom
        leaf1[i].animate([
            { time: 0, scale: '0' },
            { time: 1, translate: '-50% 0', scale: '1' },
        ], {
            duration: flower_bloom_dur,
            easing: 'linear',
            fill: 'forwards',
            delay: flower_rise_dur + flower_grow_dur,
        });

        // bloom
        leaf2[i].animate([
            { time: 0, scale: '0' },
            { time: 1, translate: '50% 0', scale: '1' },
        ], {
            duration: flower_bloom_dur,
            easing: 'linear',
            fill: 'forwards',
            delay: flower_rise_dur + flower_grow_dur,
        });
    }
    banner.animate([
        { time: 0, right: '100%' },
        { time: 1, right: '20%' },
    ], {
        duration: banner_slide_dur,
        easing: 'linear',
        fill: 'forwards',
        delay: flower_rise_dur + flower_grow_dur + flower_bloom_dur + 1000
    })

}