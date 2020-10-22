# import flask library
import flask
from flask import jsonify

# create a flask application object
app = flask.Flask(__name__)
# set debug mode, so that errors can be displayed
app.config["DEBUG"] = True

# data to be returned
data = {
    "status": "Success",
    "data": [
        {
            "campaignName": "test_notification",
            "status": "draft",
            "opens": "0",
            "clicks": "0"
        },
        {
            "campaignName": "Sunny Smiles",
            "status": "draft",
            "opens": "0",
            "clicks": "0"
        },
        {
            "campaignName": "Academy by the Sea",
            "status": "draft",
            "opens": "0",
            "clicks": "0"
        },
        {
            "campaignName": "Adirondack",
            "status": "draft",
            "opens": "0",
            "clicks": "0"
        },
        {
            "campaignName": "Beaver Falls",
            "status": "draft",
            "opens": "0",
            "clicks": "0"
        },
    ]
}


@app.route('/', methods=['GET'])
def home():
    return "<h1>Distant Reading Archive</h1><p>This site is a prototype API for distant reading of science fiction novels.</p>"


@app.route('/getCampaignList', methods=['GET'])
def getCampaignList():
    return jsonify(data)


# run the application server
app.run()
