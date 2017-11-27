$(document).ready(function() {
    document.getElementById('ok').onclick = function() {
        $.get(
            "http://api.openweathermap.org/data/2.5/weather", {
                // "id": +document.getElementById('start').value,
                "id": +sel.value,
                // "id": 703448,
                "appid": "4695cfd5e8b6b5aff3e5dbdd835f1a0d"
            },
            function(data) {
                console.log(data);
                console.log('id ' + data.id);
                console.log('city ' + data.name);
                console.log('country ' + data.sys.country);
                var temp = data.main.temp - 274;
                console.log('temp C ' + temp);
                console.log('humidity % ' + data.main.humidity + '%');
                // var press = data.main.pressure * 0.00750062
                // console.log('pressure mm ' + press + 'mm');
                console.log('pressure mm ' + data.main.pressure + 'mm');
                console.log('visibility ' + data.visibility);
                console.log('wind speed ' + data.wind.speed + ' wind speed ' + data.wind.deg);
                console.log('weather ' + data.weather[0].description);


                var res = '';
                res += 'id ' + data.id + '<br>';
                res += 'city ' + data.name + '<br>';
                res += 'country ' + data.sys.country + '<br>';
                res += 'temp C ' + Math.round(temp * 100) / 100 + '<br>';
                res += 'humidity ' + data.main.humidity + '%' + '<br>';
                res += 'pressure ' + data.main.pressure + 'mm' + '<br>';
                res += 'visibility ' + data.visibility + '<br>';
                res += 'wind speed ' + data.wind.speed + ' wind deg ' + data.wind.deg + '<br>';
                res += 'weather ' + data.weather[0].description + '<br>';
                res += '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">'

                document.getElementById('output').innerHTML = res;
            }
        );

        // document.getElementById('ok').onclick = function() {
        //     console.log(document.getElementById('start').value);
        // }


        var res = [{
                "id": 707860,
                "name": "Hurzuf",
                "country": "UA",
                "coord": {
                    "lon": 34.283333,
                    "lat": 44.549999
                }
            },
            {
                "id": 703363,
                "name": "Laspi",
                "country": "UA",
                "coord": {
                    "lon": 33.733334,
                    "lat": 44.416668
                }
            },
            {
                "id": 713514,
                "name": "Alupka",
                "country": "UA",
                "coord": {
                    "lon": 34.049999,
                    "lat": 44.416668
                }
            },
            {
                "id": 690856,
                "name": "Tyuzler",
                "country": "UA",
                "coord": {
                    "lon": 34.083332,
                    "lat": 44.466667
                }
            },
            {
                "id": 707716,
                "name": "Il’ichëvka",
                "country": "UA",
                "coord": {
                    "lon": 34.383331,
                    "lat": 44.666668
                }
            },
            {
                "id": 697959,
                "name": "Partyzans’ke",
                "country": "UA",
                "coord": {
                    "lon": 34.083332,
                    "lat": 44.833332
                }
            },
            {
                "id": 711349,
                "name": "Bucha",
                "country": "UA",
                "coord": {
                    "lon": 30.366671,
                    "lat": 50.583328
                }
            },
            {
                "id": 688105,
                "name": "Yevpatoriya",
                "country": "UA",
                "coord": {
                    "lon": 33.355831,
                    "lat": 45.197224
                }
            },
            {
                "id": 703845,
                "name": "Kryvyy Rih",
                "country": "UA",
                "coord": {
                    "lon": 33.349998,
                    "lat": 47.916668
                }
            },
            {
                "id": 690791,
                "name": "Ukraine",
                "country": "UA",
                "coord": {
                    "lon": 32,
                    "lat": 49
                }
            },
            {
                "id": 703447,
                "name": "Misto Kyyiv",
                "country": "UA",
                "coord": {
                    "lon": 30.516666,
                    "lat": 50.433334
                }
            },
            {
                "id": 703883,
                "name": "Avtonomna Respublika Krym",
                "country": "UA",
                "coord": {
                    "lon": 34,
                    "lat": 45
                }
            }
        ]

        console.log(sel.value);

    }
})