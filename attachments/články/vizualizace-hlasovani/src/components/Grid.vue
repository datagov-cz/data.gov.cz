<template>
    <div class="container">
        <h2>Mřížka</h2>
        <svg :width="width" :height="height" id="grid-svg" style="border:1px dashed #bbb">
            <g v-for="(positionGroup, gindex) in positionGroups"
                :key="positionGroup.position"
                transform="translate(0,10)"
            >
                <text
                    x="0"
                    :y="(grid.height * (parseInt(rectangleSizes.both) + grid.gap) + parseInt(font.label) + parseInt(font.number)) * gindex + (parseInt(font.label) * .75) + gindex * gap"
                    fill="black"
                    :font-size="font.label"
                >
                {{ positionGroup.label }}
                <tspan v-if="positionGroup.winning">✓</tspan>
                </text>
                <text
                    x="0"
                    :y="(grid.height * (parseInt(rectangleSizes.both) + grid.gap) + parseInt(font.label) + parseInt(font.number)) * gindex + parseInt(font.number) + (parseInt(font.label) * 0.75) + gindex * gap"
                    fill="black"
                    :font-size="font.number"
                >
                 {{ positionGroup.votes.length }}
                </text>
                <rect v-for="(vote, index) in positionGroup.votes"
                    :key="index"
                    :x="Math.floor(index / grid.height) * (parseInt(rectangleSizes.both) + grid.gap)"
                    :y="(index % grid.height) * (parseInt(rectangleSizes.both) + grid.gap) + gindex * (grid.height * (parseInt(rectangleSizes.both) + grid.gap) + parseInt(font.label) + parseInt(font.number)) + parseInt(font.label) + parseInt(font.number) + gindex * gap"
                    :width="rectangleSizes.both"
                    :height="rectangleSizes.both"
                    :style="'fill:' + vote.group.color + ';opacity:' + (vote.active ? '1' : '0.75')"
                />
            </g>
            <text
                v-if="title.shown"
                :y="(grid.height * (parseInt(rectangleSizes.both) + grid.gap) + parseInt(font.label) + parseInt(font.number)) * positionGroups.length + positionGroups.length * gap + parseInt(title.size)"
                fill="black"
                :font-size="parseInt(title.size)"
            >
            {{ data.motion.name }}
            </text>
            <text
                v-if="date.shown"
                :y="(grid.height * (parseInt(rectangleSizes.both) + grid.gap) + parseInt(font.label) + parseInt(font.number)) * positionGroups.length + positionGroups.length * gap + parseInt(title.size) + parseInt(date.size) * 1.2"
                fill="black"
                :font-size="parseInt(date.size)"
            >
            {{ new Date(data.end_date).toLocaleDateString('cs') }}
            </text>
            <text
                :y="(grid.height * (parseInt(rectangleSizes.both) + grid.gap) +     parseInt(font.label) + parseInt(font.number)) * positionGroups.length + positionGroups.length * gap + parseInt(title.size) + parseInt(date.size) * 2.7"
                fill="black"
                :font-size="parseInt(legend.size)"
            >
                <tspan
                    v-for="(legend, index) in filteredLegend"
                    :key="index"
                    style="fill:#666"
                >
                    <tspan
                        :style="'fill:' + legend.color"
                        font-size="2em"
                    >
                    ■</tspan>{{ legend.abbreviation }}
                </tspan>
            </text>
        </svg>
        <canvas id="grid-canvas" style="display:none">
        </canvas>
        <br />
        <form>
            <fieldset>
                <div class="row">
                    <div class="col">
                        <label>počet řádek hlasu:</label>
                        <input
                            type="number"
                            name="rn"
                            min="1"
                            max="50"
                            v-model="grid.height"
                            class="form-control"
                        />
                    </div>
                    <div class="col">
                        <label>velikost hlasu:</label>
                        <input
                            type="number"
                            name="rheight"
                            min="15"
                            max="50"
                            v-model="rectangleSizes.both"
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
                    <div class="col">
                        <label>velikost písma varianty:</label>
                        <input
                            type="number"
                            name="flabel"
                            min="5"
                            max="50"
                            v-model="font.label"
                            class="form-control"
                        />
                    </div>
                    <div class="col">
                        <label>velikost písma čísla:</label>
                        <input
                            type="number"
                            name="fnumber"
                            min="5"
                            max="100"
                            v-model="font.number"
                            class="form-control"
                        />
                    </div>
                    <div class="col form-check pt-4">
                        <label class="form-check-label">
                            <input
                            type="checkbox"
                            name="checktitlelegend"
                            v-model="legend.show"
                                class="form-check-input"
                            />
                        Zobrazit legendu <small>(zatím nefunguje pro generované PNG)</small>
                        </label>
                    </div>
                    <div class="col">
                        <label>velikost písma legendy:</label>
                        <input
                            type="number"
                            name="legendsize"
                            min="5"
                            max="20"
                            v-model="legend.size"
                            class="form-control"
                        />
                    </div>
                </div>
            </fieldset>
        </form>

        <br />
        <a v-on:click="createImage" type="button" class="btn btn-success btn-lg m-4" role="button" id="grid-creator" href="">Vytvoř obrázek PNG</a>
    </div>
</template>
<script>
    import Canvg from 'canvg'
    // import data from '../data/data.json'

    export default {
        name: 'Grid',
        props: [
            'position-groups',
            'quorum',
            'data',
            'legend-groups'
        ],
        data: function () {
            return {
                rectangleSizes: {
                    width: 20,
                    height: 20,
                    both: 25
                },
                grid: {
                    height: 4,
                    gap: 2
                },
                width: 700,
                height: 700,
                winningMargin: 5,
                title: {
                    size: 20,
                    shown: true
                },
                date: {
                    size: 15,
                    shown: true
                },
                font: {
                    label: 20,
                    number: 50
                },
                gap: 20,
                legend: {
                    show: true,
                    size: 16
                }
            }
        },
        methods: {
            createImage: function () {
                const canvas = document.getElementById('grid-canvas')
                const ctx = canvas.getContext('2d')
                let svgString = document.getElementById("grid-svg").outerHTML
                let v = Canvg.fromString(ctx, svgString)
                v.start()

                let link = document.getElementById("grid-creator")
                link.href = canvas.toDataURL()
                link.download = "chart.png"
                // let img = canvas.toDataURL('image/png')
                // document.write('<img src="' + img + '" download="chart.png"/>')
                return false
            }
        },
        computed: {
            filteredLegend: function () {
                if (this.legend.show) {
                    return this.legendGroups
                }
                else {
                    return []
                }
            }
        },
        mounted () {

        }
    }
</script>
