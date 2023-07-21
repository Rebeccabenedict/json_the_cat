const fetchBreedDescription= function(breed, callback) {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
        if(error) {
            callback(`Requested informtion unsuccessful ${error}`, null);
        }
        else {
            const data = JSON.parse(body);
            if (data.length === 0) {
                error = 'The requested breed can not be found';
                callback(error);
            }
            else {
                callback(error, data[0].description);
            }
        }
    });
};

module.exports ={ fetchBreedDescription };