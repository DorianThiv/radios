# Compress outdir
#tar -a -c -f radio.zip src
# Copy out dir over ssh connection
scp -r meevent.zip nairodhit@192.168.1.77:~/Meevent
