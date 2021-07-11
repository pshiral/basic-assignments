var FAILURE_COEFF = 10;
var MAX_SERVER_LATENCY = 200;

function getRandomBool(n) {
    var maxRandomCoeff = 1000;
    if (n > maxRandomCoeff) n = maxRandomCoeff;
    return Math.floor(Math.random() * maxRandomCoeff) % n === 0;
}

function getSuggestions(text) {
    var pre = 'pre';
    var post = 'post';
    var results = [];
    if (getRandomBool(2)) {
        results.push(pre + text);
    }
    if (getRandomBool(2)) {
        results.push(text);
    }
    if (getRandomBool(2)) {
        results.push(text + post);
    }
    if (getRandomBool(2)) {
        results.push(pre + text + post);
    }
    return new Promise((resolve, reject) => {
        var randomTimeout = Math.random() * MAX_SERVER_LATENCY;
        setTimeout(() => {
            if (getRandomBool(FAILURE_COEFF)) {
                reject();
            } else {
                resolve(results);
            }
        }, randomTimeout);
    });
}

function getArticle(articleId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        	if (getRandomBool(10)) {
        		reject(`Failed article ${articleId}`);
	        } else {
            resolve(`Resolved article ${articleId}`);
            console.log('resolving article', articleId);
            }
        }, Math.random() * 1000);
    });
}

function getArticleIds(page) {
	let ids = [];
  const pageSize=10;
  for (let i=0; i<pageSize; i++) {
	  ids.push(page*pageSize + i);
  }

  return new Promise((resolve, reject) => {
  	setTimeout(() => {
  		resolve(ids);
  	}, Math.random() * 1000);
  });
}


export const Api = { getSuggestions, getArticleIds, getArticle };
