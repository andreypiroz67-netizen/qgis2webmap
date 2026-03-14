var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_1, 
                style: style_building_1,
                popuplayertitle: 'building',
                interactive: false,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_highway_2 = new ol.format.GeoJSON();
var features_highway_2 = format_highway_2.readFeatures(json_highway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_2.addFeatures(features_highway_2);
var lyr_highway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_2, 
                style: style_highway_2,
                popuplayertitle: 'highway',
                interactive: false,
                title: '<img src="styles/legend/highway_2.png" /> highway'
            });
var format_highway_2___highway_3 = new ol.format.GeoJSON();
var features_highway_2___highway_3 = format_highway_2___highway_3.readFeatures(json_highway_2___highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_2___highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_2___highway_3.addFeatures(features_highway_2___highway_3);
var lyr_highway_2___highway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_2___highway_3, 
                style: style_highway_2___highway_3,
                popuplayertitle: 'highway_2___highway',
                interactive: false,
                title: '<img src="styles/legend/highway_2___highway_3.png" /> highway_2___highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_building_1.setVisible(true);lyr_highway_2.setVisible(true);lyr_highway_2___highway_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_building_1,lyr_highway_2,lyr_highway_2___highway_3];
lyr_building_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'source:addr': 'source:addr', 'addr:place': 'addr:place', 'addr:housenumber': 'addr:housenumber', 'address': 'address', });
lyr_highway_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'ref': 'ref', 'oneway': 'oneway', 'service': 'service', 'access': 'access', 'layer': 'layer', 'bridge': 'bridge', 'surface': 'surface', 'name': 'name', });
lyr_highway_2___highway_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'shelter': 'shelter', 'name': 'name', 'barrier': 'barrier', 'access': 'access', });
lyr_building_1.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:street': '', 'source:addr': '', 'addr:place': '', 'addr:housenumber': '', 'address': '', });
lyr_highway_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'ref': '', 'oneway': '', 'service': '', 'access': '', 'layer': '', 'bridge': '', 'surface': '', 'name': '', });
lyr_highway_2___highway_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'shelter': '', 'name': '', 'barrier': '', 'access': '', });
lyr_building_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'source:addr': 'no label', 'addr:place': 'no label', 'addr:housenumber': 'no label', 'address': 'no label', });
lyr_highway_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'ref': 'no label', 'oneway': 'no label', 'service': 'no label', 'access': 'no label', 'layer': 'no label', 'bridge': 'no label', 'surface': 'no label', 'name': 'no label', });
lyr_highway_2___highway_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'shelter': 'no label', 'name': 'no label', 'barrier': 'no label', 'access': 'no label', });
lyr_highway_2___highway_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});