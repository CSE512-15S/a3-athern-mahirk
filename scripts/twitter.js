var margin = {top: 40, right: 40, bottom: 40, left:100},
width = $(window).width() - margin.left - margin.right,
height = $(window).height() - margin.top - margin.bottom-100,
interactionTypes = ["MT", "RT", "RE"];

var x = d3.time.scale()
    .domain([new Date("2012-06-30"), new Date("2012-07-08")])
    .rangeRound([0, width - margin.left - margin.right]);

var y = d3.scale.linear()
    .domain([0, 2000])
    .range([height - margin.top - margin.bottom-120, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom')
    .ticks(d3.time.days, 1)
    .tickFormat(d3.time.format('%b %d'))
    .tickSize(0)
    .tickPadding(8);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left')
    .tickPadding(10);

var svg = d3.select('body').append('svg')
    .attr('class', 'chart')
    .attr('width', width)
    .attr('height', height)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom - 120) + ')')
    .call(xAxis).append("text")
            .attr("dx", width-margin.left)
            .attr("dy", "3em")
            .style("text-anchor", "end")
            .text("Timeline - 2012");

svg.append('g')
  .attr('class', 'y axis')
  .call(yAxis).append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 6)
  .attr("dy", ".7em")
  .style("text-anchor", "end")
  .text("# Tweets ('00s)");

// Add period labels
var perI = svg.append('g')
    .attr('class', 'x axis')
    .attr('class', 'hover')
    .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom - 120) + ')')
    .append("text")
            .attr("dx", width/8)//150)
            .attr("dy", "3.5em")
            .style("text-anchor", "middle")
            .text("Period I");

var periodData = svg.append("text")
    .style({opacity: 0});

perI.on('mouseover', function(d) {
              periodData.attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom - 120) + ')')
              .attr("x", 0)
              .attr("y", "7em")
              .attr("class","info")
              .text("Period 1: Rumors of a Higgs-like boson")
              .style({opacity: 1})
            });

perI.on('mouseout', function(d) {
              periodData.style({opacity: 0});
});

// arrow marker right
svg.append("svg:defs").selectAll("marker")
    .data(["end"])
  .enter().append("svg:marker")
    .attr("id", String)
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 7)
    .attr("refY", 0)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
  .append("svg:path")
    .attr("d", "M0,-5L10,0L0,5");

// arrow marker left
svg.append("svg:defs").selectAll("marker")
    .data(["start"])
    .enter().append("svg:marker")
    .attr("id", String)
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 7)
    .attr("refY", 0)
    .attr("markerWidth", "-6")
    .attr("markerHeight", 6)
    .attr("orient", "auto")
  .append("svg:path")
    .attr("d", "M0,-5L10,0L0,5");

svg.append("svg:line")
 .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom - 120) + ')')
    .attr("x1", width / 25)
    .attr("x2", width / 4)
    .attr("y1", "2em")
    .attr("y2", "2em")
    .attr("marker-start", "url(#start)")
    .attr("marker-end", "url(#end)")
    .style("stroke", "rgb(120,120,120)");

var perII = svg.append('g')
    .attr('class', 'x axis')
    .attr('class', 'hover')
    .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom - 120) + ')')
      .append("text")
            .attr("dx", width/4)//260)
            .attr("dy", "3.5em")
            .style("text-anchor", "middle")
            .text("Period II");

perII.on('mouseover', function(d) {
              periodData
              .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom - 120) + ')')
              .attr("x", width/7)
              .attr("y", "7em")
              .attr("class","info")
              .text("Period II: Higgs particle mass presented")
              .style({opacity: 1})
            });

perII.on('mouseout', function(d) {
                periodData.style({opacity: 0});
              });

svg.append("svg:line")
 .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom - 120) + ')')
    .attr("x1", width / 4)
    .attr("x2", 1.9 * width / 4)
    .attr("y1", "2em")
    .attr("y2", "2em")
    .attr("marker-start", "url(#start)")
    .attr("marker-end", "url(#end)")
    .style("stroke", "rgb(120,120,120)");

var perIII = svg.append('g')
    .attr('class', 'x axis')
    .attr('class', 'hover')
    .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom - 120) + ')')
      .append("text")
            .attr("dx", 1.5 * width / 4)
            .attr("dy", "3.5em")
            .style("text-anchor", "middle")
            .text("Period III");

perIII.on('mouseover', function(d) {
              periodData
              .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom - 120) + ')')
              .attr("x", width / 4)
              .attr("y", "7em")
              .attr("class","info")
              .text("Period III: Rumors of Higgs boson discovery")
              .style({opacity: 1})
            });

