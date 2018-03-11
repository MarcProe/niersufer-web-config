cp /etc/prometheus/prometheus.yml prometheus
cp /etc/systemd/system/prometheus.service prometheus
cp  /etc/systemd/system/node_exporter.service prometheus
cp /etc/influxdb/influxdb.conf influxdb
cp /etc/systemd/system/influxd.service influxdb
cp /var/www/html/config.json hopglass
cp /opt/hopglass-server/config.json hopglass-server
cp /etc/nginx/sites-enabled/default nginx
