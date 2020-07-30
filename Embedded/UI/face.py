import requests
import json

# set to your own subscription key value
subscription_key = "<API KEY>"
#subscription_key = "6242b5b439c34f4a8718db27e1a46a89"
assert subscription_key

# replace <My Endpoint String> with the string from your endpoint URL
face_api_url = 'https://leesj.cognitiveservices.azure.com//face/v1.0/detect'

#image_url = '<IMAGE URL>'

headers = {'Ocp-Apim-Subscription-Key': subscription_key}

params = {
    'returnFaceId': 'true',
    'returnFaceLandmarks': 'false',
    #'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise',
    'returnFaceAttributes' : 'emotion',
}

response = requests.post(face_api_url, params=params, headers=headers, json={"url": image_url})
print(json.dumps(response.json()))
