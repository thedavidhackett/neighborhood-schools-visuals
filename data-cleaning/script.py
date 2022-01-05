import numpy as np
import pandas as pd
import http.client, urllib.parse
import json
import ast

stl_schools = pd.read_csv("stl_city_schools_cleaned.csv")

# addresses = stl_schools['SCHADDR1'].unique()
addressesWithLatLong = {}

for idx, school in stl_schools.iterrows():
        if school['SCHADDR1'] in addressesWithLatLong.keys():
            continue
        else:
            address = school['SCHADDR1']
            zip_code = str(school['SCHZIP'])[0:5]

            conn = http.client.HTTPSConnection('geocode-api.arcgis.com')

            params = urllib.parse.urlencode({
            # 'key': 'HDO13jty9lFRaJ0jLhY8iqA4KMVkO9kU',
            'f': 'json',
            'address': address,
            'postal': zip_code,
            'city': "Saint Louis",
            'maxLocations': 1,
            'outFields': 'location',
            'token': 'AAPKdddfc1d9ded74ffa93cf8d19c90be8aehPv2u_JLKGjwgy3-6-bMYlcFgSKfIZOj8SbO262KI41LTGOCfiITnzE7kapPZTV8'
            })

            conn.request('GET', '/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?{}'.format(params))
            res = conn.getresponse()
            data_bytes = res.read()
            data_dict = json.loads(data_bytes)
            latlong = data_dict['candidates'][0]['location']
            addressesWithLatLong[address] = {'lat': latlong['y'], 'lng': latlong['x']}

with open("latlong.json", "w") as outfile:
    json.dump(addressesWithLatLong, outfile)
