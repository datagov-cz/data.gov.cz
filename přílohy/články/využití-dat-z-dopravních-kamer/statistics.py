"""Overall statistics for single cameras."""

import numpy as np
import pandas as pd

# read file with daily statistics
daily = pd.read_csv('daily_passed.csv')

# year column
daily['year'] = daily['date'].str.slice(0, 4)

# median of speed for every year during working days (Mon-Fri), main direction only
pd.pivot_table(daily[(daily['day'].between(0, 4)) & (daily['direction'] == 1)], values='speed', index='id', columns='year', aggfunc=lambda x: np.percentile(x, 50)).reset_index().to_csv("working_day_median.csv")

# median of speed for every year during weekends, main direction only
pd.pivot_table(daily[(daily['day'].between(5, 6)) & (daily['direction'] == 1)], values='speed', index='id', columns='year', aggfunc=lambda x: np.percentile(x, 50)).reset_index().to_csv("weekend_day_median.csv")

# rate of speed over 50 km/h, Mon-Fri, main direction only
pd.pivot_table(daily[(daily['day'].between(0, 4)) & (daily['direction'] == 1)].dropna(), values='min50', index='id', aggfunc=lambda x: np.percentile(x, 50)).reset_index().to_csv("working_day_over50.csv")

# rate of speed over 70 km/h, Mon-Fri, main direction only
pd.pivot_table(daily[(daily['day'].between(0, 4)) & (daily['direction'] == 1)].dropna(), values='min70', index='id', aggfunc=lambda x: np.percentile(x, 50)).reset_index().to_csv("working_day_over70.csv")