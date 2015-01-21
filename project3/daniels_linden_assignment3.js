var pupWeights = [ 15, 25, 10, 11, 6, 8 ];

var myMean = function () {

  while (var i = 0; i < pupWeights.length; i++); {

	var pupWeight = pupWeights[i],
		sum = sum + pupWeight,
		mean = sum / pupWeights.length;
	
return mean;
  }
};


myMean();