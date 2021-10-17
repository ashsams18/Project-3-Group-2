# Project-3-Group-2

# Big Data Team
* Amjad
* Arshad
* Belinda 
* Sam

# Goal/ Objective
The team goal was to get a visualisation of: 
> “The relationship between Population and Temperature” 

# Data Extraction 

*	https://www.kaggle.com/imdevskp/world-population-19602018?select=population_total_long.csv 
* https://www.kaggle.com/berkeleyearth/climate-change-earth-surface-temperature-dataselect=GlobalLandTemperaturesByCountry.csv.
 
  Data was extracted from Kaggle.com, the team agreed to go with the following Data sets.
*	The population dataset ranging from 1960 – 2017 
*	Global land Temperatures by country 1743-2013, 


# Data Import, Cleaning and Merging

### Pandas, Jupyter Notebook.

 Downloading the data sets from Kaggle, we then imported these Data into pandas, which was read, we decided to transform datasets by using Jupyter notebook/pandas’ codes such as:
*	Drop
*	Group by
*	Index resets
*	Merge
*	Sorting
*	Pivot tables,
 
 To achieve the desired datasets, we narrowed down each dataset with the above Pandas functions and decided the final data frame to be in decade as follows:  
 Columns; 1963, 1973,1983,1993,2003, 2013, Index; countries. where this became the new data frame to be used going forwards.



# Database Creation and Loading
After achieving the desired data frame, we then created the database using 
SQLite connection, the engine was then connected to the database in pandas as seen below. 
> sqlite:///save_pandas.db



# Data Visualisation:

### Webpages and Apps Used;

 * FLASK -app.py as the application
 * HTML/CSS style as a webpage 
 * Java Script(jquery Library)
 * Plotly to create the charts
  
  Using flask app to hold our desired dataset, we have used HTML to create a webpage.
  
# Story Telling

Both the population and Temperature files was ploted using: 

*	Bar charts: This visualises the difference in increase in population(m) and temperature(c) of each country, between decades.
*	Line Graph: Showing the Variation between decades in Population vs Temperature for the chosen country.

# CONCLUSION

Although there are several factors that influence global warming, increase in temperature can be considered a prime factor. 
The direct relationship between the change in population to the temperature variation was plotted to demonstrate the increase or decrease in vlaues each decade. The purpose was not to show how the population or temperature increased or decreased between 1963 and 2013, but to show by how much they went up or down each decade. This was achieved by subtracting the later decade (population-temperature) from the respective values in the earlier decade.
Some interesting results were seen, e.g the population has increased every decade in Pakistan, however there was a temperature drop between 1993 and 2003.
The UK population has also increased significantly (approx. by 2m), between 2003 and 2013, however during the same period the temperature has shown to drop by over 1.5 degree celsius.
Population in the US decreased from 2003 to 2013, however there is an increase in temperature during the same period.
Some factors that can contribute to reduction of temperature can include introduction of good climate measures, reduction of pollution, increase in recyclying etc. On the other hand increase in idustrialisation etc can be considered reasons for increase in the temperature. Our data shows that population itself does not have a direct impact on this phenomenon.

