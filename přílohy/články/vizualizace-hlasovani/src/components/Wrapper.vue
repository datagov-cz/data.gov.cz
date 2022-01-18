<template>
    <div class="container">
        <hr />
        <h4>Zkuste si příklady hlasování:</h4>
        <div>
            <button v-on:click="changeData('plasy')" class="btn btn-info m-2">Plasy</button>
            <button v-on:click="changeData('praha6')" class="btn btn-info m-2">Praha 6</button>
            <button v-on:click="changeData('brno')" class="btn btn-info m-2">Brno-střed</button>
            <button v-on:click="changeData('brno2')" class="btn btn-info m-2">Brno</button>
            <button v-on:click="changeData('psp2')" class="btn btn-info m-2">Poslanecká sněmovna</button>
            <button v-on:click="changeData('psp')" class="btn btn-info m-2">Poslanecká sněmovna (120)</button>
        </div>
        <p>
            Zkuste si pohrát s nastavením grafů.
        </p>
        <p>
            Dole na stránce si můžete zadat i vlastní hlasování.
        </p>
        <hr />
        <Lines
            :position-groups="positionGroups"
            :quorum="quorum"
            :data="data"
        />
        <hr />
        <Grid
            :position-groups="positionGroups"
            :quorum="quorum"
            :data="data"
            :legend-groups="legendGroups"
        />
        <hr />
        <div class="alert alert-danger" v-if="error">
            <strong>Oh snap!</strong> {{ error_message }}
        </div>
        <h4>Nebo zadejte svůj JSON:</h4>
        <textarea rows="50" cols="15" v-model="datastring" class="form-control" >
        </textarea>
    </div>
</template>
<script>
import data from '../data/data.json'
import Grid from './Grid.vue'
import Lines from './Lines.vue'


export default {
    name: 'Wrapper',
    data: function () {
        return {
            data,
            error: false,
            error_message: "",
        }
    },
    methods: {
        changeData: function (name) {
            this.data = require("../data/" + name + '.json')
            return false
        },
        setPositionGroups: function (requirement) {
            let positionGroups = [
                {
                    position: 'for',
                    label: 'Pro',
                    votes: [],
                    winning: false,
                    groups: {}
                },
                {
                    position: 'against',
                    label: 'Proti',
                    votes: [],
                    winning: false,
                    groups: {}
                }
            ]
            if (requirement == "Nadpoloviční většina všech členů" || requirement == 'Quorum 120') {
                return positionGroups
            }
            if (requirement == "Nadpoloviční většina přítomných") {
                positionGroups.push({
                    position: 'neutral',
                    label: 'Nepřítomní',
                    votes: [],
                    winning: false,
                    groups: {}
                })
                return positionGroups
            }
        },
        addWinning: function (positionGroups) {
            if (this.data.requirement == "Nadpoloviční většina všech členů" || this.data.requirement == "Nadpoloviční většina přítomných") {
                if (positionGroups[0].votes.length > positionGroups[1].votes.length) {
                    positionGroups[0].winning = true
                    positionGroups[1].winning = false
                }
                else {
                    positionGroups[0].winning = false
                    positionGroups[1].winning = true
                }
                return positionGroups
            }
            if (this.data.requirement == "Quorum 120") {
                if (positionGroups[0].votes.length >= 120){
                    positionGroups[0].winning = true
                } else {
                    positionGroups[1].winning = true
                }
                return positionGroups
            }
            return false
        },
        sortVotes: function (positionGroups) {
            positionGroups.forEach(function (positionGroup) {
                positionGroup.votes.sort((a, b) => b.group_count - a.group_count || a.group.name.localeCompare(b.group.name) || b.active - a.active || a.voter.name.localeCompare(b.voter.name))
            })
            return positionGroups
        },
        addVotes: function (positionGroups) {
            let $this = this
            this.data.votes.forEach(function (vote) {
                let positionObject = $this.optionToPosition(vote.option, $this.data.requirement)
                vote.active = positionObject.active
                // console.log(positionGroups)
                positionGroups.forEach(function (positionGroup) {
                    if (positionObject.position == positionGroup.position) {
                        positionGroup.votes.push(vote)
                        if (vote.group.name in positionGroup.groups) {
                            positionGroup.groups[vote.group.name]++
                        }
                        else {
                            positionGroup.groups[vote.group.name] = 1
                        }
                    }
                })
            })
            positionGroups.forEach(function (positionGroup) {
                positionGroup.votes.forEach(function (vote) {
                    vote.group_count = positionGroup.groups[vote.group.name]
                })
            })
            return positionGroups
        },
        optionToPosition: function (option, requirement) {
            // console.log('here', option, requirement)
            if (requirement == "Nadpoloviční většina všech členů" || requirement == "Quorum 120") {
                switch(option) {
                    case 'yes':
                        return {
                            'position': 'for',
                            'active': true
                        }
                    case 'no':
                    case 'abstain':
                        return {
                            'position': 'against',
                            'active': true
                        }
                    case 'absent':
                    case 'not voting':
                        return {
                            'position': 'against',
                            'active': false
                        }
                }
            }
            if (requirement == "Nadpoloviční většina přítomných") {
                switch(option) {
                    case 'yes':
                        return {
                            'position': 'for',
                            'active': true
                        }
                    case 'no':
                    case 'abstain':
                        return {
                            'position': 'against',
                            'active': true
                        }
                    case 'not voting':
                    case 'absent':
                        return {
                            'position': 'neutral',
                            'active': false
                        }
                }
            }
            return false
        },
        calculateQuorum: function () {
            if (this.data.requirement == "Nadpoloviční většina všech členů") {
                return Math.ceil(this.data.votes.length / 2 + 0.5)
            }
            if (this.data.requirement == "Nadpoloviční většina všech přítomných") {
                let s = this.positionGroups[0].length + this.positionGroups[1].length
                return Math.ceil(s / 2 + 0.5)
            }
            if (this.data.requirement == "Quorum 120") {
                return 120
            }
            return false
        },
    },
    computed: {
        positionGroups: function () {
            let positionGroups = this.setPositionGroups(this.data.requirement)
            positionGroups = this.addVotes(positionGroups)
            positionGroups = this.sortVotes(positionGroups)
            positionGroups = this.addWinning(positionGroups)
            console.log(positionGroups)
            return positionGroups
        },
        quorum: function () {
            let quorum = this.calculateQuorum()
            return quorum
        },
        legendGroups: function () {
            let legendGroups = []
            let legendGroupsObject = {}
            this.data.votes.forEach(function(vote){
                if (vote.group.name in legendGroupsObject) {
                    legendGroupsObject[vote.group.name].count++
                }
                else {
                    legendGroupsObject[vote.group.name] = {
                        count: 1,
                        name: vote.group.name,
                        abbreviation: vote.group.abbreviation,
                        color: vote.group.color
                    }
                }
            })
            for (let k in legendGroupsObject) {
                legendGroups.push(legendGroupsObject[k])
            }
            legendGroups.sort((a, b) => b.count - a.count)
            return legendGroups
        },
        datastring: {
            get: function () {
                return JSON.stringify(this.data, null, 4)
            },
            set: function (newValue) {
                try {
                    this.data = JSON.parse(newValue)
                    this.error = false
                }
                catch(err) {
                    this.error = true
                    this.error_message = err
                }
            }
        }
    },
    mounted () {

    },
    components: {
        Grid,
        Lines
    }
}
</script>
