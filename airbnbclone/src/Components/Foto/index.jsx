import React from 'react'

import useStyles from './styles'
function Foto() {
  const classes = useStyles()
  return (
    <body>
      <div class="_1gvk5l7"
      >
        <div className={classes.wrapper}>
          <div class="foto"
            // style={{ height: "100%", width: "100 %", backgroundSize: "cover" }}
            role="img" aria-busy="true" aria-label="Image is loading">
            <picture>
              <source
                srcset="
                                                                                      https://a0.muscache.com/im/pictures/3953696f-0c75-46ad-a6c4-e0190c1ecc73.jpg?im_w=2560 1x,
                                                                                      https://a0.muscache.com/im/pictures/3953696f-0c75-46ad-a6c4-e0190c1ecc73.jpg?im_w=2560 2x
                                                                                  "
                media="(min-width: 2080px)" />
              <source
                srcset="
                                                                                      https://a0.muscache.com/im/pictures/3953696f-0c75-46ad-a6c4-e0190c1ecc73.jpg?im_w=1440 1x,
                                                                                      https://a0.muscache.com/im/pictures/3953696f-0c75-46ad-a6c4-e0190c1ecc73.jpg?im_w=2560 2x
                                                                                  "
                media="(min-width: 1440px)" />
              <source
                srcset="
                                                                                      https://a0.muscache.com/im/pictures/3953696f-0c75-46ad-a6c4-e0190c1ecc73.jpg?im_w=960  1x,
                                                                                      https://a0.muscache.com/im/pictures/3953696f-0c75-46ad-a6c4-e0190c1ecc73.jpg?im_w=1920 2x
                                                                                  "
                media="(min-width: 950px)" />
              <source
                srcset="
                                                                                      https://a0.muscache.com/im/pictures/3953696f-0c75-46ad-a6c4-e0190c1ecc73.jpg?im_w=720  1x,
                                                                                      https://a0.muscache.com/im/pictures/3953696f-0c75-46ad-a6c4-e0190c1ecc73.jpg?im_w=1440 2x
                                                                                  "
                media="(min-width: 744px)" />
              <source
                srcset="
                                                                                      https://a0.muscache.com/im/pictures/9cd746cc-e184-4de5-9479-0b18e3a2b89e.jpg?im_w=320 1x,
                                                                                      https://a0.muscache.com/im/pictures/9cd746cc-e184-4de5-9479-0b18e3a2b89e.jpg?im_w=720 2x
                                                                                  "
                media="(min-width: 375px)" />
              <source
                srcset="
                                                                                      https://a0.muscache.com/im/pictures/9cd746cc-e184-4de5-9479-0b18e3a2b89e.jpg?im_w=320 1x,
                                                                                      https://a0.muscache.com/im/pictures/9cd746cc-e184-4de5-9479-0b18e3a2b89e.jpg?im_w=720 2x
                                                                                  " />
              <img class="_dae4t6"
                // style={{
                //   position: "absolute",
                //   left: 0,
                //   right: 0,
                //   objecFit: "cover",
                //   objectPosition: "center center",
                //   verticalAlign: "bottom",
                // }}


                src="https://a0.muscache.com/im/pictures/9cd746cc-e184-4de5-9479-0b18e3a2b89e.jpg?im_q=highq&amp;im_w=720" alt='landscape' />
            </picture>
          </div>
        </div>
      </div >
    </body>
  )
}

export default Foto
