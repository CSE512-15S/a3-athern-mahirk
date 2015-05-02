var margin = {top: 40, right: 40, bottom: 40, left:100},
width = $(window).width() - margin.left - margin.right,
height = $(window).height() - margin.top - margin.bottom-200,
interactionTypes = ["MT", "RT", "RE"];

var x = d3.time.scale()
    .domain([new Date("2012-06-30"), new Date("2012-07-08")])
    .rangeRound([0, width - margin.left - margin.right]);

var y = d3.scale.linear()
    .domain([0, 2000])
    .range([height - margin.top - margin.bottom-20, 0]);

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
    .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom - 20) + ')')
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
  .text("# Tweets ('00)");

var tweetData = svg.append("text")
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
              .attr("x", x(new Date(d.key)) + 10)
              .attr("y", y(d.values[e].values/100) + 5)
              .text(d.values[e].values + "  " + e + "'s")
              .style({opacity: 1})
            });


            tweet.on('mouseout', function(d) {
                tweetData.style({opacity: 0});
              });


                legend = svg.append("g")
                    .attr("class","legend")
                    .attr("transform","translate(50,30)")
                    .style("font-size","12px")
                    .call(d3.legend)

                  setTimeout(function() {
                    legend
                      .style("font-size","15px")
                      .attr("data-style-padding",15)
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
