a3-athern-mahirk
===============

## Team Members

1. Nicole Atherly athern@uw.edu
2. Mahir Kothary mahirk@uw.edu

## Analyzing the Higgs Boson Rumor via Twitter

Rumors of the discovery of a Higgs-like particle spread through twitter before and after the announcement on July 4th, 2012. Our visualization shows how the amount of tweets spiked on that day and how tweet amounts changed during the four periods surrounding the Higgs-like particle discovery announcement. It also shows the difference in numbers of retweets, replies, and mentions, with retweets being most common. Viewers can choose to view only one type of tweet, can read the exact number of tweets per category per day, and can read more information about each period.


## Running Instructions

Access our visualization at http://cse512-15s.github.io/a3-athern-mahirk/ or download this repository and run any localhost server preferably:

```sh
npm install connect
npm install serve-static
```
and open a port to view.

This visualization is also available on [Mahir's Website](http://mahirk.me/d3playground/higgstwitter/)

It will work best in Google Chrome and Internet Explorer.

## Story Board

Our storyboard covers our data exploration and design process. It can be viewed [here](storyboard.pdf?raw=true). We started out looking at our data in Tableau, but due to the large nature of the dataset, it proved difficult to iterate over different visualizations. Instead, we chose to narrow our data and decided to focus primarily on the activity time data. From this, we ended up with the basis for our final implementation of a scatterplot of the different types of tweets per day.


### Changes between Storyboard and the Final Implementation

* We added an animation across the data points, showing them from Jun 30 to Jul 7, per day, so the viewer can follow across for a brief moment as the points are plotted. 
* The colors of the different types of tweets was changed in the final implementation to account for color blindness. 
* We also expanded on the Period I-IV labels that appear below the x-axis of the graph. We found the best way to explain what each period was for was to add a mouse over interaction that displays information on each period.

## Development Process

### [Nicole Atherly](http://github.com/athern)

#### Work

* Created Visualizations in Tableau for the development process
* Created interactions
* Graph Design, scaling and animations

#### Difficulty and Process

First loading the entirety of the dataset into Tableau took a great amount of time. After the initial data load, any subsequent operation would take somewhere around 8 minutes. I found this to be much too slow to be of any use, so I instead switched to just looking at the higgs-activity_time data. It was much faster to iterate through designs using this amount of data, and so I was able to explore the data more quickly. This process probably took a few hours overall.

The programming tasks I worked on probably took me longer than someone with more experience in JavaScript and D3 would take. I spent a lot of time reading through the documentation and examples, and hit quite a few dead ends for the tasks I was trying to implement before I found something that worked. I also ran into some compatibility issues with the browser I was using, which took some time to figure out. These tasks took much longer than the exploration/design tasks, probably closer to 6+ hours.

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
