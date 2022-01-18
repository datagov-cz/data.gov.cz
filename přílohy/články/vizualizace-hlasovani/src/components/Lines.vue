<template>
    <div class="container">
        <h2>Malé linie</h2>
        <svg :width="width" :height="height" id="lines-svg" style="border:1px dashed #bbb">
            <g v-for="(positionGroup, gindex) in positionGroups"
                :key="positionGroup.position"
                transform="translate(0,10)"
            >
                <rect v-for="(vote, index) in positionGroup.votes"
                    :key="index"
                    :x="index * rectangleSizes.width"
                    :y="gindex * rectangleSizes.height * 1.25"
                    :width="rectangleSizes.width"
                    :height="rectangleSizes.height"
                    :style="'fill:' + vote.group.color + ';opacity:' + (vote.active ? '1' : '0.9')"
                />
                <text
                    :x="positionGroup.votes.length * rectangleSizes.width + 10"
                    :y="gindex * rectangleSizes.height * 1.25 + rectangleSizes.height * 0.8"
                    fill="black"
                    font-size="rectangleSizes.height"
                    :font-weight="positionGroup.winning ? '600': 'normal'"
                >
                {{ positionGroup.votes.length }} {{ positionGroup.label }}
                </text>
                <line
                    v-if="positionGroup.winning"
                    :x1="(quorum - 1) * rectangleSizes.width"
                    :y1="gindex * parseInt(rectangleSizes.height) * 1.25 - winningMargin"
                    :x2="(quorum - 1) * rectangleSizes.width"
                    :y2="gindex * parseInt(rectangleSizes.height) * 1.25 + parseInt(rectangleSizes.height) + winningMargin"
                    style="stroke:gray;stroke-width:2"
                />
            </g>
            <text
                v-if="title.shown"
                :y="positionGroups.length * rectangleSizes.height * 1.25 + parseInt(rectangleSizes.height) + parseInt(title.size)"
                fill="black"
                :font-size="parseInt(title.size)"
            >
            {{ data.motion.name }}
            </text>
            <text
                v-if="date.shown"
                :y="positionGroups.length * rectangleSizes.height * 1.25 + parseInt(rectangleSizes.height) + parseInt(title.size) + parseInt(date.size) * 1.2"
                fill="black"
                :font-size="parseInt(date.size)"
            >
            {{ new Date(data.end_date).toLocaleDateString('cs') }}
            </text>
        </svg>
        <canvas id="lines-canvas" style="display:none">
        </canvas>
        <br />
        <form>
            <fieldset>
                <div class="row">
                    <div class="col">
                        <label for="rwidth">šířka hlasu:</label>
                        <input
                            type="number"
                            name="rwidth"
                            id="rwidth"
                            min="2"
                            max="25"
                            v-model="rectangleSizes.width"
                            class="form-control"
                        />
                    </div>
                    <div class="col">
                        <label>výška hlasu:</label>
                        <input
                            type="number"
                            name="rheight"
                            min="15"
                            max="50"
                            v-model="rectangleSizes.height"
                            class="form-control"
                        />
                    </div>
                    <div class="col">
                        <label>šířka grafu:</label>
                        <input
                            type="number"
                            name="width"
                            min="100"
                            max="10000"
                            v-model="width"
                            class="form-control"
                        />
                    </div>
                    <div class="col">
                        <label>výška grafu:</label>
                        <input
                            type="number"
                            name="height"
                            min="50"
                            max="10000"
                            v-model="height"
                            class="form-control"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col form-check pt-4">
                        <label class="form-check-label">
                            <input
                                type="checkbox"
                                name="checktitle"
                                v-model="title.shown"
                                class="form-check-input"
                            />
                        Zobrazit název hlasování
                        </label>
                    </div>
                    <div class="col">
                        <label>velikost písma názvu hlasování:</label>
                        <input
                            type="number"
                            name="theight"
                            min="5"
                            max="50"
                            v-model="title.size"
                            class="form-control"
                        />
                    </div>
                    <div class="col form-check pt-4">
                        <label class="form-check-label">
                            <input
                            type="checkbox"
                            name="checktitle"
                            v-model="date.shown"
                                class="form-check-input"
                            />
                        Zobrazit datum hlasování
                        </label>
                    </div>
                    <div class="col">
                        <label>velikost písma data hlasování:</label>
                        <input
                            type="number"
                            name="theight"
                            min="5"
                            max="50"
                            v-model="date.size"
                            class="form-control"
                        />
                    </div>
                </div>
            </fieldset>
        </form>

        <br />
        <a v-on:click="createImage" type="button" class="btn btn-success btn-lg m-4" role="button" id="lines-creator" href="">Vytvoř obrázek PNG</a>
    </div>
</template>
<script>
    import Canvg from 'canvg'
    // import data from '../data/data.json'

    export default {
        name: 'Lines',
        props: [
            'position-groups',
            'quorum',
            'data'
        ],
        data: function () {
            return {
                rectangleSizes: {
                    width: 4,
                    height: 20
                },
                width: 500,
                height: 150,
                winningMargin: 5,
                title: {
                    size: 14,
                    shown: true
                },
                date: {
                    size: 14,
                    shown: true
                },
            }
        },
        methods: {
            createImage: function () {
                const canvas = document.getElementById('lines-canvas')
                const ctx = canvas.getContext('2d')
                let svgString = document.getElementById("lines-svg").outerHTML
                let v = Canvg.fromString(ctx, svgString)
                v.start()

                let link = document.getElementById("lines-creator")
                link.href = canvas.toDataURL()
                link.download = "chart.png"
                // let img = canvas.toDataURL('image/png')
                // document.write('<img src="' + img + '" download="chart.png"/>')
                return false
            }
        },
        computed: {
        },
        mounted () {

        }
    }
</script>
