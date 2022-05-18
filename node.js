import CryptoJS

function truncate(q) {
    var len = q.length;
    if (len <= 20) return q;
    return q.substring(0, 10) + len + q.substring(len - 10, len);
}

function translateWords() {
    //应用密钥 n8OA7HPkgPN1ArlK7usl1B2ZtmqsO8dP
    //应用ID  7d27cdf0d4d07141


    var appKey = '7d27cdf0d4d07141';
    var key = 'n8OA7HPkgPN1ArlK7usl1B2ZtmqsO8dP';//注意：暴露appSecret，有被盗用造成损失的风险
    var salt = (new Date).getTime();
    var curtime = Math.round(new Date().getTime() / 1000);
    var query = '您好，欢迎再次使用有道智云文本翻译API接口服务';
    // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
    var from = 'en';
    var to = 'zh-CHS';
    var str1 = appKey + truncate(query) + salt + curtime + key;
    var vocabId = '您的用户词表ID';
    //console.log('---',str1);
    console.log(str1)
    var sign = CryptoJS.SHA256(str1).toString(CryptoJS.enc.Hex);
    // var sign = appKey + truncate(query) + salt + curtime + key;

    console.log(JSON.stringify({
        q: query,
        appKey: appKey,
        salt: salt,
        from: from,
        to: to,
        sign: sign,
        signType: "v3",
        curtime: curtime,
        vocabId: vocabId,


    }))
    fetch('https://openapi.youdao.com/api', {
       
            method: 'post',

      
        body: JSON.stringify({
            q: query,
            appKey: appKey,
            salt: salt,
            from: from,
            to: to,
            sign: sign,
            signType: "v3",
            curtime: curtime,
            vocabId: vocabId,


        })


    }).then((e) => {
        console.log(e)
    })
}

translateWords()