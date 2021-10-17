# Project-3-Group-2

# Big Data Team
* Amjad
* Arshad
* Belinda 
* Sam

# Goal/ Objective
The team goal was to get a visualisation of: 
> “The relationship between  population and Temperature” 

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
 
 To achieve the desired datasets, we narrowed down each dataset with the above pandas’ functions and decided the final data frame to be in decade as follows:  
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
  
  Using flask app to hold our desired dataset, we have used HTML to create a webpage called > Global Warming.
  


# Story Telling

Both the population and Temperature files was ploted uising a; 

*	Two Bar chart:   This visualises the increase in population and Temperature of each country over a period of 5 decades.
*	A Line Graph : Showing the Variation between decades in Population vs Temperature.
