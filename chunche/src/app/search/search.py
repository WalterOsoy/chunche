import requests, json
BASE_URI = 'https://api.bing.microsoft.com/v7.0/images/visualsearch?count=10'
SUBSCRIPTION_KEY = 'd3605b4ced1e4bc2b76871ecfa92ee44'
imagePath = 'search.jpg'

HEADERS = {'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY}
file = {'image' : ('myfile', open(imagePath, 'rb'))}

try:
    response = requests.post(BASE_URI, headers=HEADERS, files=file)
    response.raise_for_status()
    json_data = response.json()
    tags = json_data["tags"]
    results = []
    for tag in tags:
        if tag["displayName"] == "":
            actions = tag["actions"]
            for action in actions:
                if action["actionType"] == "VisualSearch":
                    data = action["data"]
                    values = data["value"]
                    for value in values:
                        results.append({
                            "image": value["contentUrl"],
                            "url": value["hostPageDisplayUrl"],
                            "name": value["name"]
                        })

    apiResponse = json.dumps(results)
    print(apiResponse)
except Exception as ex:
    raise ex