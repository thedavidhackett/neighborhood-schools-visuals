import http.client, urllib.parse

conn = http.client.HTTPConnection('api.positionstack.com')

params = urllib.parse.urlencode({
    'access_key': 'f75051dc09d9632f4d2de7b8d7cabdac',
    'query': '3911 Castleman Ave, Saint Louis',
    'limit': 1,
    })

conn.request('GET', '/v1/forward?{}'.format(params))

res = conn.getresponse()
data = res.read()

print(data.decode('utf-8'))