perIII.on('mouseout', function(d) {
                periodData.style({opacity: 0});
              });

svg.append("svg:line")
 .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom - 120) + ')')
    .attr("x1", 1.9 * width / 4)
    .attr("x2", 3.2 * width / 4)
    .attr("y1", "2em")
    .attr("y2", "2em")
    .attr("marker-start", "url(#start)")
    .attr("marker-end", "url(#end)")
    .style("stroke", "rgb(120,120,120)");

var perIV = svg.append('g')
    .attr('class', 'x axis')
    .attr('class', 'hover')
    .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom - 120) + ')')
      .append("text")
            .attr("dx", 2.5 * width / 4)
            .attr("dy", "3.5em")
            .style("text-anchor", "middle")
            .text("Period IV");

perIV.on('mouseover', function(d) {
              periodData
              .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom - 120) + ')')
              .attr("x", 1.4*width / 4)
              .attr("y", "7em")
              .attr("class","info")
              .text("Period IV: Results presented indicating existence of new particle compatible with Higgs boson")
              .style({opacity: 1})
            });

perIV.on('mouseout', function(d) {
                periodData.style({opacity: 0});
              });

var tweetData = svg.append('g')
    .attr("class", "tweetinfo")
    .style({opacity: 0});

  var dsv = d3.dsv(" ", "text/plain");
  var data = dsv("data/higgs-activity_time.txt", function(error, data) {
             var vals = d3.nest()
             .key(function(d) { var date = new Date(d.time*1000); return (date.getMonth()+1 + "-" + date.getDate() + "-" + date.getFullYear()); })
             .key(function(d) { return d.interaction; })
             .rollup(function(leaves) { return leaves.length; }).entries(data);
             vals = vals.map(function(d) {
              var interaction = {};
              d.values.forEach(function(e) {
                interaction[e.key] = e;
              });
              return {
                key: d.key,
                values: interaction
              };
            });

            console.log(vals);

            interactionTypes.forEach(function(e){
                var tweet = svg.selectAll("."+ e + "tweet")
               .data(vals, function(d) {
                 return d.key;
               });

               tweet.enter().append("circle")
               .transition()
               .duration(500)
                .attr("class", e + "tweet" + " op")
                .attr("r", 6.5)
                 .attr("cx", function(d) {
                   return x(new Date(d.key));
                 })
                 .attr("cy", function(d) {
                   return y(d.values[e].values/100);
                 }).attr("data-legend", e).delay(function(d) { return x(new Date(d.key))*1.5});

            tweet.on('mouseover', function(d) {
              tweetData
              .style({opacity: 1})
              .append('rect')
              .attr('class','dataT')
              .attr('rx', '5')
              .attr('ry', '5')
              .attr("width", "110px")
              .attr("height", "25px")
              .attr("x", x(new Date(d.key)) + 10)
              .attr("y", y(d.values[e].values/100) - 12)

              tweetData.append('text')
              .attr("x", x(new Date(d.key)) + 20)
              .attr("y", y(d.values[e].values/100) + 5)
              .text(d.values[e].values + "  " + e + "'s ")
            });


            tweet.on('mouseout', function(d) {
                tweetData.style({opacity: 0});
                tweetData.select('rect').remove();
                tweetData.select('text').remove();
              });


                legend = svg.append("g")
                    .attr("class","legend")
                    .attr("transform","translate(50,30)")
                    .style("font-size","12px")
                    .style({opacity: 0})
                    .call(d3.legend)

                  setTimeout(function() {
                    legend
                      .style("font-size","15px")
                      .attr("data-style-padding",15)
                      .style({opacity: 0.9})
                      .call(d3.legend)
                  },1000)


          });

  });

  function redo(){
    $('.REtweet').css('opacity', 1);
    $('.RTtweet').css('opacity', 1);
    $('.MTtweet').css('opacity', 1);
  }

  function mt(){
    $('.REtweet').css('opacity', 0);
    $('.RTtweet').css('opacity', 0);
    $('.MTtweet').css('opacity', 1);
  }

  function rt(){
    $('.REtweet').css('opacity', 0);
    $('.RTtweet').css('opacity', 1);
    $('.MTtweet').css('opacity', 0);
  }

  function re(){
    $('.REtweet').css('opacity', 1);
    $('.RTtweet').css('opacity', 0);
    $('.MTtweet').css('opacity', 0);
  }
