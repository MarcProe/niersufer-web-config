module.exports = function () {
  return {
    // Variables are NODE_ID and NODE_NAME (only a-z0-9\- other chars are replaced with _)
    'nodeInfos': [
      {
        'name': 'Clientstatistik',
        'href': '/grafana/d/000000002/node_yanic?refresh=1m&orgId=2&var-node={NODE_ID}&var-saveinterval=60',
        'image': '/grafana/render/d-solo/000000002/node_yanic?refresh=1m&orgId=2&var-node={NODE_ID}&var-saveinterval=60&panelId=1&tab=display&width=1000&height=500&tz=UTC%2B01%3A00',
        'title': 'Knoten {NODE_NAME} - weiteren Statistiken'
      },
      {
        'name': 'Trafficstatistik',
        'href': '/grafana/d/000000002/node_yanic?refresh=1m&orgId=2&var-node={NODE_ID}&var-saveinterval=60',
        'image': '/grafana/render/d-solo/000000002/node_yanic?refresh=1m&orgId=2&var-node={NODE_ID}&var-saveinterval=60&panelId=2&tab=display&width=1000&height=500&tz=UTC%2B01%3A00',
        'title': 'Knoten {NODE_ID} - weiteren Statistiken'
      }
    ],
    'linkInfos': [
      {
        'name': 'Statistik für alle Links zwischen diese Knoten',
        'image': 'https://grafana.regensburg.freifunk.net/render/d-solo/000000026/node?panelId=7&var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&from=now-7d&&width=650&height=350&theme=light&_t={TIME}',
        'title': 'Linkstatistik des letzten Tages, min und max aller Links zwischen diesen Knoten'
      }
    ],
    // Array of data provider are supported
    'dataPath': [
      'https://hopglass.freifunk-niersufer.de/meshviewer/data/'
    ],
    'siteName': 'Freifunk Niersufer',
    'mapLayers': [
      {
        'name': 'CartoDB.Positron',
        'url': 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
        'config': {
          'maxZoom': 19,
          'attribution' :'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
          'subdomains': 'abcd'
        }
      },
      {
        'name': 'CartoDB.DarkMatter',
        'url': 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
        'config': {
          'maxZoom': 19,
          'mode': 'night',
          'attribution' :'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
          'subdomains': 'abcd'
        }
      },
      {
        'name': 'OpenStreetMap.HOT',
        'url': 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        'config': {
          'maxZoom': 19,
          'attribution': '&copy; Openstreetmap France | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      },
      {
        'name': 'Esri.WorldImagery',
        'url': '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'config': {
          'maxZoom': 20,
          'attribution': 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }
      },
    ],
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
        51.529251355, 6.156463623
      ],
      // Southeast
      [
        51.160399394, 6.698913574
      ]
    ],
    'siteNames': [
      {
        'site': 'ffniers',
        'name': 'Niersufer'
      },
      {
        'site': 'ffmg',
        'name': 'Mönchengladbach'
      }
    ]
  };
};

