# Saint Louis Neighborhood Schools Visuals

This project was created to visualize the decline of neighborhood schools in Saint Louis Public Schools (SLPS) and the rise of charter schools since the first charter arrived in 2001.

## How the project was created

In the data cleaning folder there are a collection of csv files and jupyter notebooks (not well organized, sorry) I used to combine data from different sources, clean, and format for use in the visuals. I used ArcGIS to geocode the addresses of schools and display them on a map. I used pandas for most of the data cleaning and combining (I did some by hand in excel). The charts use [Chart.js](https://www.chartjs.org/) and the maps use ArcGis JavaScript [api](https://developers.arcgis.com/javascript/latest/).

## Run the project locally

Make sure you have node installed

Inside project directory run npx http-server

Navigate to localhost:8080
