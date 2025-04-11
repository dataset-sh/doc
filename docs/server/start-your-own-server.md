# Host your own dataset.sh server

## Who may want to use dataset.sh server

`dataset.sh` server mainly serves 2 purposes:

1. It can act as a data viewer and dataset management GUI for local user.
2. it can also be useful to use within a research group/company.

## Use Case: Local Development Server

If you are only using `dataset.sh` on your only machine for yourself, you can run the server with default configuration
using:

```shell
dataset-sh-server start
```

## Use Case: Group/Public Server

If you are hosting `dataste.sh` for your organization of a public server, we suggest using our docker image, but you can
also run the server with the standard python installation.

### Using Docker

```shell
export DATASET_STORAGE_FOLDER=/PATH/TO/STORAGE_FOLDER
docker run -v ${DATASET_STORAGE_FOLDER}:/var/lib/dsh-server -p 8989:8989 -d datasetsh/server:latest
```

After mounting your desired folder to `/var/lib/dsh-server`, you can use the docker image to config your server.

```shell
# create empty config file.
docker run \
  -v ${DATASET_STORAGE_FOLDER}:/var/lib/dsh-server \
  datasetsh/server:latest dataset-sh-server config init

# set hostname
docker run \ 
  -it \ 
  -v ${DATASET_STORAGE_FOLDER}:/var/lib/dsh-server \
  datasetsh/server:latest dataset-sh-server config set-hostname http://YOUR-HOST-NAME:PORT

# set hostname
docker run \ 
  -it \ 
  -v ${DATASET_STORAGE_FOLDER}:/var/lib/dsh-server \
  datasetsh/server:latest dataset-sh-server config set-password [USERNAME]
```

### Without Docker

Use the following

```shell
cd /PATH/TO/STORAGE_FOLDER
dataset-sh-server config init
dataset-sh-server config set-password [USERNAME]
dataset-sh-server config set-hostname http://YOUR-HOST-NAME:PORT
```

If you want to host the server for your organization, you should consider deploy the server using web server such
as  `gunicorn` or `waitress`. Please refer to
the [flask deployment guide](https://flask.palletsprojects.com/en/3.0.x/deploying/) for more detail.

For example:

```shell
gunicorn -b 0.0.0.0:8989 "dataset_sh.server.app:create_app()"
```
