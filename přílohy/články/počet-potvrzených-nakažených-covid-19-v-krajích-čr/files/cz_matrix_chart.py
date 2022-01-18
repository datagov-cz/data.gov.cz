"""Matrix chart."""

import datetime
import math
import pandas
import plotly.subplots as subplots
import plotly.graph_objects as go

path = "NÁŠ_PRACOVNÍ_ADRESÁŘ"

# read data
infected = pandas.read_csv(path + "cz_regions_infected.csv")
basic_info = pandas.read_csv(path + 'cz_regions.csv')
data = pandas.merge(infected, basic_info, on='code')
names = sorted(basic_info["name"].tolist())
series = []
for name in names:
    series.append(data[(data['name'] == name)])
dates = []
for row in series[0]['date']:
    date = datetime.datetime.strptime(row, "%Y-%m-%d")
    dates.append(date)

# y max value for chart
data['value_per_capita'] = data['value'] / data['population']
y_max = math.ceil(max(data['value_per_capita']) * 10000) * 10

# colors from https://bootswatch.com/united/
colors = {
    'primary': '#ce4414',
    'secondary': '#9c948a',
    'success': '#2f973e',
    'info': '#138496',
    'warning': '#ecaa1b',
    'danger': '#c7291e',
    'dark': '#772953',
    'light': '#e9ecef',
    'text-light': 'rgba(0, 0, 0, 0.9)',
    'text-dark': '#fff',
    'text-muted': '#868e96',
    'text-primary': '#E95420',
    'text-secondary': '#AEA79F',
    'text-warning': '#EFB73E',
    'text-danger': '#DF382C',
    'text-success': '#38B44A',
    'text-info': '#17a2b8'
}

dims = [3, 5]
fig = subplots.make_subplots(dims[0], dims[1], shared_yaxes=True, subplot_titles=names)

i = 1
j = 1
for s in series:
    # gray lines of other regions
    for ss in series:
        traceg = go.Scatter(
            x=dates,
            y=(ss['value'] / ss['population'] * 100000).tolist(),
            name=ss['name'].tolist()[0],
            mode='lines',
            line={
                'color': colors['text-secondary'],
                'width': 2
            }
        )
        fig.add_trace(traceg, row=i, col=j)

    # main colourful line of the region
    trace = go.Scatter(
        x=dates,
        y=(s['value'] / s['population'] * 100000).tolist(),
        name=s['name'].tolist()[0],
        mode='lines',
        line={
            'color': colors['dark'],
            'width': 8
        }
    )
    fig.add_trace(trace, row=i, col=j)

    # y axis
    fig.update_yaxes(
        range=[0, y_max],
        color=colors['text-secondary'],
        tickfont={'size': 30},
        nticks=5,
        gridwidth=1,
        gridcolor=colors['light'],
        row=i,
        col=j
    )

    # x axis
    fig.update_xaxes(
        tickformat="%-d.%-m.",
        color=colors['text-secondary'],
        tickfont={'size': 30},
        nticks=5,
        gridwidth=2,
        gridcolor=colors['light'],
    )
    j += 1
    if j == (dims[1] + 1):
        j = 1
        i += 1

# layout settings, title
fig.update_layout(
    height=1500,
    width=2000,
    showlegend=False,
    margin={
        't': 200
    },
    title={
        'font': {
            'size': 45,
            'color': colors['dark']
        },
        'text': "<b>Covid 19 - Potvrzené případy na 100 000 obyvatel (kumulativní) - Kraje ČR - " + datetime.date.today().strftime("%-d.%-m.%Y") + "</b>"
    },
    font={"family": "Ubuntu", "color": colors['primary']},
    template="plotly_white"
)
fig.update_annotations(
    font={'size': 40}
)

# credit
credit = go.layout.Annotation(
    text='Aktualizováno: ' + datetime.date.today().strftime("%-d.%-m.%Y") + ' ' + datetime.datetime.now().strftime("%H:%m") + '<br>Autor: Michal Škop<br>@skopmichal<br>Zdroj dat: MZČR, KHS ČR<br>CC-BY',
    align='left',
    font={'size': 20, 'color': colors['text-secondary']},
    showarrow=False,
    xref='paper',
    yref='paper',
    x=1,
    y=0
)
fig.add_annotation(credit)

# save chart
fig.write_image(path + "cz_regions.png")
fig.write_image(path + "cz_regions.svg")

# Different size optimized for Twitter
fig.update_layout(
    height=1000,
    width=2000
)
fig.write_image(path + "cz_regions_twitter.png")
