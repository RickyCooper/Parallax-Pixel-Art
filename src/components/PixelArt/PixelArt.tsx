import React from 'react'
import styles from './pixelart.module.scss'
import { ParallaxBanner } from 'react-scroll-parallax';
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';

const PixelArt = () => {

    const titleLayer: BannerLayer = {
        children: (
          <div className={styles.box}>
            <h1 className={styles.title}>
                Hello World!
            </h1>
          </div>
        ),
    };

    const gradiantLayer: BannerLayer = {
        image: './assets/mountains_sunset/01_mountains1sunset.png',
        speed: -80,
        expanded: false
    }
    const starLayer: BannerLayer = {
        image: './assets/mountains_sunset/02_mountains1sunset.png',
        speed: -80,
        expanded: false
    }
    const sunLayer: BannerLayer = {
        image: './assets/mountains_sunset/03_mountains1sunset.png',
        speed: -80,
        translateY: [0, 5],
        expanded: false
    }
    const cloudLayer1: BannerLayer = {
        image: './assets/mountains_sunset/04_mountains1sunset.png',
        speed: -80,
        translateX: [0, 10],
        expanded: false
    }
    const cloudLayer2: BannerLayer = {
        image: './assets/mountains_sunset/05_mountains1sunset.png',
        speed: -80,
        translateX: [0, 10],
        expanded: false
    }
    const cloudLayer3: BannerLayer = {
        image: './assets/mountains_sunset/06_mountains1sunset.png',
        speed: -80,
        translateX: [0, -10],
        expanded: false
    }
    const cloudLayer4: BannerLayer = {
        image: './assets/mountains_sunset/07_mountains1sunset.png',
        speed: -80,
        translateX: [0, -10],
        expanded: false
    }
    const cloudLayer5: BannerLayer = {
        image: './assets/mountains_sunset/08_mountains1sunset.png',
        speed: -80,
        opacity: [1, 0.3],
        translateX: [0, -10],
        expanded: false
    }
    const cloudLayer6: BannerLayer = {
        image: './assets/mountains_sunset/09_mountains1sunset.png',
        speed: -80,
        translateX: [0, 15],
        expanded: false
    }
    const mountainLayer1: BannerLayer = {
        image: './assets/mountains_sunset/10_mountains1sunset.png',
        speed: -75,
        expanded: false
    }
    const mountainLayer2: BannerLayer = {
        image: './assets/mountains_sunset/11_mountains1sunset.png',
        speed: -75,
        expanded: false
    }
    const mountainLayer3: BannerLayer = {
        image: './assets/mountains_sunset/12_mountains1sunset.png',
        speed: -65,
        expanded: false
    }
    const mountainLayer4: BannerLayer = {
        image: './assets/mountains_sunset/13_mountains1sunset.png',
        speed: -55,
        expanded: false
    }
    const mountainLayer5: BannerLayer = {
        image: './assets/mountains_sunset/14_mountains1sunset.png',
        speed: -45,
        expanded: false
    }
    const mountainLayer6: BannerLayer = {
        image: './assets/mountains_sunset/15_mountains1sunset.png',
        speed: -15,
        expanded: false
    }
    const mountainLayer7: BannerLayer = {
        image: './assets/mountains_sunset/16_mountains1sunset.png',
        speed: 5,
        expanded: false
    }
    const mountainLayer8: BannerLayer = {
        image: './assets/mountains_sunset/16_mountains1sunset.png',
        speed: -5,
        expanded: false
    }

    return (
        <ParallaxBanner
            layers={[
                gradiantLayer,
                starLayer,
                sunLayer,
                cloudLayer1,
                cloudLayer2,
                cloudLayer3,
                cloudLayer4,
                titleLayer, 
                cloudLayer5,
                cloudLayer6,
                mountainLayer1,
                mountainLayer2, 
                mountainLayer3, 
                mountainLayer4, 
                mountainLayer5,
                mountainLayer6,
                mountainLayer7,
                mountainLayer8
            ]}
            className={styles.frame}
        />
    )
}

export default PixelArt