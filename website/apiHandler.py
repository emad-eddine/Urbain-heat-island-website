import os
import requests
from usgs import api
import urllib.parse
import json
from landsatxplore.api import API
from .utils import *


def createSeason():

    apiLog = API(API_USERNAME, API_PASSWORD)
    API_KEY = api.login(API_USERNAME, API_PASSWORD)["data"]
    return apiLog,API_KEY


def searchForScene(apiLogin,lat,long,startData,endDate):
    scenes = apiLogin.search(
    dataset= API_DATASET,
    latitude=float(lat),
    longitude=float(long),
    start_date=startData,
    end_date= endDate,
    max_cloud_cover=MAX_CLOUD_COVER)

    return scenes

# we need to use LANDSAT8 L1
def checkSceneIsLevelOne(scene):

    sceneId = ""

    id = str(scene["display_id"])[ 0 : 7 ]
    if id == "LC08_L1": 
        sceneId = scene["entity_id"] 
           
    return sceneId

def checkSceneIdsLevelOneForProfile(scene):

    sceneId = ""
    date = ""

    id = str(scene["display_id"])[ 0 : 7 ]
    if id == "LC08_L1": 
        sceneId = scene["entity_id"] 
        date = scene["acquisition_date"] 
        date = str(date)[0:7] 
    return sceneId,date


def getDownloadOption(entity_id,API_KEY):
    downloadOptions = api.download_options(dataset=API_DATASET,
                                  entity_ids=entity_id,
                                  api_key=API_KEY)


    return downloadOptions




def getIDsForDownloadUrlForBand(bandsList,downloadOptions):

    bandsIds = {}

    for d1 in downloadOptions['data']:

        if d1["available"] == True:
            for d2 in d1["secondaryDownloads"]:
                if d2["available"] == True and d2["bulkAvailable"] == True :
                    bandName = str(d2["entityId"])
                    for band in bandsList :
                        comparedStr = str(band) + "_TIF"
                        if band != 10 or band!=11:
                            if bandName[-5:] == comparedStr :
                                bandsIds[band] = {"entityId":d2["entityId"],"productId":d2["id"]}
                        if band == 10 or band == 11:
                            if bandName[-6:] == comparedStr :
                                bandsIds[band] = {"entityId":d2["entityId"],"productId":d2["id"]}


    return bandsIds


def getDownloadUrl(bandsIds,BAND_LIST,API_KEY):
    
    urls = {}

    for b in BAND_LIST :
        ur = api.download_request(
        dataset = str(API_DATASET),
        entity_id = bandsIds[b]["entityId"],
        product_id = bandsIds[b]["productId"],
        api_key=API_KEY)

        for d1 in ur['data']["availableDownloads"]:
            url = d1["url"]

        urls[b] = url
    
    return urls
    


def logoutFromApi():
    api.logout()






    


