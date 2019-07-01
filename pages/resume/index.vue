<template>
  <v-layout row justify-center align-center wrap class="mt-4 pt-2">
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
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2 react--text">Education</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">MAY 2019 -</div>
                <div class="caption font-weight-bold green--text">PRESENT</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong class="silver-taxt">Attend private English lessons</strong>
                <div class="caption mb-2 silver-taxt">Learning</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">SEPTEMBER 2017 -</div>
                <div class="caption font-weight-bold green--text">APRIL 2019</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong class="silver-taxt">English courses at Flash</strong>
                <div class="caption mb-2 silver-taxt">English</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">MAY 2017 -</div>
                <div class="caption font-weight-bold green--text">JULY 2018</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong class="silver-taxt">Vinnytsia ITA – Academy</strong>
                <div class="caption mb-2 silver-taxt">Programming || English</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md4 lg6 xl6 class="mt-4 pt-2">
      <h2 class="mb-4 pl-4 react--text">Experience</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">JANUARY 2019 -</div>
                <div class="caption font-weight-bold green--text">PRESENT</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong class="silver-taxt">Web Port Technology</strong>
                <div class="caption mb-2 silver-taxt">Front-End Developer</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">SEPTEMBER 2018 -</div>
                <div class="caption font-weight-bold green--text">NOVEMBER 2018</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong class="silver-taxt">EPAM TRAINING PORTAL /FrontEnd/JS Development</strong>
                <div class="caption mb-2 silver-taxt">Student</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">MAY 2017 -</div>
                <div class="caption font-weight-bold green--text">JULY 2018</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong class="silver-taxt">Vinnytsia ITA – Academy</strong>
                <div class="caption mb-2 silver-taxt">Student</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span class="react--text">Tools</span>

          <span class="green--text"></span>
        </h2>
        <br>
        <strong class="silver-taxt">Photoshop</strong>
        <v-progress-linear v-model="photoshop" :buffer-value="bufferValue" color="green"
                           height="16"></v-progress-linear>
        <strong class="silver-taxt">Php Storm</strong>
        <v-progress-linear v-model="storm" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong class="silver-taxt">Git</strong>
        <v-progress-linear v-model="git" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong class="silver-taxt">Jira</strong>
        <v-progress-linear v-model="jira" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span class="react--text">Coding</span>
          <span class="green--text">Skills</span>
        </h2>
        <br>
        <strong class="silver-taxt">JavaScript</strong>
        <v-progress-linear v-model="js" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong class="silver-taxt">VUE/VUEX/NUXT</strong>
        <v-progress-linear v-model="vue" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong class="silver-taxt">REACT/REDUX/NEXT</strong>
        <v-progress-linear v-model="react" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong class="silver-taxt">HTML/CSS</strong>
        <v-progress-linear v-model="html" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong class="silver-taxt">NodeJs</strong>
        <v-progress-linear v-model="node" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
      </v-flex>
      <div class="mt-4 pt-4">
        <v-btn
          href="https://drive.google.com/open?id=14DMsXECDpAUhRoVajAnAFib3OI1iCtoP"
          target="_blank"
          dark
          large
          class="btn-ka"
        >
          Download Resume
          <v-icon right dark>fas fa-file-download</v-icon>
        </v-btn>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        iterator: 0,
        value: 0,
        photoshop: 0,
        jira: 0,
        git: 0,
        storm: 0,
        js: 0,
        vue: 0,
        react: 0,
        html: 0,
        node: 0,
        bufferValue: 100,
        interval: 0
      };
    },
    mounted() {
      this.startBuffer();
    },

    beforeDestroy() {
      clearInterval(this.interval);
    },

    methods: {
      startBuffer() {
        this.interval = setInterval(() => {
          if (this.iterator < 10) {
            this.iterator = this.iterator + 1;
            this.photoshop = this.photoshop + 4.5;
            this.jira = this.jira + 4.8;
            this.git = this.git + 6.2;
            this.storm = this.storm + 5.3;
            this.js = this.js + 8.9;
            this.vue = this.vue + 7.8;
            this.react = this.react + 4.8;
            this.html = this.html + 6;
            this.node = this.node + 3;

          } else {
            clearInterval(this.interval);
          }
        }, 80);
      }
    }
  };
</script>
<style>

  .particles {
    position: absolute;
    top: 100;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .btn-ka {
    background: -moz-linear-gradient(left, #08c449 0%, #00ccff 100%); /* FF3.6-15 */

    background: -webkit-linear-gradient(left, #0cc43c 0%, #00ccff 100%); /* Chrome10-25,Safari5.1-6 */

    background: linear-gradient(to right, #0ac43d 0%, #00ccff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0097ff', endColorstr='#00b8ff', GradientType=1);

    z-index:2;
  }

  .btn-ka:hover {

    -webkit-box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.35);

    -moz-box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.35);

    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.35);

    -webkit-transform: translateY(-1px);

    -moz-transform: translateY(-1px);

    -ms-transform: translateY(-1px);

    -o-transform: translateY(-1px);

    transform: translateY(-1px);

  }

  .btn-ka:after {

    background: #fff;

    content: "";

    height: 155px;

    left: -75px;

    opacity: .2;

    position: absolute;

    top: -50px;

    -webkit-transform: rotate(35deg);

    transform: rotate(35deg);

    width: 50px;

    z-index: 20;

    -webkit-animation: glow linear infinite;

    animation: glow linear infinite;

    animation-duration: 6s;

    animation-delay: 1s;

    -webkit-animation-delay: 1s;

  }

  @-webkit-keyframes glow {
    90% {
      left: -75px
    }
    100% {
      left: 120%
    }
  }

  @keyframes glow {
    90% {
      left: -75px
    }
    100% {
      left: 120%
    }
  }

  .react--text {
    color: #00ccff;
  }

  .silver-taxt {
    color: #43000f;
  }
</style>

