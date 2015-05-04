a3-athern-mahirk
===============

## Team Members

1. Nicole Atherly athern@uw.edu
2. Mahir Kothary mahirk@uw.edu

## Analyzing the Higgs Boson Rumor via Twitter




## Running Instructions

Access our visualization at http://cse512-15s.github.io/a3-athern-mahirk/ or download this repository and run any localhost server preferably:

```sh
npm install connect
npm install serve-static
```
and open a port to view.

This visualization is also available on [Mahir's Website](http://mahirk.me/d3playground/higgstwitter/)

## Story Board

You can find our storyboard [here](storyboard.pdf?raw=true) it includes a detailed explanation on our data sets, on our discovery techniques and partially our process.


### Changes between Storyboard and the Final Implementation

The storyboard primarily mentioned designs which were made on Tableau, which we used to help us visualize the data, as it contained nearly a half a million rows and would be impossible to otherwise now how the data provided created a trend across the days. We stuck to binning the data per day to show a broad overview of the tweets and type of tweets across the periods. We added an animation across the data points, showing them from Jun 30 to Jul 7, per day, so the viewer can follow across for a brief moment as the points are plotted.
The color was changed.

## Development Process

### [Nicole Atherly](http://github.com/athern)

#### Work

* Created Visualizations in Tableau for the development process
* Created interactions
* Graph Design, scaling and animations

#### Difficulty and Process

### [Mahir Kothary](http://github.com/mahirk)

#### Work

* Generated d3 prototypes
* Used d3 technologies to parse the "arbitrarily" delimited data and bin them according to the day and to the type of tweet
* Graph Design, scaling and animations
* Data Point interactions

#### Difficulty and Process

I used the d3.dsv() method to bin the data and continuously printed the data to the console, so that I could see how the data is being parsed from the file. I initially used a smaller file because the original file was very large, and made it difficult for me to compare and check whether the code in anyway is faulty while storing the data. After checking for the same, I plotted the sample points and then  moved on to using the big dataset. However this proved more difficult than I initially expected. This was the most difficult of the program i.e. being able to bin and map the data to allow the points to be plotted across the graph, in a manner that it is shown per day. Due to the timestamp format, and the d3.timescale() method, all the points would automatically position at (0,0) which was incorrect. Over coming this error and being able to bin and plot the data took me 2 hours more than I expected.

In general I took 10 hours across 2 days to develop the visualization and enable the interactions, as well as 1-2 hours more with Nicole to decide the design and styles.

## Bibliography

### BibTex

  @misc{snapnets,
    author       = {Jure Leskovec and Andrej Krevl},
    title        = {{SNAP Datasets}: {Stanford} Large Network Dataset Collection},
    howpublished = {\url{http://snap.stanford.edu/data}},
    month        = jun,
    year         = 2014
  }
